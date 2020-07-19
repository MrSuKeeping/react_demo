import React from "react"
import Nav from "./nav"

// 用类的形式创建组件，Hook形式
class App extends React.Component{
    // 渲染函数
    render(){
        const nav1 = ['首页1','视屏1', '学习1'];
        const nav2 = ['首页2','视屏2', '学习2'];
        return (
            <div>
                <h1>Hello React Component</h1>
                <h3>慢慢积累，坚持就是胜利！</h3>
                <Nav nav = { nav1 } title = "导航1"/>
                <Nav nav = { nav2 } title = "导航2"/>
            </div>
        )
    }
}
// 外部引用就需要在这里写个导出代码
export default App


