export default function OtpVerificationHTML({otpRef, verifyOtpClickHandler, resendOtpClickHandler}) {

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