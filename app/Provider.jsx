import React from 'react'
import Header from './_components/Header'
import CategoryList from './_components/CategoryList'
import BusinessList from './_components/BusinessList'

function Provider({Children}) {
  return (
    <div className='px-10 md:px-20 relative'>    
      <Header/>
      <CategoryList/>
      <BusinessList/>
      {Children}
    </div>
  )
}

export default Provider
