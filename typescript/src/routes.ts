import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "lubota@lubota.com",
    password: "828938",
    techs: [
      "NodeJS",
      "ReactJS",
      "React Native",
      { title: "JavaScript", experience: 100 },
    ],
  });

  return response.json({ message: "Salut le monde!!!" });
}
