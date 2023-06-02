import React, { useEffect } from "react";
import api from "../service/api";

const useFetch = (url : string) =>{
    const [data , setData] = React.useState<[]>([])
    const [loading ,setLoading] = React.useState(true)
    useEffect(()=>{
        api.get(url).then((res)=>{
            setData(res.data)
            setLoading(false)
        })
    } , [url])

    return {data , loading}
}
export default useFetch;