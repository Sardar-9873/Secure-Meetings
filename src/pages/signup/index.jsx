import { useRef, useState } from "react";
import supabase from "../../lib/supabase/index.js";
import { useNavigate } from "react-router";
import "./style.css"


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

        if(error){
            alert(error.message);
            return;
        }


        navigate("/otpverification", { state: { email } });
    }

    function changehandler(e) {
        const value = e.target.value;

        if (value.includes(" ")) {
            setError(true);
        }

        if (!value.includes(" ")) {
            setError(false);
        }

    }
    return (
        <>
            <input type="text" id="name" placeholder="Enter Username" ref={usernameRef} onChange={changehandler} />
            <input id="email" type="email" placeholder="Enter Your Email" ref={emailRef} />
            <input id="password" type="password" placeholder="Enter Your Password" ref={passwordRef} />
            <button onClick={signUpClickHandler}>Sign Up</button>
            {error && <small className="error">Username should not have space.</small>}
        </>
    );
}
