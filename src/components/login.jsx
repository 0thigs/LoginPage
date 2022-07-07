import './login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    
    const [status, setStatus] = useState({
        type: "",
        mensagem: ""
    })

    const [check, setCheck] = useState(false)

    function sendInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function validate() {
        if(!user.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'})
        if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo email!'})
        if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo password!'})
        if(user.password.length < 8) return setStatus({type: 'error', mensagem: 'Erro: O campo senha deve conter pelo menos 8 caracteres'})
        if(!check) return setStatus({type: 'error', mensagem: 'Erro: Necessário concordar com os termos!'})
        return setStatus({type: "success", mensagem: "Usuário cadastrado com sucesso!!"});
    }

    return (

        <main>
            <div className="main-container">
                <div className="box">
                    <div className='login-container'>
                        <div className="t-c">

                            {status.type === "success"? <div className='success-c'> <p className='success'> {status.mensagem} </p> </div>: ""}
                            {status.type === "error"? <div className='error-c'> <p className='error'> {status.mensagem} </p> </div>: ""}

                            <div id="fullname" className='input'>
                                <p className='name'>FULL NAME</p>
                                <input type="text" name="name" onChange={sendInput} value={user.name} placeholder='Enter your Full Name'/>
                            </div>
                            <div id="email" className='input'>
                                <p className='name'>EMAIL</p>
                                <input type="text" name="email" onChange={sendInput} value={user.email} placeholder='Enter your Email'/>
                            </div>
                            <div id="password" className='input'>
                                <p className='name'>PASSWORD</p>
                                <input type="password" name="password" onChange={sendInput} value={user.password} placeholder='Enter your Password'/>
                            </div>
                            <div id="agree" className='input'>
                                <label class="checkbox" htmlFor="checkbox">    
                                <input type="checkbox" class="checkbox" id="checkbox" onChange={(e) => {setCheck(e.target.checked)}}/>
                                Li e concordo com os <span>termos</span>
                                </label>
                            </div>
                        </div>

                        <div className="sing-c">
                            <div className="singup">
                                <input type="button" className='singup-btn' onClick={validate} value="Sign Up" />
                            </div>
                            <div className="singin">
                                <Link to="/signin" className="singin-link">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
