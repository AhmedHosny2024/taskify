import { CHANGEDROWER, SETTING,HOME } from "../Actions/types"

const changeDrower =(state={drower:false,selected:[false,false]},action)=>{
    switch(action.type){
        case CHANGEDROWER:
            return {...state ,drower:!state.drower}
        case HOME:
            return {...state ,selected:[true,false]}
        case SETTING:
            return {...state ,selected:[false,true]}
        default:
            return state
    }
}
export default changeDrower