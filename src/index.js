import React from 'react';
import ReactDOM from 'react-dom/client';

// 上一节中我们通过setInterval内置函数来通过1秒进行一次渲染来实现动态渲染元素
// 这节我们来实现真正的时钟Clock组件

// 方法1:这种方法需要去使用setInterval这个函数来实现计数器的功能
// 然而，它忽略了一个关键的技术细节：Clock 组件需要设置一个计时器，并且需要每秒更新 UI。
// 理想情况下，我们希望只编写一次代码，便可以让 Clock 组件自我更新：

//const root = ReactDOM.createRoot(document.getElementById('root'));
//
//function Clock(props) {
//  return (
//    <div>
//      <h1>hello,world</h1>
//      {/*也可以直接把toLocaleTimeString这个函数放在这里*/}
//      <h2>It is {props.date.toLocaleTimeString()}</h2>
//    </div>
//  );
//}
//
//function tick() {
//  //toLocaleTimeString函数可以直接放在上面
//  root.render(<Clock date={new Date()} />);
//}
//
//setInterval(tick, 1000);

// 方法2:通过state来实现 配合声明周期来实现
// 三步来实现：date从props移到state中
// 1.写出类组件，注意类组件的props是私有的所以要有this
// 2.编写class构造函数，然后给this.state初始值；并且通过这种方式将props传递到父类的构造函数中

// 正确的使用state，必须要确保的3件事<详见，文档>

// 数据是向下流动的，组件可以把state作为props向下进行传递
function FormattedDate(props) {
  return (
    <h2>It is {props.date.toLocaleTimeString()}</h2>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  // 周期函数
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),1000
    );
  }
  // 妙呀，首先我们要了解这两个函数是干什么的。
  // componentDidMount这个周期函数就是当我们组件第一次被渲染到dom的时候，就会设置(任务)一个计时器，也就是挂载
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // componentWillUnmount周期函数在组件使用完，被删除的时候就会进行执行清除任务
  tick() {
    this.setState({
      date: new Date()
    });
  }
  // 之后就是因为dom一直在渲染所以这个函数会被一直调用,每次调用会修改date这个值
  render() {
    return (
      <div>
        <h1>hello, world!</h1>
        {/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/}
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

//为了验证每个组件是独立的；可以这样子来实现
function App() {
  return (
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Clock />)
root.render(<App />)
