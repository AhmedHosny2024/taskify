import {CHANGEDROWER, HOME, SETTING} from"./types"
export const Setting =async (dispatch) => {
   return dispatch ({type:SETTING})
  };
export  const Home= async (dispatch)=> {
    return dispatch ({type:HOME})
  };

export  const DrawerAction = async (dispatch) => {
    return dispatch({type: CHANGEDROWER})
  };