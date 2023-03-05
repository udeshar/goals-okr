import styled from '@emotion/styled';
import { CiDark, CiSun } from 'react-icons/ci'
import useBoundStore from '@/store';
import { useEffect, useState } from 'react';

const SwitchButton = styled.div(props => ({
      width: '70px',
      height: '30px',
      borderRadius: '10px',
      backgroundColor: 'var(--accent_light)',
      display: 'flex',
      alignItems: 'center',
      padding: '2px',
      position: 'relative',
}))

const InnerSwitch = styled.div(props => ({
      width: '50%',
      height: '100%',
      backgroundColor: ' var(--accent)',
      color : '#fff',
      borderRadius: '10px',
      position: 'relative',
      left: props.checked ? '50%' : '0%',
      transition: '.5s',
      boxShadow: '0px 1px 3px var(--shadows)'
}))

const BackDiv = styled.div`
          position : absolute;
          width : 100%;
          height : 100%;
          top : 0px;
          left : 0px;
          display : flex;
          justify-content : space-around;
          align-items : center;
`

const Switch = () => {
      const theme = useBoundStore((state) => state.theme)
      const toggleTheme = useBoundStore((state) => state.toggleTheme)
      const [myTheme, setMyTheme] = useState('');
      useEffect(() => {
            setMyTheme(theme)
      }, [theme])

      return (
            <SwitchButton onClick={() => toggleTheme()} role="button" >
                  <InnerSwitch checked={myTheme == 'dark' ? true : false} ></InnerSwitch>
                  <BackDiv>
                        <CiSun style={{color : '#fff'}} size={18} />
                        <CiDark size={18} />
                  </BackDiv>
            </SwitchButton>
      )
}

export default Switch