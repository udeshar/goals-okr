import React, { useEffect } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import Google_button from './google_button';

const SocialLogin = ({ onSuccess, className, text }) => {

          return (
                    <div className={"mx-auto " + className} >
                              <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_REACT_APP_GG_APP_ID} >
                                        <GoogleLogin
                                                  // width='100px'
                                                  theme='outline'
                                                  size={'large'}
                                                  text={text}
                                                  onSuccess={(credentialResponse) => {
                                                            console.log(credentialResponse);
                                                            onSuccess(credentialResponse)
                                                  }}
                                                  onError={() => {
                                                            console.log('Login Failed');
                                                  }}
                                        />
                              </GoogleOAuthProvider>
                    </div>

          )
}

export default SocialLogin