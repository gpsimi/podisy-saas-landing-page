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
      <section className="bg-primary xl:pading-1 wide:padding-r padding-b">
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
      <section id="testimonials" className="padding">
        <Testimoials />
      </section>
      <section id="download" className="padding">
        <Download />
      </section>
      <section className="padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App
