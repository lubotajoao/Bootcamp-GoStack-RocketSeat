/**
 * Para criar usuário: name, email, password
 *
 * interface -> conjunto de um tipo de informação
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
  // techs: string[] -> outra forma de declarar tech, caso todos os seus elementos forem stings
}

export default function createUser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
