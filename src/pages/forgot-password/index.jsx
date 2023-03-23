import Head from 'next/head'
import styles from '@/styles/Onboarding.module.css'
import { Row, Col, Form } from 'react-bootstrap'
import Custom_input from '@/components/CustomInput/custom_input'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton/customButton'
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'
import { useQuery } from 'react-query'
import { forgotPassword } from '@/services/api'

export default function ForgotPassword() {

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
          const router = useRouter();

	const { isLoading, isError, data, error, refetch } = useQuery('forgotpassword', () => forgotPassword({email}),{
		enabled : false,
		cacheTime : 0
	})
	if(data){
		toast.success('Verification email sent')
		router.push({
			pathname : '/confirm-otp',
			query:{email, type : 'forgotPassword'}
		})
	}
	if(isError){
		console.log(error)
	}

	function submitForm(){
		let flag = 0;
		if(email == '') {flag=1; setEmailError("Email can't be blank");}

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
							<h1>Forgot Password</h1>
							<p>Lost password? no worries, we got you there</p>
							<Custom_input id="email" required type={'email'} placeholder={'Email'} value={email} setValue={setEmail} className={'my-5'} title={'Email'} error={emailError} setError={setEmailError}  />
							<p className={styles.codeDigit} >Note : a four digit verification code will be sent on above email</p>
							{
								isError && <p className="text-center my-3 text-danger" >{error?.response?.data?.message}</p>
							}
                                                                      <CustomButton text={"Submit"} onClick={()=>submitForm()} className={"mb-4"} loading={isLoading} />
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
