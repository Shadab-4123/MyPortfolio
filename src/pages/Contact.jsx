import { useEffect, useState } from 'react'
import Container from '../components/Container'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {}, [])

const onSubmit = (e) => {
  e.preventDefault()
  setError('')
  setSuccess('')

  if (!name || !email || !message) {
    setError('Please fill all required fields.')
    return
  }

  const emailPattern = /.+@.+\..+/
  if (!emailPattern.test(email)) {
    setError('Please enter a valid email address.')
    return
  }

  const templateParams = {
    name,
    email,
    subject,
    message,
  }
  setIsSending(true)
  fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(templateParams)
  })
    .then(async (res) => {
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.error || 'Failed to send message. Please try again later.')
      setSuccess("Message received. I'll get back to you soon.")
      setName('')
      setEmail('')
      setMessage('')
    })
    .catch((err) => {
      setError(err?.message || 'Failed to send message. Please try again later.')
    })
    .finally(() => setIsSending(false))
}


  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 dark:bg-neutral-900 dark:text-white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="px-4 sm:px-8 py-12 md:py-16">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-extrabold">Contact Details</h2>
                <div className="h-[2px] w-32 bg-emerald-500"></div>
              </div>
              <dl className="mt-8 space-y-5 text-sm">
                <div className="flex gap-4">
                  <dt className="w-24 text-emerald-400">Phone :</dt>
                  <dd className="text-gray-800 dark:text-gray-200">+91 6398184799</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-24 text-emerald-400">Address:</dt>
                  <dd className="text-black-200 flex-1 whitespace-pre-line">
                    Outer Ring Road, Agara Village,
                    {'\n'}Sector 1st, HSR Layout,
                    {'\n'}Bengaluru – 560 102
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-24 text-emerald-400">Email :</dt>
                  <dd className="text-gray-800 dark:text-gray-200">shadabraza281@gmail.com</dd>
                </div>
              </dl>
            </div>
            <div className="px-4 sm:px-8 py-12 md:py-16">
              <div className="rounded-2xl bg-white p-6 text-neutral-900 shadow dark:bg-neutral-800 dark:text-white">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-600"><path d="M3 8l9 6 9-6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"/><path d="M21 8 12 14 3 8l9-5 9 5Z"/></svg>
                  <h3 className="text-base font-semibold">Send Me a Message</h3>
                </div>
                <form className="mt-4 space-y-4" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="text-sm">
                      <span className="mb-1 block">Your Name<span className="text-red-500"> *</span></span>
                      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 focus:border-emerald-600 focus:outline-none dark:bg-neutral-900 dark:text-white dark:border-neutral-700" placeholder="John Doe" required />
                    </label>
                    <label className="text-sm">
                      <span className="mb-1 block">Email Address<span className="text-red-500"> *</span></span>
                      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 focus:border-emerald-600 focus:outline-none dark:bg-neutral-900 dark:text-white dark:border-neutral-700" placeholder="john@example.com" required />
                    </label>
                  </div>
                  <label className="text-sm block">
                    <span className="mb-1 block">Subject</span>
                    <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 focus:border-emerald-600 focus:outline-none dark:bg-neutral-900 dark:text-white dark:border-neutral-700" placeholder="How can I help?" />
                  </label>
                  <label className="text-sm block">
                    <span className="mb-1 block">Message<span className="text-red-500"> *</span></span>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={5} className="w-full rounded border border-gray-300 px-3 py-2 focus:border-emerald-600 focus:outline-none dark:bg-neutral-900 dark:text-white dark:border-neutral-700" placeholder="Tell me about your project, opportunity, or just say hello..." required />
                  </label>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  {success && <p className="text-sm text-emerald-600">{success}</p>}
                  <div className="flex justify-end">
                    <button type="submit" disabled={isSending} className="inline-flex items-center gap-2 rounded bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed">
                      {isSending ? 'Sending…' : 'Send Message'}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M21 3 3 10l8 2 2 8 8-17Z"/></svg>
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">* Required fields. I'll respond within 24 hours.</p>
                </form>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 opacity-30 dark:block hidden [background:radial-gradient(circle,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:10px_10px]"></div>
        </div>
      </Container>
    </section>
  )
}
