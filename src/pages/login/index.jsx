import Head from 'next/head'
import styles from '@/styles/Onboarding.module.css'
import { Row, Col, Form } from 'react-bootstrap'
import Google_button from '@/components/GoogleButton/google_button'
import Custom_input from '@/components/CustomInput/custom_input'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import CustomButton from '@/components/CustomButton/customButton'
import { useQuery } from 'react-query'
import { signin, googleSignin } from '@/services/api'
import { useRouter } from 'next/router'
import useBoundStore from '@/store';
import SocialLogin from '@/components/GoogleButton/social-login'
import Cookies from 'js-cookie'

export function HrWithText({ text, className }) {
	return (
		<div className={styles.hr + ' ' + className} >
			<p className={styles.pwithbeforafter} >{text}</p>
		</div>
	)
}

export default function Login() {

	const setUserInfo = useBoundStore((state) => state.setUserInfo)
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [token , setToken] = useState('');

	const { isLoading, isError, data, error, refetch } = useQuery('signin', () => signin({ email, password }), {
		enabled: false,
		cacheTime: 0
	})

	const { isLoading : g_isLoading, isError : g_isError, data : g_data, error : g_error, refetch : g_refetch } = useQuery('googlesignup', () => googleSignin({token }),{
		enabled : false,
		cacheTime : 0
	})

	if (data || g_data) {
		console.log(data || g_data)
		setUserInfo(data || g_data)
		Cookies.set('accessToken', data?.accessToken || g_data?.accessToken )
		router.push('/')
	}
	if (error?.response?.data?.message == 'email not verified') {
		router.push({
			pathname: '/confirm-otp',
			query: { email, type: 'verifyEmail' },
		});
	}

	useEffect(() => {
		if(token){
			g_refetch()
		}
	}, [token])

	function submitForm() {
		let flag = 0;
		if (email == '') { flag = 1; setEmailError("Email can't be blank"); }
		if (password == '') { flag = 1; setPasswordError("Password can't be blank"); }
		else if (password.length < 6) { flag = 1; setPasswordError("Password must be more than 5 characters") }

		if (flag == 0) {
			console.log("Success");
			refetch();
		}
	}


	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Row>
					<Col xl={6} lg={8} sm={12} className={styles.leftCol + " allcenter"} >
						<div className={styles.leftWrapper}>
							<h1>Login</h1>
							<p>See your growth and get consulting support</p>
							{/* <Google_button className={'allcenter mt-5'} /> */}
							<SocialLogin 
							text={'signin_with'}
							className={'mt-4 pt-2'}  onSuccess={(tok)=>{
								console.log(tok)
								setToken(tok?.credential)
							}} />
							<HrWithText className={'my-5'} text={"or sign in with email"} />
							<Custom_input id="email" required type={'email'} placeholder={'Email'} value={email} setValue={setEmail} className={'mb-3'} title={'Email'} error={emailError} setError={setEmailError} />
							<Custom_input id="password" required type={'password'} placeholder={'Password'} value={password} setValue={setPassword} className={'mb-3'} title={'Password'} error={passwordError} setError={setPasswordError} />
							<div className="d-flex justify-content-between align-items-center mt-4" >
								<Form.Check type='checkbox' id='remember' label='Remember me' />
								<Link className="link" href="/forgot-password">Forgot password?</Link>
							</div>
							{
								(isError || g_isError ) && <p className="text-center my-3 text-danger" >{error?.response?.data?.message || g_error?.response?.data?.message}</p>
							}
							<CustomButton text={"Login"} onClick={() => submitForm()} className={"my-4"} loading={isLoading || g_isLoading} />
							<p className={styles.createAccount} >Not Registered Yet? <Link className="link" href="/signup">Create An Account Here</Link></p>
						</div>
					</Col>
					<Col xl={6} lg={4} sm={12} className={styles.imageSection + " d-none d-lg-block"}>
						<img src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3c8fa3161199455.Y3JvcCwxOTIwLDE1MDEsMCwxOQ.png" alt="Dashboard image" />
					</Col>
				</Row>
			</main>
		</>
	)
}
