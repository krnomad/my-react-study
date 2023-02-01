import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Profile } from './components/Profile';

// 함수 이름은 대문자로 시작해야 한다.
function AppProfile() {
  const name: string = '리액트';
  const list: string[] = ['리액트', '리덕스', '타입스크립트'];
  return (
    <>
      <Profile img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' name='James Kim' title='Frontend Developer'/>
      <Profile img='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' name='Anna Young' title='Backend Developer'/>
      <Profile img='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' name='Bob Yu' title='Backend Developer'/>
    </>
  );
}

export default AppProfile;
