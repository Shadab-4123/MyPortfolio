import Container from '../components/Container'
import profile from '../assets/react.svg'

export default function About() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 dark:bg-neutral-900 dark:text-white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative px-4 sm:px-8 py-12 md:py-16">
              <div className="absolute left-10 top-16 h-40 w-40 bg-emerald-500 hidden sm:block"></div>
              <div className="relative left-0 top-0 sm:ml-12 sm:mt-8 w-full max-w-[280px] mx-auto bg-white aspect-square">
                <img src={profile} alt="Profile placeholder" className="h-full w-full object-contain" />
              </div>
            </div>
            <div className="px-4 sm:px-8 py-12 md:py-16">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-semibold">About Me</h2>
                <div className="h-[2px] w-24 bg-emerald-500"></div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Hi, I’m Shadab Raza, a passionate Software Developer with hands-on experience in building full-stack applications, backend systems, and AI-powered tools. I’ve worked on real industry projects during my internships, including developing and testing features at Zeni.ai and completing impactful work at Skyroot Aerospace.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                I enjoy turning ideas into functional, user-friendly products—whether it’s through Flask, React, Python, or integrating machine learning models into real applications. I love solving problems, learning new technologies, and building systems that provide real value to users.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Outside of coding, I enjoy reading books, playing table tennis, and constantly exploring new ways to grow personally and professionally. My long-term goal is to become a versatile engineer, pursue a master’s degree, and eventually build products of my own.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="rounded bg-emerald-500 px-5 py-2 text-sm font-semibold text-neutral-900">Hire Me</a>
                <a href="/resume/Shadab_Raza_Resume.pdf" download="Shadab_Raza_Resume.pdf"
                  className="rounded border border-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-500 hover:text-neutral-900 transition">
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-6 bottom-6 h-24 w-24 opacity-30 dark:block hidden [background:radial-gradient(circle,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:10px_10px]"></div>
        </div>
      </Container>
    </section>
  )
}
