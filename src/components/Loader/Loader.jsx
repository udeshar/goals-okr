import React from 'react'
import styled from '@emotion/styled'
import Spinner from 'react-bootstrap/Spinner';


const Loader = () => {
  return (
    <LoadWrapper>
          <Spinner className="mx-2 loader" animation="border" variant="light" size={'lg'} />
    </LoadWrapper>
  )
}

export default Loader

const LoadWrapper = styled.div`
          width : 100%;
          height : 100%;
          position : absolute;
          top : 0;
          left : 0;
          display : flex;
          align-items : center;
          justify-content : center;
`