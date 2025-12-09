import imaplib
import email
import smtplib
from email.message import EmailMessage
from flask import Flask, jsonify, abort, request
from flask_cors import CORS
import os
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Allow your frontend (React/Vite) to talk to this backend
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "http://localhost:5174"]}})

# --- Configuration ---
# 1. Update these with your NEW credentials (do not share them)
EMAIL_ADDRESS = "shadabraza281@gmail.com"
APP_PASSWORD = "lnev rzxm anml yklj" # Generate a new one!

# Server Config
IMAP_SERVER = 'imap.gmail.com'
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587

# --- Database Setup (For local backup of messages) ---
DB_PATH = os.path.join(os.path.dirname(__file__), 'messages.db')

def init_db():
    conn = sqlite3.connect(DB_PATH)
    try:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                subject TEXT,
                message TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
        """)
        conn.commit()
    finally:
        conn.close()

init_db()

# --- Route 1: Check Inbox (IMAP) ---
@app.route('/inbox', methods=['GET'])
def get_emails():
    """Fetches the last 5 emails from your inbox."""
    try:
        mail = imaplib.IMAP4_SSL(IMAP_SERVER)
        mail.login(EMAIL_ADDRESS, APP_PASSWORD)
        mail.select('inbox')

        status, messages = mail.search(None, 'ALL')
        if status != 'OK':
            abort(500, description="Failed to search emails.")

        email_ids = messages[0].split()
        latest_emails = email_ids[-5:] # Get last 5

        email_data = []

        for e_id in reversed(latest_emails):
            status, msg_data = mail.fetch(e_id, '(RFC822)')
            if status != 'OK': continue

            raw_email = msg_data[0][1]
            msg = email.message_from_bytes(raw_email)
            
            email_data.append({
                'id': e_id.decode(),
                'subject': msg['subject'],
                'from': msg['from'],
                'date': msg['date']
            })

        mail.close()
        mail.logout()

        return jsonify({'status': 'success', 'emails': email_data})

    except Exception as e:
        print(f"IMAP Error: {e}")
        return jsonify({'status': 'error', 'message': str(e)}), 500


# --- Route 2: Submit Contact Form (SMTP) ---
@app.route('/api/contact', methods=['POST'])
def contact():
    # 1. Get Data
    data = request.get_json(silent=True) or {}
    name = (data.get('name') or data.get('from_name') or '').strip()
    visitor_email = (data.get('email') or data.get('from_email') or '').strip()
    message_body = (data.get('message') or '').strip()

    if not name or not visitor_email or not message_body:
        return jsonify({'error': 'Missing required fields.'}), 400

    subject = f"Shadab's Portfolio Message to {name}"
    created_at = datetime.utcnow().isoformat()
    sent_status = False

    # 2. Save to Database (Backup)
    try:
        conn = sqlite3.connect(DB_PATH)
        cur = conn.cursor()
        cur.execute(
            'INSERT INTO messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?)',
            (name, visitor_email, subject, message_body, created_at)
        )
        conn.commit()
        msg_id = cur.lastrowid
        conn.close()
    except Exception as e:
        return jsonify({'error': f"Database error: {str(e)}"}), 500

    # 3. Send Email (SMTP)
    try:
        msg = EmailMessage()
        
        # VISUAL FIX: Put visitor name in Subject
        msg['Subject'] = subject 
        
        # GOOGLE SECURITY RULE: 'From' MUST be YOU.
        msg['From'] = EMAIL_ADDRESS 
        
        # Send TO yourself
        msg['To'] = EMAIL_ADDRESS
        
        # REPLY FIX: Hitting "Reply" goes to the visitor
        msg['Reply-To'] = visitor_email 

        # Content
        msg.set_content(f"""
        New Contact Form Submission
        ---------------------------
        Name: {name}
        Email: {visitor_email}
        ---------------------------
        
        Message:
        {message_body}
        
        (Saved to DB ID: {msg_id})
        """)

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(EMAIL_ADDRESS, APP_PASSWORD)
            smtp.send_message(msg)
        
        sent_status = True
        return jsonify({'ok': True, 'id': msg_id, 'sent': sent_status})

    except Exception as e:
        print(f"SMTP Error: {e}")
        # We return 200 even if email fails, as long as DB save worked, 
        # but we let the frontend know 'sent': False
        return jsonify({'ok': True, 'id': msg_id, 'sent': False, 'error': str(e)})


# --- Route 3: List Saved Messages (Admin View) ---
@app.route('/api/messages', methods=['GET'])
def list_messages():
    try:
        conn = sqlite3.connect(DB_PATH)
        # Return results as dictionary-like objects
        conn.row_factory = sqlite3.Row 
        cur = conn.cursor()
        cur.execute('SELECT * FROM messages ORDER BY id DESC LIMIT 50')
        rows = cur.fetchall()
        
        # Convert sqlite3.Row objects to dicts
        items = [dict(row) for row in rows]
        
        conn.close()
        return jsonify({'count': len(items), 'messages': items})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)