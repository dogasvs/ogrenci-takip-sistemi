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
        <h1>Giriş Yap</h1>
      </div>
      <label htmlFor="email">E-posta</label>
      <input id="email" name="email" type="email" required placeholder='username@gmail.com' />
      <label htmlFor="password">Şifre</label>
      <input id="password" name="password" type="password" required placeholder='*******' />
      <button formAction={login}>Giriş yap</button>
      <p>Ya da hesaplarla devam edin</p>
      <div className="withSocialMedia">
        <Google />
        <Github />
        <Facebook />
      </div>
    </form>
  );
}