import axios from 'axios'

const api = axios.create({
	// baseURL: 'http://localhost:3000/api'
	baseURL: 'https://okr-backend.vercel.app/api'
})


export async function createUser(userData) {
	try {
		const res = await api.post('/auth/signup', userData)
		return res.data
	} catch (error) {
		return error
	}
}

export async function signin(userData) {
		const response = await api.post('/auth/login', userData)
		return response.data;
}


export default api