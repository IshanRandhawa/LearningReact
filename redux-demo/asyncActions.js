const redux = require("redux");
const createStore = redux.createStore;
const apllyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default


const intialState = {
    loading: false,
    users : [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        key : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        key : FETCH_USERS_SUCCESS,
        payload : users
    }
}
const fetchUsersFailure = (error) => {
    return {
        key : FETCH_USERS_FAILURE,
        payload : error
    }
}

const reducer = (state = intialState, action) => {
        switch(action.type){
            case FETCH_USERS_REQUEST:
                return{
                    ...state, loading:true
                }
            case FETCH_USERS_SUCCESS:
                return{
                     loading:false , users = action.payload, error: ''
                }
            case FETCH_USERS_FAILURE:
                return{ 
                    users:[], loading: false , error = action.payload

                }
        }
}

const store = createStore(reducer,apllyMiddleware())