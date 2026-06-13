import { useRef } from "react";


export default function SignUpPage() {

    const emailRef = useRef();
    const passwordRef = useRef();

    function signUpClickHandler() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // console.log(email, password);
    }
    return (
        <>
            <input id="email" type="email" placeholder="Enter Your Email" ref={emailRef} />
            <input id="password" type="password" placeholder="Enter Your Password" ref={passwordRef} />
            <button onClick={signUpClickHandler}>Sign Up</button>

        </>
    );
}