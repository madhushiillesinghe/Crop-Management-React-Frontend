import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpImage from "../assets/coverImage.jpg";
import AuthForm from "../componet/AuthForm.tsx";

const SignUpPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jobRole, setJobRole] = useState("");

    const handleSignUp = (email: string, password: string, jobRole: string) => {
        if (email && password && jobRole) {
            alert("Account created successfully!");
            navigate("/"); // Redirect to Sign In page after successful sign-up
        } else {
            alert("Please fill out all fields.");
        }
    };

    const handleSignInRedirect = () => {
        navigate("/"); // Navigate to Sign-In page
    };

    const extraFields = (
        <div className="form-group">
            <label htmlFor="jobRole">Job Role</label>
            <select
                id="jobRole"
                className="input-field"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                required
            >
                <option value="">Select a role</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
                <option value="Administrative">Administrative</option>
            </select>
        </div>
    );

    return (
        <AuthForm
            title="Sign Up"
            text="We're excited to have you join us. Please fill in the details below to create your account and start exploring all that we have to offer. questions or need assistance, feel free to contact us. We’re here to help!"
            imageSrc={SignUpImage}
            onSubmit={handleSignUp}
            extraFields={extraFields}
            redirectText="Already have an account?"
            redirectLink="Sign In"
            redirectAction={handleSignInRedirect}
        />
    );
};

export default SignUpPage;
