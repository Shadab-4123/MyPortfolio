// import Container from '../components/Container'

// const bars = [
//   { label: 'React', value: 85 },
//   { label: 'Python', value: 80 },
//   { label: 'Flask', value: 75 },
//   { label: 'Tailwind CSS', value: 90 },
//   { label: 'REST APIs', value: 80 }
// ]

// const categories = [
//   { name: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript'] },
//   { name: 'Frontend', skills: ['React', 'Vite', 'Tailwind CSS'] },
//   { name: 'Backend', skills: ['Flask', 'FastAPI', 'Node.js'] },
//   { name: 'Databases', skills: ['PostgreSQL', 'MongoDB'] },
//   { name: 'Testing', skills: ['Pytest', 'Jest'] },
//   { name: 'ML/AI', skills: ['scikit-learn', 'Pandas', 'NumPy'] }
// ]

// export default function Skills() {
//   return (
//     <section className="py-10">
//       <Container>
//         <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 dark:bg-neutral-900 dark:text-white">
//           <div className="px-4 sm:px-8 py-10">
//             <div className="flex items-center gap-4">
//               <h2 className="text-3xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">Skills</h2>
//               <div className="h-[2px] w-24 bg-emerald-500"></div>
//             </div>
//             <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
//               <div className="space-y-4">
//                 {/* ➊ SVG radial-skill wheel */}
// <div className="mx-auto aspect-square w-full max-w-[240px] sm:max-w-[280px]">
//   <svg viewBox="0 0 100 100" className="w-full rotate-90">
//     {/* background circle */}
//     <circle cx="50" cy="50" r="45" stroke="currentColor" strokeOpacity=".15" strokeWidth="10" fill="none" />
//     {/* skill arcs */}
//     {[
//       { label: 'React',        pct: 85, color: '#10b981' },
//       { label: 'Python',       pct: 80, color: '#22c55e' },
//       { label: 'Flask',        pct: 75, color: '#34d399' },
//       { label: 'Tailwind CSS', pct: 90, color: '#6ee7b7' },
//       { label: 'REST APIs',    pct: 80, color: '#a7f3d0' },
//     ].map((s, i) => {
//       const circ = 2 * Math.PI * 45                 // full circumference
//       const offset = circ * (1 - s.pct / 100)       // dash gap
//       const gap   = circ / 5                        // space between arcs
//       const strokeDasharray = `${circ - gap} ${circ}`
//       return (
//         <circle
//           key={s.label}
//           cx="50"
//           cy="50"
//           r="45"
//           stroke={s.color}
//           strokeWidth="10"
//           strokeDasharray={strokeDasharray}
//           strokeDashoffset={ -i * (circ / 5) }   // rotate each arc
//           strokeLinecap="round"
//           fill="none"
//           className="drop-shadow-sm"
//         />
//       )
//     })}
//   </svg>

//   {/* ➋ center label */}
//   <div className="relative -mt-[100%] flex h-full items-center justify-center">
//     <span className="text-center text-xs font-semibold text-emerald-400 dark:text-emerald-300 sm:text-sm">
//       Core<br/>Skills
//     </span>
//   </div>
// </div>

// {/* ➌ legend (no numbers) */}
// <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
//   {[
//     { label: 'React',        color: 'bg-emerald-500' },
//     { label: 'Python',       color: 'bg-emerald-400' },
//     { label: 'Flask',        color: 'bg-emerald-300' },
//     { label: 'Tailwind CSS', color: 'bg-emerald-200' },
//     { label: 'REST APIs',    color: 'bg-emerald-100' },
//   ].map(s => (
//     <li key={s.label} className="flex items-center gap-2">
//       <span className={`h-2 w-2 rounded-full ${s.color}`} />
//       <span className="text-gray-700 dark:text-gray-300">{s.label}</span>
//     </li>
//   ))}
// </ul>
//               </div>
//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 {categories.map((c, i) => (
//                   <div key={i} className="rounded-xl bg-neutral-100 p-5 ring-1 ring-black/5 dark:bg-neutral-800/70 dark:ring-white/5">
//                     <h3 className="text-sm font-semibold text-white">{c.name}</h3>
//                     <div className="mt-3 flex flex-wrap gap-2">
//                       {c.skills.map((s, k) => (
//                         <span key={k} className="rounded-md bg-neutral-200 px-2 py-1 text-xs text-gray-800 ring-1 ring-black/10 dark:bg-neutral-700 dark:text-gray-200 dark:ring-white/10">{s}</span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="pointer-events-none absolute right-6 bottom-6 h-24 w-24 opacity-30 dark:block hidden [background:radial-gradient(circle,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:10px_10px]"></div>
//         </div>
//       </Container>
//     </section>
//   )
// }



