import React, { FormEvent } from "react";
import "../css/signIn.css"
type AuthFormProps = {
    title: string;
    text: string;
    imageSrc: string;
    onSubmit: (email: string, password: string, jobRole: string) => void;
    extraFields: JSX.Element;
    redirectText: string;
    redirectLink: string;
    redirectAction: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({
                                               title,
                                               imageSrc,
                                               onSubmit,
                                               extraFields,
                                               text,
                                               redirectText,
                                               redirectLink,
                                               redirectAction,
                                           }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [jobRole, setJobRole] = React.useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(email, password, jobRole);
    };

    return (
        <div className="signin-container">
            <div className="left-section">
                <img src={imageSrc} alt="Sign Up" className="cover-image" />
                <div className="overlay-text">
                    <h1>Welcome </h1>
                    <p className="welcome-text">{text}</p>
                </div>
            </div>

            <div className="right-section">
                <div className="form-container">
                    <h3 className="form-title">{title}</h3>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="email"className="label-auth">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="input-field-auth"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"className="label-auth">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="input-field-auth"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Render the extra fields if they exist */}
                        {extraFields}

                        <button type="submit" className="submit-button-auth">
                            {title}
                        </button>
                    </form>

                    <div className="signup-container">
                        <p>
                            {redirectText} <span onClick={redirectAction}>{redirectLink}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
