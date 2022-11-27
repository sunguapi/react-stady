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
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(element);
}
// setInterval是回调函数每一秒都会回调一次，也就是每一秒都会render一次来实现react的改变
setInterval(tick, 1000);
