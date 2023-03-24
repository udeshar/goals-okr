import axios from 'axios'

const api = axios.create({
	// baseURL: 'http://localhost:3001/api'
	baseURL: 'https://okr-backend.vercel.app/api'
})


export async function signup(userData) {
	const res = await api.post('/auth/signup', userData)
	return res.data
}

export async function signin(userData) {
	const response = await api.post('/auth/login', userData)
	return response.data;
}

export async function verifyOtp(userData) {
	let path = '';
	if(userData?.type == 'verifyEmail' ){
		delete userData.id;
		path = '/auth/verifyOtpWithEmail';
	} else{
		delete userData.email;
		path = '/auth/verifyOtp';
	}
	delete userData.type;
	const response = await api.post(path, userData)
	return response.data;
}

export async function userInfo(userData) {
	const response = await api.post('/auth/userInfo', userData)
	return response.data;
}

export async function forgotPassword(userData) {
	const response = await api.post('/auth/forgotPassword', userData)
	return response.data;
}

export async function changePassword(userData) {
	const response = await api.post('/auth/changePassword', userData)
	return response.data;
}

export async function googleSignup(userData){
	const response = await api.post('/auth/googleSignup', userData)
	return response.data;
}

export async function googleSignin(userData){
	const response = await api.post('/auth/googleSignin', userData)
	return response.data;
}

export default api