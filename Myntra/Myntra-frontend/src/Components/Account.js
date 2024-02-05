import React from 'react'
import { Link } from 'react-router-dom'
const Account = () => {
  return (
    <div className='d-flex flex-column'>
      <Link className='account'>Overview</Link>
      
     
        ORDERS
        <Link to={'orders'} className='account'>Orers & Returns</Link>
      
        CREDITS
        <Link to={'coupons'} className='account'>Coupons</Link>
      <Link className='account'>Myntra Credit</Link>
      <Link className='account'>Myn Cash</Link>
      
        ACCOUNT
        <Link to={'editProfile'} className='account'>Profile</Link>
      <Link className='account'>Saved Cards</Link>
      <Link className='account'>Addresses</Link>
      
    </div>
  )
}

export default Account
