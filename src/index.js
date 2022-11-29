import React from 'react';
import ReactDOM from 'react-dom/client';

function formatDate(date) {
  return date.toLocaleDateString();
}

// 把Avatar抽出来作为一个单独的组件
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'hello kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />
);
// 分析
// 1. render去渲染了comment组件 这个时候props中有props.data,
// props.text, props.author这几个属性
// 2. Comment组件中去加载UserInfo这个组件，同时提供了数据props.user
// 3. 然后UserInfo组件又去加载里面的Avatar组件
// 4. Avatar组件又去拿props.user.name和头像数据
