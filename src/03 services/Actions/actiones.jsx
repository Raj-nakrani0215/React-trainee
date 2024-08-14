import { ADD_to_Cart, Remove_to_Cart } from "../../constants"

 
export const addToCart= (data) =>{
    // console.log("action",data)
    return{
        type:ADD_to_Cart,
        data:data
    }
}

export const removeToCart= (data) =>{
    return{
        type:Remove_to_Cart,
        data:data
    }
}