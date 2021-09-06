import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '../common/Button/Button';
import HeadLabel from '../common/HeadLabel/HeadLabel';
import InputField from '../common/FormControls/InputField/InputField';
import s from './Login.module.css';
import { requiredVC } from '../../utils/validators';


let requiredLogin = requiredVC('login');
let requiredPassword = requiredVC('password');

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.login__form}>
         <div className={`${s.login__email} ${s.login__element}`}>
            <Field component={InputField} type='text' name='email' placeholder='Email' validate={[requiredLogin]} showError={true} />
         </div>
         <div className={`${s.login__password} ${s.login__element}`}>
            <Field component={InputField} type='password' name='password' placeholder='Password' validate={[requiredPassword]} showError={true} />
         </div>
         <div className={`${s.login__rememberMe} ${s.login__element}`}>
            <Field component={InputField} type='checkbox' name='rememberMe' placeholder='Login' styles={{ width: 'auto' }} id='rememberMe' /><label for='rememberMe'>Remember me</label>
         </div>
         {(!props.error) ? null : <div className={`${s.login__commonError} ${s.login__element}`}>{props.error}</div>}
         {(!!props.captchaUrl) ? <img src={props.captchaUrl} /> : null}
         {(!!props.captchaUrl)
            ? <div className={`${s.login__element}`}><Field component={InputField} type='text' name='captcha' /></div>
            : null}
         <div className={`${s.login__signInButton} ${s.login__element}`}>
            <Button
               styles={{
                  color: '#309453',
                  border: '2px solid #309453',
                  width: '80px',
               }}
               onHover={{
                  backgroundColor: '#78E19D'
               }}
               text='Sign in'
            />
         </div>
      </form>
   );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

   const onLogin = (values) => {
      props.login(values.email, values.password, values.rememberMe, values.captcha);
   };

   return (
      <div className={s.login}>
         <HeadLabel text='Login' styles={{ fontSize: '26px', color: '#AB04BD' }} />
         <LoginReduxForm onSubmit={onLogin} captchaUrl={props.captchaUrl} />
      </div>
   );
};

export default Login;