import React from 'react'
import ReactDOM from 'react-dom/client'

// 事件处理
// 首先了解setState 和 prevState
// setState:只会使用最后一次的修改；会对之前的值进行覆盖；比如我现在要连续调用四处，每次在默认值0的基础上加1，第四次加完值是1；而不是4，是因为对之前的值进行了覆盖
// prevState:会查看上一次的状态值
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    //this.handleClick = this.handleClick.bind(this);
    // 如果想不加，可以有两种方法
    // 1. 修改handleClick 函数为箭头函数
    // 2. 通过在调用处使用箭头函数
  }
//
 // handleClick() {
 //   this.setState(prevState => ({
 //     isToggleOn: !prevState.isToggleOn
 //   }));
 // }
  
  // 1. 修改handleClick为箭头函数
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  //render() {
  //  return (
  //    // 注意我们在使用class组件的时候一定要去绑定this，要不它不认识handleClick
  //    // 你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。
  //    <button onClick={this.handleClick}>
  //    // 应该也可以这样写 this.handleClick.bind
  //      {this.state.isToggleOn ? 'ON' : 'OFF'}
  //    </button>
  //  );
  //}

  // 2. 通过在调用处使用箭头函数来实现this绑定,注意这里必须是函数形式
  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Toggle />);

// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
// 传递参数两种方法是等价的

// 总结一共有四种方法
// 1. 绑定bing在构造器中
// 2. 在调用处绑定bind
// 3. 对函数改造成箭头函数
// 4. 在调用处使用箭头函数，函数要带小括号
