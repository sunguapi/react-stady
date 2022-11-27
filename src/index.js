import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. 渲染初识
// 通过react创建dom绑定一个根作为需要被替换的元素，之后render函数编译把jsx语法替换到root根标签内部
//const root = ReactDOM.createRoot(
//  document.getElementById('root')
//);
//const element = <h1>hello, world</h1>;
//root.render(element);




// 2. 更新已渲染的元素;react元素是不可变的
// 根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，
// 并将其传入 root.render()。
//const root = ReactDOM.createRoot(
//  document.getElementById('root')
//);
//
//function tick() {
//  const element = (
//    <div>
//      <h1>hello, world!</h1>
//      <h2>It is {new Date().toLocaleTimeString()}</h2>
//    </div>
//  );
//  root.render(element);
//}
//// setInterval是回调函数每一秒都会回调一次，也就是每一秒都会render一次来实现react的改变
//setInterval(tick, 1000);

// 3. 组件和props
// 3.1 函数组件和class组件

// 函数组件简单理解就是通过传递了一个props对象，这个对象可以携带props信息
//function Welcome(props) {
//  return <h1>hello, {props.name}</h1>
//}

// 类组件就是我们要继承react根组件，然后需要render来返回react元素（jsx）
// 可以看到因为类自己继承了react所以自己需要执行reader来渲染，而方法只是返回了jsx给react解析
// jsx是javascrip的扩展所以本来就可以返回主要是类继承了还是直接传递了props对象
//class Welcome extends React.Component {
//  render() {
//    return <h1>hello, {this.props.name}</h1>
//  }
//}

// 渲染组件
function Welcome(props) {
  return <h1>hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name='sun'/>
      
      <Welcome name='jin'/>
      
      <Welcome name='bao'/>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
//const element = <Welcome name='sunjinbao'/>;
//root.render(element);

root.render(<App/>)
// 可以知道函组件可以直接写成一个标签，若标签中写了属性，就可以传递掉props中


