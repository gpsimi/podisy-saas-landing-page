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
      <section className="padding">
        <Features />
      </section>
      <section className="padding">
        <Overview />
      </section>
      <section className="padding">
        <Explore />
      </section>
      <section className="padding">
        <Testimoials />
      </section>
      <section className="padding">
        <Download />
      </section>
      <section className="padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App
