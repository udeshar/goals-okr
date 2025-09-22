import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
	// baseURL: 'http://localhost:3001/api'
	// baseURL: 'https://okr-backend.vercel.app/api'
	baseURL: 'https://okr-backend-61m6.onrender.com/api'
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

export async function createTeamObjective(data, teamid){
	const token = getToken();
	const response = await api.post('/team/objectives/createObjective?teamid='+teamid, data,{
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

export async function getAllMyTeamObjectives(teamid){
	const token = getToken();
	const response = await api.get('/team/objectives/getall?teamid='+teamid,{
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

export async function deleteTeamObjectives(id){
	const token = getToken();
	const response = await api.delete('team/objectives/'+id,{
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

export async function updateTemObjectives(id, data){
	const token = getToken();
	const response = await api.patch('/team/objectives/'+id,data,{
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

export async function deletePeopleFromKey(id){
	const token = getToken();
	const response = await api.delete(`/keyResults/deletePeople/${id}`, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function addPeopleFromKey(data){
	const token = getToken();
	const response = await api.post(`/keyResults/addPeople`, data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function deleteTeamKeyResult(id,teamid){
	const token = getToken();
	const response = await api.delete(`/keyResults/deletePeople/${id}teamid=${teamid}`, {
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

// Organization related api calls

export async function getStats(id){
	const token = getToken();
	const response = await api.get(`/organization/getstats/${id}` ,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function getOrganization(id, data){
	const token = getToken();
	const response = await api.get('/organization' ,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function createOrganization(data){
	const token = getToken();
	const response = await api.post('/organization/createOrganization', data ,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function leaveOrganization(id){
	const token = getToken();
	const response = await api.delete('/organization/'+id ,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function deleteUser(orgid,userid){
	const token = getToken();
	const response = await api.delete('/organization/deleteUser/'+orgid+'?userid=' + userid, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function deleteOrganization(id){
	const token = getToken();
	const response = await api.delete('/organization/delete/'+id ,{
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function editOrganization(id, data){
	const token = getToken();
	const response = await api.patch('/organization/'+id , data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function changeOrgStatus(id, data){
	const token = getToken();
	const response = await api.patch('/organization/updateOrgStatus/'+id , data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function getPeople(id){
	const token = getToken();
	const response = await api.get('/organization/getPeople/'+id , {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function changeRole(id, data){
	const token = getToken();
	const response = await api.post('/organization/changeRole/' + id , data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

// Invite related api calls
export async function invitePeople(data){
	const token = getToken();
	const response = await api.post('/invite' ,data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function getInvitedPeople(orgid){
	const token = getToken();
	const response = await api.get('/invite/'+orgid , {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function getMyInvites(){
	const token = getToken();
	const response = await api.get('/invite' , {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function acceptInvitations(data){
	const token = getToken();
	const response = await api.post('/invite/acceptInvitation' , data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function rejectInvitations(data){
	const token = getToken();
	const response = await api.post('/invite/rejectInvitation' , data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

// Teams related api calls

export async function createTeam(orgid, data){
	const token = getToken();
	const response = await api.post('/team?orgid=' + orgid , data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function editTeam(teamid, orgid, data){
	const token = getToken();
	const response = await api.patch(`/team/${teamid}?orgid=${orgid}` , data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function deleteTeam(teamid, orgid){
	const token = getToken();
	const response = await api.delete(`/team/${teamid}?orgid=${orgid}` , {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function getTeams(orgid){
	const token = getToken();
	const response = await api.get('/team?orgid=' + orgid , {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function getTeamByTeamId(teamid){
	const token = getToken();
	const response = await api.get('/team/' + teamid , {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function getAvailablePeople(teamid){
	const token = getToken();
	const response = await api.get('/organization/availablepeople/' + teamid , {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function addPeople(teamid, orgid, data){
	const token = getToken();
	const response = await api.post('/team/adduser/' + teamid + '?orgid=' + orgid , data, {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export async function deletePeople(teamid, orgid, userid){
	const token = getToken();
	const response = await api.delete('/team/removeuser/' + teamid + '?orgid=' + orgid + '&userid=' + userid , {
		headers : {
			Authorization : `Bearer ${token}`
		}
	})
	return response.data;
}

export default api