const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "Fetch_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "Fetch_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "Fetch_USERS_SUCCESS";

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest())
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //response.data is the array of users
        const users = res.data.map(user => user.id)
        dispatch(fetchUserSuccess(users))
      })
      .catch((error) => {
        //error.message
        dispatch(fetchUserFailure(error.message))
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())