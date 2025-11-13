import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import Works from '../components/Works';
import Blog from '../components/Blog';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>Ahsanul Hoque Famid - Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer with 3+ years building scalable systems. Built platforms serving 120K+ users using NestJS, FastAPI, AWS, and microservices architecture." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <Experiences />
        <Works />
        <Blog />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
