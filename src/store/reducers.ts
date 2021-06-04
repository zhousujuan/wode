import {combineReducers} from 'redux'

const initUser={};
function  user(prevState=initUser,action:any){
    switch(action.type){
        default:
            return prevState;
    }
}

export default combineReducers({
    user,
})
