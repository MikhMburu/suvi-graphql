const initialState = {
  isLoggedIn: true,
  loading: false
}

const rootReducer = (state=initialState, action)=>{
  switch(action.state){
    default:
      return state;
  }
}

export default rootReducer;