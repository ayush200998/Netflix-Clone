import React, { useRef } from 'react'
import './SignInScreen.css'
import { auth } from '../firebase'

const SignInScreen = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            console.log(authUser)
        }).catch(error => alert(error.message))
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => alert(error.message))
    }

    return (
        <div className='SignInScreen'>
            <h1>Sign In</h1>
            <form>
                <input ref={emailRef} type='email' placeholder='Enter email...'/>
                <input ref={passwordRef} type='password' placeholder='Enter password...'/>
                <button
                 onClick={signIn}
                 type='submit'
                 className='SignInScreen_button'
                >
                    Sign In
                </button>
            </form>
            <h4> 
                <span className='SignInScreen_gray'>New to Netflix?  </span> 
                <span className='SignInScreen_link' onClick={register}>   Sign Up now.</span>
            </h4>
        </div>
    )
}

export default SignInScreen
