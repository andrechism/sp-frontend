import styled from "styled-components";
import Avatar from "../../ui/Avatar";

export const UserDetailsContainer = styled.section`
  width: 90vw;
  margin: 2rem auto 0;
  padding: 2rem;
`;

export const UserDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDetailsAvatar = styled(Avatar)`
  margin-right: 2rem;
`;

export const UserDetailsInfoContainer = styled.div``;

export const UserDetailsInfoWrapper = styled.div``;

export const UserDetailsProperty = styled.span`
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 700;
`;

export const UserDetailsValue = styled.span`
  font-size: 1.25rem;
`;

export const UserDetailsTable = styled.table`
  margin: 2rem auto 0;
  th {
    text-transform: uppercase;
  }
`;
