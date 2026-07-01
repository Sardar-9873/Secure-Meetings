export default function SignInHTML({emailRef, passwordRef, signInClickHandler}) {

    return (
        <>
            <input id="email" type="email" placeholder="Enter Your Email" ref={emailRef} />
            <input id="password" type="password" placeholder="Enter Your Password" ref={passwordRef} />
            <button onClick={signInClickHandler}>Sign In</button>
        </>
    );
}