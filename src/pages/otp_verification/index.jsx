import { useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import supabase from "../../lib/supabase/index.js";


export default function OtpVerificationPage() {

    const { state } = useLocation();
    const otpRef = useRef();
    const navigate = useNavigate();

    async function verifyOtpClickHandler() {

        const otp = otpRef.current.value;
        const email = state?.email;

        const { error } = await supabase.auth.verifyOtp({
            email,
            token: otp,
            type: "email",
        });

        if (error) {
            alert(error.message);
        } else {
            navigate("/dashboard");
        }

    }

    async function resendOtpClickHandler() {

        const email = state?.email;

        const { error } = await supabase.auth.signInWithOtp({
            email,
        });

        if (error) {
            alert(error.message);
            return;
        }

        alert("A new OTP has been sent.");
    }
    return (
        <>
            <h1>Verify Your OTP</h1>
            <p>We have sent an OTP to your email, Please enter that OTP here for verification. The OTP will expire in 10 minutes.</p>
            <input id="password" type="password" placeholder="Enter Your OTP" ref={otpRef} />
            <button onClick={verifyOtpClickHandler}>Verify OTP</button>
            <button onClick={resendOtpClickHandler}>Resend OTP</button>
        </>
    );
}