import React from 'react'
import styles from '../css/footer.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import socialIcons from '../constants/social-icons'
import links from "../constants/links"


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item,index)=> {
          return <AniLink fade key={index} to={item.url}>
            {item.text}
          </AniLink>
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item,index)=> {
          return <a key={index} href={item.path} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroadstravel company {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default Footer
