import axios from 'axios';
import {LOGIN} from './apiConstant'

export const login = async(data) => {//video check
    return axios.post(LOGIN,data)
}