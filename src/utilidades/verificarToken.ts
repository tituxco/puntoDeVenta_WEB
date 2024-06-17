import jwt from "jsonwebtoken";

export function verificarToken(token:string) {
  try {
    const decoded = jwt.verify(token, "secreto");
    return decoded;
  } catch (error) {
    throw new Error("Token invalido " + error);
  }
}
