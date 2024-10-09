import Logo from '@/svgs/logo/page';
import { login } from './action'
import "./login.css";

export default function LoginPage() {
  return (
   <form className="loginForm">
      <div className="logo">
      <Logo /> 
      <h1>Login</h1>
      </div>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
    </form>
  );
}