
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import routes,{RouteType} from './config/routers';
//使用前端路由，必须要引入BrowserRouter
//还要引入Route，让他加载显示路由组件
//因为有多个路由组件，所以还要引入Switch

// react-router-dom===>报错：
// 未使用导入声明中的所有导入。
// 文件“f:/尚硅谷培训/项目/wode/node_modules/@types/react-router-dom/index.d.ts”不是模块。
  // 原因：默认下载的react-dom是没有下载类型的，所以我们需要下载他的类型声明文件
  // 命令：npm i --save-dev @types/react-router-dom---》》没有解决
          // yarn add @types/react-router-dom -D

  //两个命令的区别与联系



export default function App(){
  return (
    <Router>
      <Switch>
        {routes.map((route:RouteType,index:number)=>{
          // return <Route path={route.path} component={route.component}/> 
          // 简写：
          return <Route {...route} key={index} exact/> 
          // exact属性：让路由路径全匹配，而不是以他开头就行
        })}
        {/* 为了测试 */}
        <Redirect to="/phoneLogin"></Redirect>
      </Switch>
    </Router>
  )
}