import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Logout = ({children}) => {
          const router = useRouter();
          const lg = () => {
                    if (typeof window !== "undefined") {
                              localStorage.clear();
                              Cookies.remove('accessToken');
                              router.replace('/login');
                    }
          }

          return (
                    <div onClick={lg} >
                              {children}
                    </div>
          )
}

export default Logout