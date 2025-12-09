import Container from '../components/Container'

const wins = [
  '1st 2022 National Design Competition',
  '2nd 2022 World Design Competition',
  '3rd 2021 National Design Competition'
]

export default function Achievements() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 dark:bg-neutral-900 dark:text-white">
          <div className="px-4 sm:px-8 py-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">Achievement</h2>
              <div className="h-[2px] w-24 bg-emerald-500"></div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-emerald-500 p-6">
                <h3 className="text-center text-sm font-semibold text-emerald-400">WINNING COMPETITION</h3>
                <ul className="mt-6 space-y-3 text-sm">
                  {wins.map((w, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-neutral-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3"><path d="M20 6 9 17l-5-5"/></svg>
                      </span>
                      <span className="text-gray-800 dark:text-gray-200">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-500 p-6">
                <h3 className="text-center text-sm font-semibold text-emerald-400">BEST SOCIAL MEDIA DESIGN</h3>
                <p className="mt-4 text-xs leading-relaxed text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit.</p>
              </div>
              <div className="rounded-xl bg-emerald-500 p-6 text-neutral-900">
                <h3 className="text-center text-sm font-semibold">2022 BEST DESIGN WORLDWIDE</h3>
                <p className="mt-4 text-xs leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit.</p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-6 bottom-6 h-24 w-24 opacity-30 dark:block hidden [background:radial-gradient(circle,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:10px_10px]"></div>
        </div>
      </Container>
    </section>
  )
}
