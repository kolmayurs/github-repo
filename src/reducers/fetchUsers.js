export default function fetchUsers(state={
	fetching: false,
	fetched: false,
	data: [],
	error: null,
	err: false
},action){
	switch(action.type){
		case 'FETCH_USERS_START': {
			return {...state, fetching: true}
		}
		case 'RECEIVE_USERS': {
			return {...state, fetching:false, fetched:true, data:action.payload}
		}
		case 'FETCH_USERS_ERROR': {
			return {...state, fetching: false, fetched:false, err:true, error: action.payload}
		}
		default: {
			return {...state}
		}
	}
}