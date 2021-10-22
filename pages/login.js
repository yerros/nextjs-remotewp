import React, { useState, useRef } from "react";
import Head from "next/head";
import { toast } from "react-toastify";
import Button from "../components/button";
import FormGroup from "../components/formgroup";
import InputGroup from "../components/input";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

function SimpleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = email;
    const enteredPassword = password;

    // optional: Add validation
    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      toast.success("Succefully Loggedin");
      setTimeout(function () {
        router.replace("/");
      }, 1000);
    } else {
      toast.error("Username atau Password yang anda masukkan salah");
    }
  }
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="px-8 py-6 mx-auto mt-20 rounded-sm shadow w-4/3 lg:w-1/4 md:w-1/2">
        <form
          className="w-full mx-auto text-center rounded-sm shadow-sm"
          onSubmit={submitHandler}
        >
          <div className="">
            <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
            <p className="mt-3 text-gray-800">
              New to this Planet?
              <a href="#" className="m-2 text-blue-400">
                Sign up
              </a>
            </p>
          </div>
          <div className="mt-12">
            <FormGroup>
              <InputGroup
                type="email"
                name="email"
                onChange={setEmail}
                placeholder="Your email address"
              />
            </FormGroup>
            <FormGroup>
              <InputGroup
                type="password"
                name="password"
                onChange={setPassword}
                placeholder="Your password"
              />
            </FormGroup>
            <FormGroup>
              <Button text="Log In" submit full />
            </FormGroup>
            <div className="text-right">
              <a href="#" className="text-blue-400">
                Forgot your password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SimpleLogin;
