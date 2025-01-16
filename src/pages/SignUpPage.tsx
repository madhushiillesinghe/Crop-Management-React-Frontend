import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpImage from "../assets/coverImage.jpg";
import AuthForm from "../componet/AuthForm.tsx";
import "../css/signIn.css"

const SignUpPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jobRole, setJobRole] = useState("");  // jobRole default is empty string

    const handleSignUp = (email: string, password: string, jobRole: string) => {
        console.log(email, password, jobRole);
        if (email && password && jobRole == "") {
            alert("Account created successfully!");
            navigate("/");
        } else {
            alert("Please fill out all fields, including selecting a job role.");
        }
    };

    const handleSignInRedirect = () => {
        navigate("/");
    };

    const extraFields = (
        <div className="form-group">
            <label htmlFor="jobRole" className="label-auth">Job Role</label>
            <select
                id="jobRole"
                className="input-field-auth"
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
