import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'



const Header = () => {
  const data = useStaticQuery(graphql`
  {
	  site{
      siteMetadata{
        title
        description
        author
      }
    }
  }
  `)
  return (
    <div>
     <h1>title:</h1>
     <h1>author:</h1>
    </div>
  )
}

export default Header
