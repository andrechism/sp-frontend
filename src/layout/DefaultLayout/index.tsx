import { FC, ReactNode } from "react";
import Header from "../../components/sections/Header";
import * as S from "./styles";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <S.MainWrapper>{children}</S.MainWrapper>
    </>
  );
};

export default DefaultLayout;
