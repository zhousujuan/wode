//引入组件
import {FunctionComponent} from 'react'

import PhoneLogin from '../pages/Login/PhoneLogin'
import PasswordLogin from '../pages/Login/PasswordLogin'

import CodeRegister from '../pages/Reagister/CodeRegister'
import PasswordRegister from '../pages/Reagister/PasswordRegister'
import PhoneRegister from '../pages/Reagister/PhoneRegister'

import CountryPicker from '../components/CountryPicker'

import { RouteComponentProps } from 'react-router-dom'




//3.对这个数组的类型进行声名
//4.定义类型
export interface RouteType {
    path:string,
    component:FunctionComponent<RouteComponentProps>;
}

//1.定义一个数组,用来存放路由地址
const routes:RouteType[]=[
    {
        path:'/phoneLogin',
        component:PhoneLogin,
    },
    {
        path:'/passwordLogin',
        component:PasswordLogin,
    },
    {
        path:'/codeRegister',
        component:CodeRegister,
    },
    {
        path:'/passwordRegister',
        component:PasswordRegister,
    },
    {
        path:'/phoneRegister',
        component:PhoneRegister,
    },
    
    {
        path:'/countryPicker',
        component:CountryPicker,
    },
]
//2.默认暴露出去
export default routes;