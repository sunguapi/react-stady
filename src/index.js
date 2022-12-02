import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. 运算符&&
// 左边为true 则显示右边的数据；否则，则不显示数据

//function Mailbox(props) {
//  const unreadMessages = props.unreadMessages;
//  return (
//    <div>
//      <h1>hello!</h1>
//      {unreadMessages.length > 0 && 
//        <h2>
//          You have {unreadMessages.length} unread messages.
//        </h2>
//      }
//    </div>
//  );
//}
//
//const message = ['react', 're: react', 're: re: react', 're: re: re: react'];
//
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Mailbox unreadMessages={message} />);

// 2. 大括号中也可以使用三目
// 3. 阻止组件渲染
function Warning(props) {
  if(!props.warn) return null;
  return (
    <div className='warning'>
      Warning!
    </div>
  )
}

class Page extends React.Component {
  // 构造器
  constructor(props) {
    super(props);
    this.state={showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  };
  
  // 点击事件
  handleToggleClick() {
    // 如果要设置开关双向的必须要使用state或者prevState来获取当前的状态
    this.setState((state) => ({
      showWarning: !state.showWarning
    }))
  };

  render() {
    return (
      <div>
        <Warning warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'hide' : 'show'}
        </button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);

