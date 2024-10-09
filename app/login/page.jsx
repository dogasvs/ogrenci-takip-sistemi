import Logo from '@/svgs/logo/page';
import { login } from './action'
import "./login.css";
import Github from '@/svgs/github/page';
import Google from '@/svgs/google/page';
import Facebook from '@/svgs/facebook/page';

export default function LoginPage() {
  return (
   <form className="loginForm">
      <div className="logo">
        <Logo /> 
        <h1>Login</h1>
      </div>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required placeholder='username@gmail.com' />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" required placeholder='Password' />
      <button formAction={login}>Log in</button>
      <p>Or Continue With</p>
      <div className="withSocialMedia">
        <Google />
        <Github />
        <Facebook />
      </div>
    </form>
  );
}