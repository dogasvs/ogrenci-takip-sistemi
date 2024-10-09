import { signUp } from "@/actions/auth";
import "./signup.css";
import Github from '@/svgs/github/page';
import Google from '@/svgs/google/page';
import Facebook from '@/svgs/facebook/page';
import Logo from "@/svgs/logo/page";

export default function SignUpPage() {
  return (
       <form className="signUpForm">
        <div className="logo">
          <Logo /> 
          <h1>Kayıt Ol</h1>
        </div>
        <label htmlFor="firstName">Adınız</label>
        <input type="text" name="firstname" placeholder="adınız" /> <br />
        <label htmlFor="lastName">Soyadınız </label>
        <input type="text" name="lastname" placeholder="soyadınız" />  <br />
        <label htmlFor="email">E-posta Adresiniz</label>
        <input type="email" name="email" placeholder="username@gmail.com" />  <br />
        <label htmlFor="password">Şifreniz</label>
        <input type="password" name="password" placeholder="********" />
        <button formAction={signUp}>Kayıt Ol</button>
        <p>Ya da hesaplarla devam edin</p>
        <div className="withSocialMedia">
          <Google />
          <Github />
          <Facebook />
        </div>
     </form>
  )
}