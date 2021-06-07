import React from 'react'
import {NavBar,Icon,List} from 'antd-mobile'
import {RouteComponentProps} from 'react-router-dom'
import './index.less'


const {Item}=List

export default function CountryPicker(props:RouteComponentProps){
    return (
        <div className='country-Picker'>
            <NavBar 
                className='country-Picker-navbar'
                mode='light'
                icon={<Icon  className='left-icon' type='left'/>}
                onLeftClick={()=>props.history.goBack()}>
                   {/*  这里一般是进不来的所以，这里我们可以采用goback实现事件回滚*/}
            选择国家或者地区
            </NavBar>
            <div className='country-Picker-container'>
                <List renderHeader={()=>'中国'} className='my-list'>
                    <Item extra={111}>AAA</Item>
                    <Item extra={111}>BBB</Item>
                    <Item extra={111}>CCC</Item>
                    <Item extra={111}>DDD</Item>
                    <Item extra={111}>AAA</Item>

                </List>
                <List renderHeader={()=>'中国'} className='my-list'>
                    <Item extra={111}>AAA</Item>
                    <Item extra={111}>BBB</Item>
                    <Item extra={111}>CCC</Item>
                    <Item extra={111}>DDD</Item>
                    <Item extra={111}>AAA</Item>

                </List>
                <List renderHeader={()=>'中国'} className='my-list'>
                    <Item extra={111}>AAA</Item>
                    <Item extra={111}>BBB</Item>
                    <Item extra={111}>CCC</Item>
                    <Item extra={111}>DDD</Item>
                    <Item extra={111}>AAA</Item>

                </List>
            </div>
        </div>
    )
}