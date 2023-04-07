import React from 'react'
import styled from '@emotion/styled'

const IconButton = ({Icon, onClick, className, loading, iconClass}) => {
          return (
                    <IconBtnWrap className={className} onClick={onClick} >
                              <Icon className={"icon " + iconClass} />
                    </IconBtnWrap>
          )
}

export default IconButton

const IconBtnWrap = styled.div`
          display : flex;
          justify-content : center;
          align-items : center;
          height : 30px;
          width : 30px;
          background-color : transparent;
          border-radius : 5px;
          border : 1px solid var(--greyText);
          color : var(--greyText);

          .icon{
                    font-size : 16px;
          }

          &.redBtn{
                    border : 1px solid var(--red);
                    color : var(--red);
          }

`