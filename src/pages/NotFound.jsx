import Container from '../components/Container'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="py-10">
      <Container>
        <h2 className="text-2xl font-semibold">Page not found</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Return to the homepage.</p>
        <Link to="/" className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white">Go Home</Link>
      </Container>
    </main>
  )
}
