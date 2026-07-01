import { useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import OtpVerificationHTML from "../../pages/otp_verification/index.jsx";
import supabase from "../../lib/supabase/index.js";


export default function OtpVerificationPage() {

    const { state } = useLocation();
    const otpRef = useRef();

    const navigate = useNavigate();

    async function verifyOtpClickHandler() {

        const otp = otpRef.current.value;
        const email = state?.email;

        const { data, error } = await supabase.auth.verifyOtp({
            email,
            token: otp,
            type: "email",
        });

        if (error) {
            alert(error.message);
            return;
        } else {
            navigate("/dashboard");
        }

    }

    async function resendOtpClickHandler() {

        const email = state?.email;

        const { data, error } = await supabase.auth.signInWithOtp({
            email,
        });

        if (error) {
            alert(error.message);
            return;
        }

        alert("A new OTP has been sent.");
    }

    return(
        <OtpVerificationHTML otpRef={otpRef} verifyOtpClickHandler={verifyOtpClickHandler} resendOtpClickHandler={resendOtpClickHandler} />
    )
}