import './login.css'

export default function Login() {
    return (
        <div className='login-container'>
            <div className="t-c">
                <div id="fullname" className='input'>
                    <p className='name'>FULL NAME</p>
                    <input type="text" />
                </div>
                <div id="email" className='input'>
                    <p className='name'>EMAIL</p>
                    <input type="text" />
                </div>
                <div id="password" className='input'>
                    <p className='name'>PASSWORD</p>
                    <input type="password" />
                </div>
                <div id="agree" className='input'>
                    <label htmlFor="value1">    
                    <input type="checkbox" id="value1" />
                    Li e concordo com os <span>termos</span>
                    </label>
                </div>
            </div>

            <div className="sing-c">
                <div className="singup">
                    <input type="button" className='singup-btn' value="Sign Up" />
                </div>
                <div className="singin">
                    <a href="#" className="singin-link">Sign In</a>
                </div>
            </div>
        </div>
    )
}
