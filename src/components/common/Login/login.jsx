import React from 'react';
import { useForm } from "react-hook-form";
import s from './FormControlLogin.module.css'
import  { login }  from '../../../redux/auth-reducer';
// import {connect} from 'react-redux'




const LoginForm = () => {

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur",

    });
    
    const onSubmit = (data) => {
        debugger
    //    alert((data.email), (data.password), (data.rememberMe));
    login(data.email, data.password, data.rememberMe) 
    // hello(data.email)
    reset();
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor=""> 
                Email:
                <input className={errors?.email ? s.blue : null}
                {...register('email', {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 симвлов'
                    }
                })}
                 placeholder={"email"}
                />
                </label>
            </div>
            <div>
                {errors?.email && <p>{errors?.email.message || 'Error'}</p>}
            </div>
            <div>
                <label htmlFor=""> 
                Password:
                <input className={errors?.password ? s.blue : null}
                {...register('password', {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 5,
                        message: 'Минимум 8 симвлов'
                    }
                })}
                 placeholder={"password"}
                />
                </label>
            </div>
            <div>
                {errors?.password && <p>{errors?.password.message || 'Error'}</p>}
            </div>
            <div>
                <label>rememberMe</label>
                <input 
                  {...register('rememberMe')}
                type="checkbox" />
            </div>
            <div>
                <button type='submit' disabled={!isValid}>Login</button>
            </div>

        </form>
    )
}      
// const mapStateToProps = (state) ({
//     isAuth: state.auth.isAuth
// })

//  connect(null, (login))(LoginForm)

const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm  />
    </div>
}


export default Login