import Container from '../components/Container';
import {
  FaPython, FaJava, FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiScikitlearn, SiNumpy, SiPandas, SiKeras,
  SiNextdotjs, SiExpress, SiDjango, SiMongodb
} from 'react-icons/si';
const radialSkills = [
  { label: 'React',        pct: 85, color: '#61DAFB' },
  { label: 'Python',       pct: 80, color: '#3776AB' },
  { label: 'Flask',        pct: 75, color: '#000000' },
  { label: 'Tailwind CSS', pct: 90, color: '#38B2AC' },
  { label: 'REST APIs',    pct: 80, color: '#10B981' },
];

const skillGroups = [
  {
    title: 'Programming',
    icon: <FaPython className="h-6 w-6 text-sky-500" />,
    skills: [
      { name: 'Python',  icon: <FaPython   className="h-4 w-4" /> },
      { name: 'Java',    icon: <FaJava     className="h-4 w-4" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="h-4 w-4" /> },
      { name: 'SQL',     icon: <span className="font-bold text-[10px]">SQL</span> },
    ],
  },
  {
    title: 'ML & Data Science',
    icon: <SiScikitlearn className="h-6 w-6 text-orange-500" />,
    skills: [
      { name: 'NumPy',       icon: <SiNumpy   className="h-4 w-4" /> },
      { name: 'Pandas',      icon: <SiPandas  className="h-4 w-4" /> },
      { name: 'Scikit-learn',icon: <SiScikitlearn className="h-4 w-4" /> },
      { name: 'Keras',       icon: <SiKeras   className="h-4 w-4" /> },
      // { name: 'Plotly',      icon: <SiPlotly  className="h-4 w-4" /> },
      // { name: 'Matplotlib',  icon: <SiMatplotlib className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Web Front-end',
    icon: <FaReact className="h-6 w-6 text-cyan-400" />,
    skills: [
      { name: 'HTML5', icon: <FaHtml5   className="h-4 w-4" /> },
      { name: 'CSS',   icon: <FaCss3Alt className="h-4 w-4" /> },
      { name: 'React', icon: <FaReact   className="h-4 w-4" /> },
      { name: 'Next',  icon: <SiNextdotjs className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Web Back-end & DB',
    icon: <SiExpress className="h-6 w-6 text-green-600" />,
    skills: [
      { name: 'Node',   icon: <FaNodeJs  className="h-4 w-4" /> },
      { name: 'Express',icon: <SiExpress className="h-4 w-4" /> },
      { name: 'Django', icon: <SiDjango  className="h-4 w-4" /> },
      { name: 'MongoDB',icon: <SiMongodb className="h-4 w-4" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 text-gray-900 dark:bg-neutral-900 dark:text-white">
          <div className="px-4 sm:px-8 py-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-extrabold uppercase tracking-wide">Skills</h2>
              <div className="h-[2px] w-24 bg-emerald-500" />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* ➊ radial wheel */}
              <div className="mx-auto aspect-square w-full max-w-[240px] sm:max-w-[280px]">
                <svg viewBox="0 0 100 100" className="w-full rotate-90">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeOpacity=".15" strokeWidth="10" fill="none" />
                  {radialSkills.map((s, i) => {
                    const circ = 2 * Math.PI * 45;
                    const offset = circ * (1 - s.pct / 100);
                    const gap = circ / 5;
                    return (
                      <circle
                        key={s.label}
                        cx="50"
                        cy="50"
                        r="45"
                        stroke={s.color}
                        strokeWidth="10"
                        strokeDasharray={`${circ - gap} ${circ}`}
                        strokeDashoffset={-i * (circ / 5)}
                        strokeLinecap="round"
                        fill="none"
                        className="drop-shadow-sm"
                      />
                    );
                  })}
                </svg>
                <div className="relative -mt-[100%] flex h-full items-center justify-center">
                  <span className="text-center text-xs font-semibold text-emerald-400 dark:text-emerald-300 sm:text-sm">Core<br />Skills</span>
                </div>
              </div>

              {/* ➋ icon skill cards */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {skillGroups.map((g) => (
                  <div key={g.title} className="rounded-xl bg-neutral-100 p-5 ring-1 ring-black/5 dark:bg-neutral-800/70 dark:ring-white/5">
                    <div className="mb-3 flex items-center gap-3">
                      {g.icon}
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">{g.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <span key={s.name} className="inline-flex items-center gap-1 rounded-md bg-neutral-200 px-2 py-1 text-xs text-gray-800 ring-1 ring-black/10 dark:bg-neutral-700 dark:text-gray-200 dark:ring-white/10">
                          {s.icon}
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute right-6 bottom-6 h-24 w-24 opacity-30 dark:block hidden [background:radial-gradient(circle,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:10px_10px]" />
        </div>
      </Container>
    </section>
  );
}
