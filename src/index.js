import React from 'react';
import ReactDOM from 'react-dom/client';

// 下面是一个简单的登陆判断操作
//function UserGreeting(props) {
//  return <h1>Welcome back!</h1>;
//}
//
//function GuestGreeting(props) {
//  return <h1>please sign up.</h1>;
//}
//
//function Greeting(props) {
//  const isLoggedIn = props.isLoggedIn;
//  //if(isLoggedIn) {
//  //  return <UserGreeting />;
//  //}
//  //return <GuestGreeting />;
//  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
//}
//
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Greeting isLoggedIn={true} />);

// 事例2 元素变量
// 你可以使用变量来储存元素。 它可以帮助你有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  //if(isLoggedIn) {
  //  return <UserGreeting />;
  //}
  //return <GuestGreeting />;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// 创建一个有状态组件来控制渲染哪一个页面
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    // 先初始化默认值
    const isLoggedIn = this.state.isLoggedIn;
    // 声明变量
    let button;
    // 判断渲染哪个button
   // if(isLoggedIn) {
   //   button = <LogoutButton onClick={this.handleLogoutClick} />;
   // }else {
   //   button = <LoginButton onClick={this.handleLoginClick} />;
   // }

    button = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl />);

