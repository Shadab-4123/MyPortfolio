export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 text-sm dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Shadab Raza</p>
          <div className="flex gap-4">
            <a href="mailto:shadab@example.com" className="underline hover:text-emerald-500">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="underline hover:text-emerald-500">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="underline hover:text-emerald-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}