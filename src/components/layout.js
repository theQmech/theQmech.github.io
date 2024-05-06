import React from "react"
import { Link } from "gatsby"
import { container, navLinks, navLinkItem, footer, footerIcons, footerIconItem } from './layout.module.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa6"


const pageStyles = {
  color: "#232129",
  padding: 2,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const FooterBar = () => {

  const [icon, setIcon] = React.useState("");

  const iconToText = (icon) => {
    switch (icon) {
      case 'email':
        return 'firstname.lastname@gmail.com';
      case 'linkedin':
        return 'linkedin.com/in/rganvir/';
      case 'instagram':
        return 'instagram.com/theqmech/';
      default:
        return '';
    }
  }

  return (
    <div class={footer}>
      <ul className={footerIcons}>
        <li
          className={footerIconItem}
          onMouseEnter={() => setIcon("email")}
          onMouseLeave={() => setIcon("")}>
          <MdEmail />
        </li>
        <li
          className={footerIconItem}
          onMouseEnter={() => setIcon("linkedin")}
          onMouseLeave={() => setIcon("")}>
          <FaLinkedin />
        </li>
        <li
          className={footerIconItem}
          onMouseEnter={() => setIcon("instagram")}
          onMouseLeave={() => setIcon("")}>
          <FaInstagram />
        </li>
        <li>
          {iconToText(icon)}
        </li>
      </ul>
    </div>
  )
}

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/">Home</Link></li>
          <li className={navLinkItem}><Link to="/about">About</Link></li>
          <li className={navLinkItem}><Link to="/debug">Debug</Link></li>
        </ul>
      </nav>
      <main style={pageStyles}>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <div>
        <FooterBar />
      </div>
    </div>
  )
}

export default Layout