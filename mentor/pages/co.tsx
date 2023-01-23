import Link from "next/link";
import { useState } from "react";
import FormInput from "../components/FormInput";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  const onChange = (e: { target: { name: any; value: any; }; }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="amk">
      <form onSubmit={handleSubmit}>
        <h1>Se Connecter</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link className="sign-up" href='/login'>Sign up !</Link>
        <button className="connect">Connection</button>
      </form>
      <a href="/"><h2 className="home">Home</h2></a>
    </div>
  );
};

export default Login;
