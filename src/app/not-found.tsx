import Link from "next/link";
import * as S from "../styles/errors";
import ErrorButton from "@/hooks/error-button";
export default function notFound() {
  return (
    <S.ErrorContainer>
      <S.ErrorTitle>Opss, houve um error</S.ErrorTitle>
      <span>Error 404 página não encontrada</span>

      <S.ErrorButton>
        <Link href="/">
          <ErrorButton />
        </Link>
      </S.ErrorButton>
    </S.ErrorContainer>
  );
}
