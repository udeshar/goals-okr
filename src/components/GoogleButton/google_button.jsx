import styles from './Google.module.css';
import Image from 'next/image';
import googleicon from '@/assets/icons/google.png'
import Link from 'next/link';

const Google_button = ({className, signup, onClick}) => {
          return (
                    // <Link href={"http://localhost:3000/auth/google"} >
                              <div onClick={onClick} className={styles.btnWrapper + ' ' + className}>
                                        <Image 
                                                  className='mx-2'
                                                  src={googleicon}
                                                  width={20}
                                                  height={20}
                                                  alt={"Google icon"}
                                        />
                                        <b className='mx-2' >{signup ? 'Sign up with Google' : 'Sign in with Google'}</b>
                              </div>
                    // </Link>
          )
}

export default Google_button