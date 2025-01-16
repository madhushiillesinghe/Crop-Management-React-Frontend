// pages/SignInPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import SignInImage from "../assets/coverImage.jpg";
import AuthForm from "../componet/AuthForm.tsx";

const SignInPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignIn = (email: string, password: string) => {
        if (email === "madhushiillesinghe225@gmail.com" && password === "1234") {
            navigate("/dashboard");
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    const handleSignUpRedirect = () => {
        navigate("/signup");
    };

    return (
        <AuthForm
            title="Sign In"
            text="We're excited to have you join us. Please fill in the details below to create your account and start exploring all that we have to offer. Whether you're looking to connect, "
            imageSrc={SignInImage}
            onSubmit={handleSignIn}
            redirectText="Don't have an account?"
            redirectLink="Sign Up"
            redirectAction={handleSignUpRedirect}
        />
    );
};

export default SignInPage;
