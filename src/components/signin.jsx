import './signin.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <main>
            <div className="main-container">
                <div className="box">
                    <div className='login-container'>
                        <div className="t-c">
                            <div id="email" className='input'>
                                <p className='name'>EMAIL</p>
                                <input type="text" placeholder='Enter your Email'/>
                            </div>
                            <div id="password" className='input'>
                                <p className='name'>PASSWORD</p>
                                <input type="password" placeholder='Enter your Password'/>
                            </div>
                            <div id="agree" className='input'>
                                <label class="checkbox" htmlFor="checkbox">    
                                <input type="checkbox" class="checkbox" id="checkbox" />
                                Li e concordo com os <span>termos</span>
                                </label>
                            </div>
                        </div>

                        <div className="sing-c">
                            <div className="singup">
                                <input type="button" className='singup-btn' value="Sign In" />
                            </div>
                            <div className="singin">
                                <Link to="/" className="singin-link">Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
