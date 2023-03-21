import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo />
      <S.HeaderLink to="/">
        <S.HeaderTitle>Github User List</S.HeaderTitle>
      </S.HeaderLink>
    </S.HeaderContainer>
  );
};

export default Header;
