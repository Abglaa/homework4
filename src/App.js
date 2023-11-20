import './App.css';
import {useEffect, useState} from "react";
import movie from './movie/video.mp4'
const App = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [nameError, setNameError] = useState('Вы забыли написать имя')
    const [emailError, setEmailError] = useState('Вы забыли написать gmail')
    const [passwordError, setPasswordError] = useState('Вы забыли написать пароль')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }        
    }, [emailError, passwordError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", { name, email, password });
      };

    const logFormData = () => {
        console.log(name, email, password);
      };

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const regExp = /^[a-zA-Z0-9._%+-]+@email.com$/;
        if (!regExp.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный email')
        } else {
            setEmailError("")
        }
    }
    const nameHandler = (e) =>{
        setName(e.target.value)
        const regExp = /^[a-zA-Zа-яА-Я0-9._%+-]/;
        if (!regExp.test(String(e.target.value).toLowerCase())){
            setNameError('Некорректный имя')
        } else {
            setNameError("")
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setPasswordError('Пароль должен быть длиннее 3 и меньше 12')
            if (!e.target.value) {
                setPasswordError('Вы забыли написать пароль')
            }
        } else {
            setPasswordError("")
        }
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
                default:
                    break
        }
    }

    return (
        <div className="app">
            <video autoPlay loop muted className="bg-video">
                <source src={movie} type="video/mp4"/>
            </video>
            <form>
                <div className="sign_form">
                    <h1>Авторизация</h1>
                    {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                    <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name='name' type="text" placeholder='Enter your name....'/>

                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Enter your email....'/>

                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password....'/>

                    <button onClick={handleSubmit} disabled={!formValid} type={"submit"}>submit</button>
                </div>
            </form>

        </div>
    )
}
export default App;

