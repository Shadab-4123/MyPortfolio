import Container from '../components/Container'
import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
  const { slug } = useParams()
  return (
    <main className="py-10">
      <Container>
        <h2 className="text-2xl font-semibold">Project: {slug}</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Case study content coming soon.</p>
      </Container>
    </main>
  )
}
