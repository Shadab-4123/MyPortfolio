import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-black dark:text-gray-100">
      <Header />
      <main className="flex-1">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="achievements"><Achievements /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}
