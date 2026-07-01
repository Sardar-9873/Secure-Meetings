import "./style.css"


export default function SignUpHTML({usernameRef, emailRef, passwordRef, changeHandler, signUpClickHandler, error}) {

    return (
        <>
            <input type="text" id="name" placeholder="Enter Username" ref={usernameRef} onChange={changeHandler} />
            <input id="email" type="email" placeholder="Enter Your Email" ref={emailRef} />
            <input id="password" type="password" placeholder="Enter Your Password" ref={passwordRef} />
            <button onClick={signUpClickHandler}>Sign Up</button>
            {error && <small className="error">Username should not have space.</small>}
        </>
    );
}
