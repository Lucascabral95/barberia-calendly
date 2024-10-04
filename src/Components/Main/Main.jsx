
import './Main.scss'
import Calendly from '../Calendly/Calendly'
import Header from '../Header/Header.jsx'
import AboutMe from '../AboutMe/AboutMe.jsx'
import Cortes from '../Cortes/Cortes.jsx'
import ContactUs from '../ContactUs/ContactUs.jsx'
import Footer from '../Footer/Footer.jsx'

const Main = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <AboutMe />
        <Cortes />
        <Calendly />
        <ContactUs />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Main;