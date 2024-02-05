import { useLocale } from 'antd/es/locale'
import React from 'react'
import { Image } from 'react-bootstrap'
import { BsBox2, BsTelephone } from 'react-icons/bs'
import { FaExchangeAlt } from 'react-icons/fa'
import { GiCancel, GiConfirmed, GiReturnArrow } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import { MdOutlineMail } from 'react-icons/md'

const OrderDetails = () => {
    const location=useLocation()
    const item=location.state.item
  return (
    <>
      {console.log(item)}
      <Header/>
      <div style={{backgroundColor:'#e0e0e085',padding:'1%',margin:'1% 20%'}}>
        <div style={{textAlign:'center'}}>
        <Image src={item.product.url } width={'8%'} height={'6%'}/><br/>
        <b>{item.product.brandName}</b><br/>
        {item.product.productName}<br/>
        </div>
        <div style={{backgroundColor:'white',padding:'2%',margin:'3% 15% 3% 1%'}}>
        {item.orderStatus === "Cancelled" ? (
                  <GiCancel color="red" size={"3%"} />
                ) : item.orderStatus === "Delivered" ? (
                  <GiConfirmed color="green" size={"3%"} />
                ) : item.orderStatus === "Return Initiated" ? (
                  <GiReturnArrow size={"3%"} />
                ) : item.orderStatus === "Exchange Initiated" ? (
                  <FaExchangeAlt size={"3%"} />
                ) : item.orderStatus === "Ordered" ? (
                  <BsBox2 size={"3%"} />
                ) : (
                  ""
                )}{" "}{" "}
        {item.orderStatus}
        </div>
        <div style={{backgroundColor:'white',padding:'2%',margin:'3% 15% 3% 1%'}} className='d-flex flex-row justify-content-between'>
            <b>Price</b>
            <b>₹ {item.product.price}.00</b>
        </div>
        <div style={{backgroundColor:'white',padding:'2%',margin:'3% 15% 3% 1%'}} className='d-flex flex-column gap-3'>
            <b>Updates Sent to</b>
            <div style={{color:'gray'}}><BsTelephone/> {item.order.user.mobileNumber}</div>
            <div style={{color:'gray'}}><MdOutlineMail/> {item.order.user.email}</div>
        </div>
        <div style={{backgroundColor:'white',padding:'2%',margin:'3% 15% 3% 1%',color:'gray'}} >
           Order ID {item.order.order_id}
        </div>
      </div>
    </>
  )
}

export default OrderDetails
