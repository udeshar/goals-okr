import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
	// baseURL: 'http://localhost:3001/api'
	baseURL: 'https://okr-backend.vercel.app/api'
})

export function getToken(){
	return Cookies.get('accessToken');
}

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


// Objective Related Api calls

export async function createObjective(data){
	const token = getToken();
	const response = await api.post('/objectives/createObjective', data,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function getAllMyObjectives(){
	const token = getToken();
	const response = await api.get('/objectives',{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function deleteMyObjectives(id){
	const token = getToken();
	const response = await api.delete('/objectives/'+id,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function updateMyObjectives(id, data){
	const token = getToken();
	const response = await api.patch('/objectives/'+id,data,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

// Key Results  Related Api calls

export async function createKeyResult(data){
	const token = getToken();
	const response = await api.post('/keyResults/createKeyResult', data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function deleteKeyResult(id){
	const token = getToken();
	const response = await api.delete('/keyResults/'+id, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function updateKeyResult(id, data){
	const token = getToken();
	const response = await api.patch('/keyResults/'+id, data ,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export default api