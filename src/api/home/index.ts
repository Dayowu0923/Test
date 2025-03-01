import axios from "axios";




export const getProductList = async() =>{
    try
    {
        var res = await axios.get<any>(`https://livejs-api.hexschool.io/api/livejs/v1/customer/shop/products`)
        return res
    }
    catch(ex)
    {
        console.log(ex)
    }
}

export const getCarList = async () => {
    try
    {
        var res = await axios.get<any>(`https://livejs-api.hexschool.io/api/livejs/v1/customer/shop/carts`)
        return res
    }
    catch(ex)
    {
        console.log(ex)
    }
} 


export const postCarList = async (body : any) => {
    try
    {
        var res = await axios.post<any>(`https://livejs-api.hexschool.io/api/livejs/v1/customer/shop/carts`, body)
        return res
    }
    catch(ex)
    {
        console.log(ex)
    }
} 

export const deleteCarList = async () => {
    try
    {
        var res = await axios.delete<any>(`https://livejs-api.hexschool.io/api/livejs/v1/customer/shop/carts`)
        return res
    }
    catch(ex)
    {
        console.log(ex)
    }
}


export const deleteOneItem = async (id : any) => {
    try
    {
        var res = await axios.delete<any>(`https://livejs-api.hexschool.io/api/livejs/v1/customer/shop/carts/${id}`)
        return res
    }
    catch(ex)
    {
        console.log(ex)
    }
} 


export const sendOrder = async (model : any) => {
    try
    {
        var res = await axios.post<any>(`https://livejs-api.hexschool.io/api/livejs/v1/customer/shop/orders` , model)
        return res
    }
    catch(ex)
    {
        console.log(ex)
    }
} 


