import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const Foot = styled.div`
      border-top : 1px solid var(--border-color);
      padding : 25px 0px;
      position : absolute;
      bottom : 0px;
      left : 0px;
      right : 0px;
      margin : 0px 35px
`

const Footer = () => {
      return (
            <Foot style={{borderTop : '1px solid var(--border-color)'}} className="d-flex align-items-center justify-content-between" >
                  <div>
                        <p style={{fontSize : 14, color : 'var(--mediumGrey)'}}  >OKR @ All Rights Reserved</p>
                  </div>
                  <div>
                        <Link href="#" className='ms-3 link' >About us</Link>
                        <Link href="#" className='ms-3 link' >Contact us</Link>
                  </div>
            </Foot>
      )
}

export default Footer