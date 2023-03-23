import Head from 'next/head'
import styles from '@/styles/Onboarding.module.css'
import { Row, Col, Form } from 'react-bootstrap'
import Google_button from '@/components/GoogleButton/google_button'
import Custom_input from '@/components/CustomInput/custom_input'
import { useState } from 'react'
import Link from 'next/link'
import CustomButton from '@/components/CustomButton/customButton'
import { HrWithText } from '../login'
import { useQuery } from 'react-query'
import { signup } from '@/services/api'
import { useRouter } from 'next/router'
import useBoundStore from '@/store';

export default function Signup() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [conpassword, setConPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [conpassError, setConPassError] = useState('');
	const [tnc, setTnc] = useState(false);
	const [tncError, setTncError] = useState('');
	const router = useRouter();

	const { isLoading, isError, data, error, refetch } = useQuery('signup', () => signup({email, password}),{
		enabled : false,
		cacheTime : 0
	})

	if(data){
		router.push({
			pathname: '/confirm-otp',
			query: { email, type: 'verifyEmail' },
		});
	}
	if(isError){
		console.log(error)
	}

	function submitForm(){
		let flag = 0;
		if(email == '') {flag=1; setEmailError("Email can't be blank");}
		if(password == '') {flag=1; setPasswordError("Password can't be blank");}
		else if(password.length < 6) {flag=1; setPasswordError("Password must be more than 5 characters")}
		if(conpassword == '') {flag=1; setConPassError("Password can't be blank");}
		else if(password != conpassword) {flag=1; setConPassError("Password does not match")}
		if(!tnc) {flag =1; setTncError('Accept terms and conditions')}
		if(flag == 0){
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
					<Col xl={6} lg={8} sm={12}  className={styles.leftCol + " allcenter"} >
						<div className={styles.leftWrapper}>
							<h1>Sign Up</h1>
							<p>See your growth and get consulting support</p>
							<Google_button className={'allcenter mt-5'} signup={true} />
							<HrWithText className={'my-5'} text={"or sign up with email"} />
							<Custom_input id="email" required type={'email'} placeholder={'Email'} value={email} setValue={setEmail} className={'mb-3'} title={'Email'} error={emailError} setError={setEmailError}  />
							<Custom_input id="password" required type={'password'} placeholder={'Password'} value={password} setValue={setPassword} className={'mb-3'} title={'Password'} error={passwordError} setError={setPasswordError}   />
							<Custom_input id="conpassword" required type={'password'} placeholder={'Password'} value={conpassword} setValue={setConPassword} className={'mb-3'} title={'Confirm Password'} error={conpassError} setError={setConPassError}   />
							<div className='d-flex align-items-center mt-4' >
								<Form.Check color='#000' value={tnc} onChange={(e)=>{setTnc(e.target.checked); setTncError('')}} type='checkbox' id='remember' label='I Agree To The ' />&nbsp;&nbsp;
								<Link className="link" href="#"> Terms & Conditions</Link>
							</div>
							{
								tncError &&
								<p  className={styles.createAccount} style={{color : 'var(--error)'}} >{tncError}</p>
							}
							{
								isError && <p className="text-center my-3 text-danger" >{error?.response?.data?.message}</p>
							}
							<CustomButton text={"Sign Up"} onClick={()=>submitForm()} className={"my-4"} loading={isLoading} />
							<p className={styles.createAccount} >Already have an account? <Link className="link" href="/login">Sign In</Link></p>
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
