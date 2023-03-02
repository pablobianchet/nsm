import React from 'react'
import styled from 'styled-components'
import { FaCartPlus } from "react-icons/fa";


function CartWidget(props) {
  return (
    <Cart >
        <FaCartPlus />
    </Cart >
  )
}

export default CartWidget

const Cart = styled.div`

CartWidget{ 
    

width:400px; 
}



`