import "./forget.css"
import { Link } from "react-router-dom";

const Forget = () => {
    return (
        <div>
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
                            <button className="loginCreateAccount">
                                <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                                    Forget Password
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forget;