import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGithub } from "../../../contexts/GithubProvider";
import { Repository, User } from "../../../contexts/types/Github";
import * as S from "./styles";

const UserDetails = () => {
  const [user, setUser] = useState<User | undefined>();
  const [repos, setRepos] = useState<Repository[]>([]);
  const { username } = useParams();
  const { getUser, getRepos } = useGithub();

  const handleGetUser = useCallback(async () => {
    if (!username) {
      return;
    }

    const [currentUser, repos] = await Promise.all([
      getUser(username),
      getRepos(username),
    ]);

    setUser(currentUser);
    setRepos(repos);
  }, [getUser, username]);

  useEffect(() => {
    handleGetUser();
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <S.UserDetailsContainer>
      <S.UserDetailsWrapper>
        <S.UserDetailsAvatar
          src={user.avatar_url}
          width={100}
          height={100}
          alt={user.login}
        />
        <S.UserDetailsInfoContainer>
          <S.UserDetailsInfoWrapper>
            <S.UserDetailsProperty>id:</S.UserDetailsProperty>
            <S.UserDetailsValue>{user.id}</S.UserDetailsValue>
          </S.UserDetailsInfoWrapper>
          <S.UserDetailsInfoWrapper>
            <S.UserDetailsProperty>login:</S.UserDetailsProperty>
            <S.UserDetailsValue>{user.login}</S.UserDetailsValue>
          </S.UserDetailsInfoWrapper>
          <S.UserDetailsInfoWrapper>
            <S.UserDetailsProperty>profile:</S.UserDetailsProperty>
            <S.UserDetailsValue>
              <a href={user.html_url} target="_blank">
                {user.html_url}
              </a>
            </S.UserDetailsValue>
          </S.UserDetailsInfoWrapper>
          <S.UserDetailsInfoWrapper>
            <S.UserDetailsProperty>created at:</S.UserDetailsProperty>
            <S.UserDetailsValue>
              {new Date(user.created_at).toLocaleDateString()}
            </S.UserDetailsValue>
          </S.UserDetailsInfoWrapper>
        </S.UserDetailsInfoContainer>
      </S.UserDetailsWrapper>

      <S.UserDetailsTable>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.id}</td>
              <td>{repo.name}</td>
              <td>
                <a href={repo.html_url} target="_blank">
                  {repo.full_name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </S.UserDetailsTable>
    </S.UserDetailsContainer>
  );
};

export default UserDetails;
