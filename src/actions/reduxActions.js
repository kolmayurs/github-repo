import axios from 'axios';
export function fetchUsers(input){
	return function(dispatch){
		dispatch({type:'FETCH_USERS_START'})
		//axios.get('https://api.myjson.com/bins/9qbsr?username='+input)
		axios.get('https://api.github.com/users/'+input+'/repos')
		.then(res => {
			dispatch({type:'RECEIVE_USERS', payload: res.data})
		})
		.catch(err => {
			dispatch({type:'FETCH_USERS_ERROR', payload: err})
		})
	}
}




