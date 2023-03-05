import React from 'react'
import styled from '@emotion/styled'

const ObjectiveCardWrap = styled.div(props=>({
          backgroundColor : 'var(--background-color)',
          borderRadius : 20,
          padding : 20,
          height : 170,
          boxShadow : '0px 4px 20px 5px var(--shadows2)'
}))

const ObjectiveCard = () => {
          return (
                    <ObjectiveCardWrap>
                              <p>Hello</p>
                    </ObjectiveCardWrap>
          )
}

export default ObjectiveCard