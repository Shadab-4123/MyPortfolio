// import { useEffect, useState } from 'react'

// function useTheme() {
//   const getInitial = () => {
//     const t = localStorage.getItem('theme')
//     if (t === 'light' || t === 'dark') return t
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
//   }
//   const [theme, setTheme] = useState(getInitial)
//   useEffect(() => {
//     const root = document.documentElement
//     root.classList.toggle('dark', theme === 'dark')
//     localStorage.setItem('theme', theme)
//   }, [theme])
//   const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
//   return { theme, toggle }
// }

// export default function Header() {
//   const { theme, toggle } = useTheme()
//   const [open, setOpen] = useState(false)
//   return (
//     <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-black/60">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-14 items-center justify-between">
//           <a href="#home" className="font-semibold">Shadab Raza</a>
//           <div className="flex items-center gap-2">
//             <nav className="hidden md:flex items-center gap-4 text-sm">
//               <a href="#about" className="hover:text-blue-600">About</a>
//               <a href="#projects" className="hover:text-blue-600">Projects</a>
//               <a href="#experience" className="hover:text-blue-600">Experience</a>
//               <a href="#achievements" className="hover:text-blue-600">Achievements</a>
//               <a href="#skills" className="hover:text-blue-600">Skills</a>
//               <a href="#contact" className="hover:text-blue-600">Contact</a>
//             </nav>
//             <button
//               type="button"
//               aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
//               title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
//               onClick={toggle}
//               className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-200"
//             >
//               {theme === 'dark' ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
//                   <path d="M21.752 15.002A9 9 0 1 1 12 3a7 7 0 0 0 9.752 12.002z" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
//                   <path d="M12 3.75v-2.25m0 20.25v-2.25M4.22 4.22l-1.59-1.59m17.66 17.66l-1.59-1.59M3.75 12H1.5m21 0h-2.25M4.22 19.78l-1.59 1.59m17.66-17.66l-1.59 1.59M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5z"/>
//                 </svg>
//               )}
//             </button>
//             <button
//               type="button"
//               className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm md:hidden dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-200"
//               aria-label="Open menu"
//               onClick={() => setOpen(true)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {open && (
//         <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur dark:bg-black/80">
//           <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//             <span className="font-semibold">Menu</span>
//             <button
//               type="button"
//               className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-200"
//               aria-label="Close menu"
//               onClick={() => setOpen(false)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M6 6l12 12M6 18L18 6"/></svg>
//             </button>
//           </div>
//           <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-3 text-lg">
//             <a href="#about" onClick={() => setOpen(false)} className="block py-2">About</a>
//             <a href="#projects" onClick={() => setOpen(false)} className="block py-2">Projects</a>
//             <a href="#experience" onClick={() => setOpen(false)} className="block py-2">Experience</a>
//             <a href="#achievements" onClick={() => setOpen(false)} className="block py-2">Achievements</a>
//             <a href="#skills" onClick={() => setOpen(false)} className="block py-2">Skills</a>
//             <a href="#contact" onClick={() => setOpen(false)} className="block py-2">Contact</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }



import { useEffect, useState } from 'react'

function useTheme() {
  const getInitial = () => {
    const t = localStorage.getItem('theme')
    if (t === 'light' || t === 'dark') return t
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  const [theme, setTheme] = useState(getInitial)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return { theme, toggle }
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="text-base font-semibold sm:text-lg">Shadab Raza</a>

          {/* Desktop nav + theme toggle */}
          <nav className="hidden items-center gap-3 text-sm md:flex lg:gap-4">
            {['About','Projects','Experience','Achievements','Skills','Contact'].map(t => (
              <a key={t} href={`#${t.toLowerCase()}`} className="hover:text-emerald-500">{t}</a>
            ))}
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.752 15.002A9 9 0 1 1 12 3a7 7 0 0 0 9.752 12.002z" /></svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3.75v-2.25m0 20.25v-2.25M4.22 4.22l-1.59-1.59m17.66 17.66l-1.59-1.59M3.75 12H1.5m21 0h-2.25M4.22 19.78l-1.59 1.59m17.66-17.66l-1.59 1.59M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5z" /></svg>
              )}
            </button>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.752 15.002A9 9 0 1 1 12 3a7 7 0 0 0 9.752 12.002z" /></svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3.75v-2.25m0 20.25v-2.25M4.22 4.22l-1.59-1.59m17.66 17.66l-1.59-1.59M3.75 12H1.5m21 0h-2.25M4.22 19.78l-1.59 1.59m17.66-17.66l-1.59 1.59M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5z" /></svg>
              )}
            </button>
            <button onClick={() => setOpen(!open)} className="ml-2 inline-flex h-8 w-8 flex-col items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-200">
              <span className={`block h-0.5 w-4 bg-current transition ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`mt-0.5 block h-0.5 w-4 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`mt-0.5 block h-0.5 w-4 bg-current transition ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="mt-3 flex flex-col gap-2 pb-3 text-sm">
            {['About','Projects','Experience','Achievements','Skills','Contact'].map(t => (
              <a key={t} href={`#${t.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800">{t}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}