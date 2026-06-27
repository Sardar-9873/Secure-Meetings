import { useRef } from "react";
import { useNavigate } from "react-router";
import supabase from "../../lib/supabase/index.js";


export default function SignInPage() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    async function signInClickHandler() {
        const email = emailRef.current.value;

        const { data, error } = await supabase.auth.signInWithOtp({
            email,
        });

        if (error) {
            alert(error.message);
            return;
        }

        navigate("/otpverification", { state: { email } });
    }
    return (
        <>
            <input id="email" type="email" placeholder="Enter Your Email" ref={emailRef} />
            <input id="password" type="password" placeholder="Enter Your Password" ref={passwordRef} />
            <button onClick={signInClickHandler}>Sign In</button>

        </>
    );
}