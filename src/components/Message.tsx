import React, { useState } from "react";
import "./style.scss";

interface MessageProps {
  msg?: string;
}

interface User {
  name: string;
  lastname: string;
}

const Message: React.FC<MessageProps> = ({ msg }) => {
  const [user, setUser] = useState<User | null>(null);

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    setUser({
      name: "User",
      lastname: "Lastname",
    });
  };

  return (
    <>
      <p>
        Hola {user?.name} {user?.lastname}
      </p>
      {msg && <p>{msg}</p>}
      <button onClick={onClick}>Click me</button>
      <p>
        <strong>Repo:</strong>
        <a href="https://github.com/N3zTho/React-Typescript-Webpack-Babel">
          Github
        </a>
      </p>
      <br />
      <br />
      <img src="/images/avatar2.png" />
    </>
  );
};

export default Message;
