export const login = (redirect: boolean) => {
  return {
    email: process.env.EMAIL,
    senha: process.env.PASSWORD,
    redirecionar: redirect,
  };
};
