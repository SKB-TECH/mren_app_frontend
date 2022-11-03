import "./login.css"

const Login = () => {
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
                        <input placeholder="Email Adress" type="text" className="loginInput" />
                        <input placeholder="Password" type="text" className="loginInput" />
                        <button className="loginButton">Connexion</button>
                        <span className="loginForgot">Are you forgot password ?</span>
                        <button className="loginCreateAccount">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;