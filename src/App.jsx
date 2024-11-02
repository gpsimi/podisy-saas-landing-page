import Nav  from "./components/Nav";
import {
  Hero,
  Features,
  Overview,
  Explore,
  Testimoials,
  Download,
  Footer,
} from "./sections"

function App() {
  

  return (
    <main className="relative">
      <Nav />
      <section className="bg-primary padding ">
        <Hero />
      </section>
      <section id="features" className="bg-primary padding">
        <Features />
      </section>
      <section id="overview" className="bg-primary padding">
        <Overview />
      </section>
      <section id="explore" className="bg-primary padding">
        <Explore />
      </section>
      <section id="testimonials" className="bg-primary padding">
        <Testimoials />
      </section>
      <section id="download" className="bg-primary padding">
        <Download />
      </section>
      <section className="bg-primary">
        <Footer />
      </section>
    </main>
  )
}

export default App
