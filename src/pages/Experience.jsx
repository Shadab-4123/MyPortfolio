import Container from '../components/Container'

const items = [
  {
    title: 'Zeni.ai',
    role: 'QA Intern',
    dates: 'Jun 2024 – Apr 2024',
    desc: "Worked in the QA team for Zeni’s financial management platform; designed and executed test cases, automated API tests with Pytest.",
    tags: ['Python', 'Pytest', 'REST APIs']
  },
  {
    title: 'Skyroot Aerospace [A]',
    role: 'Software Intern',
    dates: '',
    desc: 'Built internal tools and automation scripts to support engineering workflows: focusing on reliability, clean code, and performance.',
    tags: ['Python', 'Flask', 'Automation']
  },
  {
    title: 'Personal Project',
    role: 'AI Interview Platform',
    dates: '2025 – In Progress',
    desc: 'End-to-end web app that simulates interview rounds, provides AI-generated feedback, and tracks performance and progress.',
    tags: ['React', 'Python', 'AI']
  },
  {
    title: 'Sitare ACM Chapter',
    role: 'Membership Chair',
    dates: 'Oct 2023 – Oct 2024',
    desc: 'Organized webinars, managed member outreach, and collaborated with the core team to grow the technical community.',
    tags: ['Leadership', 'Community', 'Events']
  }
]

export default function Experience() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 dark:bg-neutral-900 dark:text-white">
          <div className="px-4 sm:px-8 py-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-extrabold uppercase tracking-wide">Experience</h2>
              <div className="h-[2px] w-24 bg-emerald-500"></div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {items.map((it, idx) => (
                <div key={idx} className="rounded-xl bg-neutral-100 p-6 shadow-sm ring-1 ring-black/5 dark:bg-neutral-800/70 dark:ring-white/5">
                  <h3 className="text-xl font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{it.role}{it.dates ? ` · ${it.dates}` : ''}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{it.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {it.tags.map((t, i) => (
                      <span key={i} className="rounded-md bg-neutral-200 px-2 py-1 text-xs text-gray-800 ring-1 ring-black/10 dark:bg-neutral-700 dark:text-gray-200 dark:ring-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 opacity-30 dark:block hidden [background:radial-gradient(circle,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:10px_10px]"></div>
        </div>
      </Container>
    </section>
  )
}
