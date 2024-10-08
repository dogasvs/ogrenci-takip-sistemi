import { signUp } from "@/actions/auth";

export default function SignUpPage() {
  return (
    <form action={signUp}>
      <input type="text" name="firstname" placeholder="adınız" /> <br />
      <input type="text" name="lastname" placeholder="soyadınız" />  <br />
      <input type="email" name="email" placeholder="email" />  <br />
      <input type="password" name="password" placeholder="********" />
      <button>kayıt ol</button> 
    </form>
  )
}