import React, { useRef, useState } from "react";
import { validateEmail ,validatePassword } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const dispatch = useDispatch()
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const [err, setErr] = useState(null)
  const name = useRef("")
  const email = useRef("")
  const password = useRef("") 
  const navigate = useNavigate()
  

  function handleSubmit( e) {
    e.preventDefault()
    // const name = e.target.email.value
    const isValidEmail = validateEmail(email.current.value)
    const isValidPassword = validatePassword(password.current.value)
    if (!isValidEmail) {
      setErr("abe eita to email , bekaria pila")
      return;
    }
    if (!isValidPassword) {
      setErr("Kan karibu re jibana re tu , password te bi thik re mariparunu")
      return;
    }
    setErr("")
    if (isSignUpPage) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
            .then(() => {
              console.log("new user created")
              // navigate("/watch");
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName
                })
              );
            })
            .catch((error) => {
              setErr(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + "-" + errorMessage);
        });
    }
    // console.log("very good")
  }
  return (
    <>
      <img
        className=" absolute top-0 z-[-2]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="img"
      />

      {/* <div className='h-lvh  absolute bg-black bg-opacity-50'> </div> */}

      <div className="flex justify-center">
        <form className="  w-1/3   py-10 bg-black bg-opacity-70 rounded-lg " onSubmit={handleSubmit}>
          <div className="w-2/4 m-auto">
            <h1 className="mb-4 text-3xl font-bold text-white">
              {isSignUpPage ? "Sign Up" : "Sign In"}
            </h1>
            {isSignUpPage && (
              <input
                className="mb-4 px-4 py-2 w-full bg-gray-700 text-white"
                type="text "
                name="name "
                ref={name}
                placeholder="full name"
              ></input>
            )}
            <input
              className="mb-4 px-4 py-2 w-full bg-gray-700 text-white"
              type="text"
              name="email"
              ref={email}
              placeholder="Gmail"
            ></input>
            <input
              className="mb-4 px-4 py-2 w-full bg-gray-700 text-white"
              type="text"
              name="password"
              ref={password}
              placeholder="Password"
            ></input>
            <button className="text-white bg-red-800 w-full py-2 font-bold">
              Submit
            </button>
            <p className="text-red-600">{err}</p>
            <p className="text-gray-500 py-2">
              { !isSignUpPage ? "New to Netflix?" : "Alredy Sign in"}
              <span className="text-white cursor-pointer "
                onClick={()=>setIsSignUpPage (!isSignUpPage)}
              >
                { isSignUpPage ? "Sign In now." : "Sign Up now"}
                
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
