import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

// 함수 이름은 대문자로 시작해야 한다.
function AppProfile() {
  const name: string = '리액트';
  const list: string[] = ['리액트', '리덕스', '타입스크립트'];
  return (
    <>
      <Profile />
    </>
  );
}

export default AppProfile;
