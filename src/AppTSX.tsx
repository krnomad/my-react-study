import React from 'react';
import logo from './logo.svg';
import './App.css';

// 함수 이름은 대문자로 시작해야 한다.
function AppTSX() {
  const name: string = '리액트';
  const list: string[] = ['리액트', '리덕스', '타입스크립트'];
  return (
    <>
    <h1 className='orange'>{`Hello! ${name}`}</h1>
    <h2> hello! </h2>
    <ul>
      {
        list.map((item) => {
          return <li>{item}</li>
        })
      }
    </ul>
    <p>{name}</p>
    <img
      style={{ width: '100px', height: '100px'}}
      src='https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5rH/image/dV6N1Eij8kKA3v6na7jNdpbqwZ4'
      alt='nature'
    />
    </>
  );
}

export default AppTSX;
