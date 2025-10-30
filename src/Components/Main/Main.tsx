
import AboutMe from '../../presentation/components/AboutMe/AboutMe';
import Calendly from '../../presentation/components/Calendly/Calendly';
import ContactUs from '../../presentation/components/ContactUs/ContactUs';
import Cortes from '../../presentation/components/Cortes/Cortes';
import Footer from '../../presentation/components/Footer/Footer';
import Header from '../../presentation/components/Header/Header';
import './Main.scss'

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