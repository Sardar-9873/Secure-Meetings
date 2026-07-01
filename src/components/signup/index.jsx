import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../../lib/supabase/index.js";
import SignUpHTML from "../../pages/signup/index.jsx";

export default function SignUpPage() {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    async function signUpClickHandler() {
        const first_name = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const { data, error } = await supabase.auth.signUp({
            email, password, options: {
                data: {
                    first_name
                }
            }
        });

        if (error) {
            alert(error.message);
            return;
        }


        navigate("/otpverification", { state: { email } });
    }

    function changeHandler(e) {
        const value = e.target.value;

        if (value.includes(" ")) {
            setError(true);
        }

        if (!value.includes(" ")) {
            setError(false);
        }

    }

    return(
        <SignUpHTML usernameRef={usernameRef} emailRef={emailRef} passwordRef={passwordRef} changeHandler={changeHandler} signUpClickHandler={signUpClickHandler} error={error}/>
    );
}