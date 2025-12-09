import Container from '../components/Container'
import placeholder from '../assets/react.svg'

const demo = [
  { title: 'Branding Design', image: placeholder, year: 'Portfolio 2025' },
  { title: 'Website Design', image: placeholder, year: 'Portfolio 2025' },
  { title: 'Illustration Design', image: placeholder, year: 'Portfolio 2025' }
]

export default function Projects() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 dark:bg-neutral-900 dark:text-white">
          <div className="px-4 sm:px-8 py-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Recents Project</h2>
              <div className="h-[2px] w-32 bg-emerald-500"></div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {demo.map((p, i) => (
                <div key={i} className="">
                  <div className="overflow-hidden rounded bg-white">
                    <img src={p.image} alt={p.title} className="h-40 sm:h-56 w-full object-contain p-4 sm:p-6" />
                  </div>
                  <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-xs text-emerald-400">{p.year}</p>
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
