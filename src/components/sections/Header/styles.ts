import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../ui/Logo";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    box-shadow: ${({ theme }) => theme.effects.boxShadow};
    height: 4rem;
    padding: 0 2rem;
`

export const HeaderTitle = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
`

export const HeaderLink = styled(Link)`
    text-decoration: none;
`

export const HeaderLogo = styled(Logo)`
    margin-right: 1rem;
`