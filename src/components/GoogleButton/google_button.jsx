import styles from './Google.module.css';
import Image from 'next/image';
import googleicon from '@/assets/icons/google.png'

const Google_button = ({className, signup}) => {
          return (
                    <div className={styles.btnWrapper + ' ' + className} >
                              <Image 
                                        className='mx-2'
                                        src={googleicon}
                                        width={20}
                                        height={20}
                                        alt={"Google icon"}
                              />
                              <b className='mx-2' >{signup ? 'Sign up with Google' : 'Sign in with Google'}</b>
                    </div>
          )
}

export default Google_button