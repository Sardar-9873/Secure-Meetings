import { useRef } from "react";
import supabase from "../../lib/supabase/index.js";


export default function SignUpPage() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function signUpClickHandler() {
        const first_name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const result = await supabase.auth.signUp({
            email, password, options: {
                data: {
                    first_name
                }
            }
        });
    }
    return (
        <>
            <input type="text" id="name" placeholder="Enter User Name" ref={nameRef} />
            <input id="email" type="email" placeholder="Enter Your Email" ref={emailRef} />
            <input id="password" type="password" placeholder="Enter Your Password" ref={passwordRef} />
            <button onClick={signUpClickHandler}>Sign Up</button>

        </>
    );
}