"use client";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import * as S from "./style";
import { yupResolver } from "@hookform/resolvers/yup";

type formProps = {
  password: string;
  confirmPassword: string;
};

const schema = Yup.object().shape({
  password: Yup.string().required("Senha obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "As senhas devem ser iguais")
    .required("Confirmação de senha obrigatória"),
});

export default function FormYup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm<formProps>({ mode: "all", resolver: yupResolver(schema) });

  const handleForm = (data: formProps) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <S.ContainerForm>
        <span className="absolute text-red-500 top-0 left-2 p-4 font-bold">
          para melhor experiência abra o console
        </span>
        <h1 className="font-bold text-2xl text-center text-slate-400 mb-6">
          Yup validation
        </h1>
        <form onSubmit={handleSubmit(handleForm)} className="flex flex-col ">
          <S.Input
            type="password"
            {...register("password")}
            placeholder="Digite sua senha"
          />
          {errors.password && (
            <p className="text-red-500 text-sm font-bold">
              {errors.password.message}
            </p>
          )}

          <S.Input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirme sua senha"
          />
          {errors.confirmPassword && (
            <p className="text-red-500  text-sm font-bold">
              {errors.confirmPassword.message}
            </p>
          )}

          <S.Button type="submit" disabled={isLoading}>
            {isLoading && "Carregando"}Login
          </S.Button>
        </form>
      </S.ContainerForm>
    </>
  );
}
