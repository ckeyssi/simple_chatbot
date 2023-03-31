import { useEffect, useState } from "react";
import axios from 'axios'
import { GET_CHAT_BOOT } from '../services/api'

export const useGetService = (doFecth = false) => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState(404)
    useEffect(() => {
        if (!doFecth) return

        axios.get(GET_CHAT_BOOT).then(res => {
            setData(res?.data?.response[0]?.steps)
            setStatus(res.status)
        }).catch(err => {
            console.log(err)
            setStatus(500)
            setData([])
        })

    }, [doFecth])
    return {
        data,
        status
    }
}
