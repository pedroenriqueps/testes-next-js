"use client";
import { StyleButton } from "@/hooks/error-button/style";
import { useEffect } from "react";
import * as S from "../styles/errors";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <S.ErrorContainer>
      <S.ErrorTitle>Houve um error inesperado!</S.ErrorTitle>
      <S.ErrorButton>
        <button onClick={() => reset()}>Recarregar página</button>
      </S.ErrorButton>
      <Link href="/">Ir para home</Link>
    </S.ErrorContainer>
  );
}
