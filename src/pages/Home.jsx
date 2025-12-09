import Container from '../components/Container'
import profile from '../assets/react.svg'

export default function Home() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 dark:bg-neutral-900 dark:text-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-4 sm:px-8 py-12 md:py-16">
              <p className="text-emerald-400">Hello Everyone.</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">I'M SHADAB<br />RAZA</h1>
              <div className="mt-8 inline-flex items-center">
                <a href="#projects" className="group inline-flex items-center rounded-lg border border-emerald-400 bg-neutral-900 text-white">
                  <span className="px-4 py-3 text-sm font-semibold">SOFTWARE ENGINEER</span>
                  <span className="bg-emerald-500 px-3 py-3 text-neutral-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M5 12h12m0 0-4-4m4 4-4 4" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="relative bg-emerald-500">
              <div className="absolute right-6 top-6 hidden gap-3 md:flex">
                <a href="#contact" className="text-sm">Contact Me</a>
                <a href="https://github.com/Shadab-4123" aria-label="GitHub" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58l-.01-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.31 3.53 1 .11-.79.42-1.31.77-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.55.12-3.24 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.69.25 2.93.12 3.24.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.21l-.01 3.27c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/shadab-raza-8904a6250" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0h4.78v2.05h.07c.66-1.24 2.28-2.55 4.69-2.55 5.02 0 5.95 3.3 5.95 7.58V23H18V16.4c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23H7.5V8z" />
                  </svg>
                </a>
              </div>
              <img
                src={profile}
                alt="Profile placeholder"
                className="pointer-events-none select-none mx-auto my-8 h-40 w-40 sm:h-52 sm:w-52 md:absolute md:-bottom-6 md:right-6 md:h-[280px] md:w-[280px]"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute left-6 bottom-6 h-24 w-24 opacity-30 dark:block hidden [background:radial-gradient(circle,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:10px_10px]"></div>
        </div>
      </Container>
    </section>
  )
}
