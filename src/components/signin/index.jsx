import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../../lib/supabase/index.js";
import SignInHTML from "../../pages/signin/index.jsx";

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
        <SignInHTML emailRef={emailRef} passwordRef={passwordRef} signInClickHandler={signInClickHandler} />
    );
}