import { Link, useParams } from "react-router-dom";
import { useGithub } from "../../../contexts/GithubProvider";
import * as S from "./styles";

const List = () => {
  const { isLoading, users, listUsers } = useGithub();

  const params = useParams()

  return (
    <S.ListContainer>
      <S.ListWrapper>
        {users.map((user) => (
          <S.ListItem key={user.id}>
            <S.ListAvatar
              src={user.avatar_url}
              width={50}
              height={50}
              alt={user.login}
            />
            <S.ListUsername to={`/user/${user.login}`}>{user.login}</S.ListUsername>
            <S.ListId>{user.id}</S.ListId>
          </S.ListItem>
        ))}
        <S.ListButton onClick={listUsers}>{isLoading ? 'Loading...' : 'See more'}</S.ListButton>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

export default List;
