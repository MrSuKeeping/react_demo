import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx'
// import Home from './home.jsx'
// import Nav from './Nav.jsx'
// import * as serviceWorker from './serviceWorker';



// const react = "My React"
// ReactDOM.render(
//   <h1>Hello {react}</h1>,             // JSX语法：JavaScript + HTML 语法
//   document.getElementById('root')   // 获取要插入的容器，前面的内容的位置确定
// );

// element = 后面的()的意义：如果存在标签结构，并且标签结构要换行，则需要使用()括起来
// function tick(){
//   const element = (
//     <div>
//       <h1>Hello React!</h1>
//       <h2>It is { new Date().toLocaleTimeString() }</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'));
// setInterval(tick, 1000);
// }
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('home'))
// ReactDOM.render(<Nav />, document.getElementById('nav'))










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
