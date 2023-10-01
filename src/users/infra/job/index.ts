export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3,
    repeat: {
      every: 1,
      limit: 100,
    },
    lifo: true,
  },
  async handle({ data }) {
    const { user } = data;

    console.log({
      from: 'Mateus Sousa <contato@sousaprogramador.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo a DIO.`,
    });
  },
};
