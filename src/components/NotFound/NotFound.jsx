import React from 'react'
import styled from '@emotion/styled'
import notFoundImage from '../../assets/icons/notfound2.png'
import Image from 'next/image'
import CustomButton from '../CustomButton/customButton'



const NotFound = ({title, desc, btnText, onClick}) => {
  return (
    <LoadWrapper>
          <Image src={notFoundImage} alt="Not Found" width={160.} />
          <p className='mt-3' >{title}</p>
          {
                    desc &&
                    <p className='mt-2 text-center desc' >{desc}</p>
          }
          {
                    btnText &&
                    <CustomButton text={btnText} className={'mt-4 px-4 cBtn'} onClick={onClick} />
          }
    </LoadWrapper>
  )
}

export default NotFound

const LoadWrapper = styled.div`
          width : 100%;
          height : 100%;
          position : absolute;
          top : 0;
          left : 0;
          display : flex;
          align-items : center;
          justify-content : center;
          flex-direction : column;

          p:first-of-type{
                    font-size : 18px;
                    font-weight : 500;
          }
          
          .desc{
                    width : 75%;
                    color : var(--greyText);
          }
          
          .cBtn{
                    width : max-content;
          }
`