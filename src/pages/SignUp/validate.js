import * as yup from "yup";

export const schema = yup.object().shape({
    paper: yup.string().required('Campo obrigatório'),
    cpf: yup.string().max(11, 'Digite apenas números').required('Campo obrigatório'),
    firstName: yup.string().required('Campo Obrigatório'),
    lastName: yup.string().required('Campo Obrigatório'),
    bornDate: yup.string().required('Campo Obrigatório'),
    email: yup.string().email().required('Campo obrigatório'),
    code: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório').min(5, 'A senha deve ter, no mínimo, 5 caracteres'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "As senhas devem ser iguais").required('Campo obrigatório'),
  });