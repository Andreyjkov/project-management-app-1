import Head from "next/head";
import SignIn from "../src/components/Auth/SignIn";
import s from "../styles/signin.module.scss";
import g from '../styles/global.module.css';

export default function Login() {
  return (
    <div className={g.container}>
      <Head>
        <title>login</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={s.main}>
        <h1>Login</h1>
        <SignIn />
      </main>
    </div>
  );
}
