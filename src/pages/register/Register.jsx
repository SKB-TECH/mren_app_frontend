import "./register.css"
const Register = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginlogo">Sumulia </h3>
                    <span className="loginDesc">
                        Connect with friends and the world on Sumalia
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" type="text" className="loginInput" />
                        <input placeholder="Email Adress" type="text" className="loginInput" />
                        <input placeholder="Password" type="text" className="loginInput" />
                        <input placeholder="Confirm you Password" type="text" className="loginInput" />
                        <button className="loginButton">Create Account</button>
                        <button className="loginCreateAccount">Connexion</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;