import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import { auth } from '../utils/fireBseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import appStore from '../utils/appStore';
import {useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("executing  useEffect of <Body/>")
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/watch")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    
  } , [])
  return (
   
    <div className='relative'>
      <Header />
      <Outlet />
      </div>
     
  );
};

export default Body;