import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false)
    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png'
                    alt='Netflix'
                />
                <button onClick={() => setSignIn(true)} className='loginScreen_button'>Sign In</button>
                <div className='loginScreen_gradient' />


            <div className='loginScreen_body'>
                {signIn? (
                    <SignInScreen />
                ): (
                    <>
                    <h1> Watch millions of movies and TV shows online and many more.</h1>
                    <h2> Watch anywhere. Cancel at anytime.</h2>
                    <h3>Ready to watch? Enter your email to restart or cancel your membership.</h3>
                    <div className='loginScreen_input'>
                        <form>
                            <input type='email' placeholder='Enter your email...' />
                            <button
                             onClick={() => setSignIn(true)}
                             className='loginScreen_getStarted'
                             type='submit'
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </>
                )}
                
                    
                
            </div>
        </div>
    </div>
    )
}

export default LoginScreen

