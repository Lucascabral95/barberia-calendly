import "./Footer.scss"
import ChildStructure from '../ChildComponents/ChildStructure/ChildStructure.jsx'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-mobile">
        <h2 className='developed'>© 2024 by <span> IL FIGARO </span>. Powered and secured by <a className='autor'
          href="https://github.com/Lucascabral95" target='_blank'>Lucas Cabral</a></h2>
      </div>
      <ChildStructure>
        <div className="contenedor">
          <h2 className='developed'>© 2024 by <span> IL FIGARO </span>. Developed and designed by <a className='autor'
            href="https://github.com/Lucascabral95" target='_blank'> Lucas Cabral </a></h2>
        </div>
      </ChildStructure>
    </div>
  )
}

export default Footer