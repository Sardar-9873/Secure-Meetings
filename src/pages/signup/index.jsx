import { useRef } from "react";
import supabase from "../../lib/supabase/index.js";


export default function SignUpPage() {

    const emailRef = useRef();
    const passwordRef = useRef();

    async function signUpClickHandler() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const result = await supabase.auth.signUp({ email, password });

        console.log(result, "===>>>result jio");

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