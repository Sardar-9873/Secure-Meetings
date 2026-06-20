import { useRef } from "react";
import supabase from "../../lib/supabase/index.js";


export default function SignInPage() {

    const emailRef = useRef();
    const passwordRef = useRef();

    async function signInClickHandler() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const result = await supabase.auth.signInWithPassword({ email, password });
    }
    return (
        <>
            <input id="email" type="email" placeholder="Enter Your Email" ref={emailRef} />
            <input id="password" type="password" placeholder="Enter Your Password" ref={passwordRef} />
            <button onClick={signInClickHandler}>Sign In</button>

        </>
    );
}