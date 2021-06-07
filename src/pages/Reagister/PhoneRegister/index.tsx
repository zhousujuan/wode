
import {useEffect} from 'react'
import {Icon, InputItem, Modal, NavBar, WhiteSpace, WingBlank,Button} from 'antd-mobile'
import {RouteComponentProps} from 'react-router-dom'

import './index.less'



const {alert} =Modal;

export default function PhoneRegister(props:RouteComponentProps){
    //弹窗部分
    // useEffect(() => {
    //     alert('注册协议及隐私策略',
    //     <span className='phone-register-policy'>
    //         在您注册成为尚硅谷用户的过程中，你需要完成我们的注册流程并通过点击同意的形式在线签署以下协议,
    //         <strong className='phone-register-text'>
    //             请您务必仔细阅读、充分理解协议中的内容后再点击同意(尤其是以粗体并下环线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制)
    //         </strong>
    //         :
    //         <span className='phone-register-agreement'>《硅谷用户注册协议》</span>
    //         <span className='phone-register-agreement'>《硅谷隐私政策》</span>
            
             
    //     </span>
    //    ,
    //     [
    //         {text:'不同意',
    //         onPress:()=>{
    //             //返回上一个页面
    //             props.history.push('/phoneLogin')


    //         }},
    //         {text:'同意',onPress:()=>console.log('ok'),
    //         //设置按钮样式
    //         style:{
    //             backgroundColor:'red',
    //             color:'#fff',
    //         }}
    //     ]);
    // },[]); 
    
    

    return (
        <div className='container'>
            <NavBar 
                mode='light'
                icon={<Icon  className='left-icon' type='left'/>}
                onLeftClick={()=>props.history.push('./phoneLogin')}>
                    {/* 这里用push是为了防止如果是在当前界面进行刷新的时候，他就没有上一个界面的记录，所以这里用的push最保险 
                        也就是说，如果进来的时候就在这个界面，就没有历史记录，这个时候我们用go back就没有用*/}
            硅谷注册
            </NavBar>
            {/* 两翼留白 */}
            <WingBlank size='lg'>
                {/* 上下留白 */}
                <WhiteSpace size='xl'/>
                    <InputItem
                        placeholder='请输入手机号' clear>
                            {/* clear清空功能 */}
                            <div className='phone-prefix'>
                                <span>+86</span>
                                <Icon className='left-icon' type='down'></Icon>    
                            </div>             
                    </InputItem>
                    <WhiteSpace size='xl'/>
                    <div className='btn-container'>
                        <Button type='primary' className='btn'>下一步</Button>
                    </div>
                    
            </WingBlank>
        </div>
    )
}