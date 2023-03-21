import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../ui/Avatar";

export const ListContainer = styled.section`
  width: 90vw;
  margin: 2rem auto 0;
`;

export const ListWrapper = styled.ul`
  height: 70vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.b};
  }
`;

export const ListAvatar = styled(Avatar)`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
`;

export const ListUsername = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 700;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;

export const ListId = styled.span`
  font-size: 1.5rem;
  margin-left: auto;
`;

export const ListButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.b};
  padding: 1rem 2rem;

  font-size: 1rem;

  cursor: pointer;

  width: fit-content;
  margin: 2rem auto 0;
`;
