import { InputHTMLAttributes } from "react";
import { BsEmojiGrin } from "react-icons/bs";
import { HiEmojiHappy } from "react-icons/hi";

type InputProps = {
  iconLeft?: () => JSX.Element;
  iconRight?: () => JSX.Element;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputRender() {
  const Input = ({ iconLeft, iconRight, ...rest }: InputProps) => {
    return (
      <>
        <div className="flex items-center rounded-lg w-1/4 border-2 border-solid border-gray-300 p-2 shadow-sm hover:shadow-md  focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
          {iconLeft && iconLeft()}
          <input type="text" {...rest} className="outline-none w-full" />
          {iconRight && iconRight()}
        </div>
      </>
    );
  };

  return (
    <>
      <h1>Design pattern</h1>

      <div>
        <Input
          placeholder="Digite seu nome"
          iconLeft={() => <HiEmojiHappy />}
          iconRight={() => <BsEmojiGrin />}
        />
      </div>
    </>
  );
}
