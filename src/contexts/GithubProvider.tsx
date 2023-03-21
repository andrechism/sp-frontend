import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import axiosClient from "../vendors/axios";
import { GetList, Repository, User } from "./types/Github";

type GithubProviderProps = {
  children: ReactNode;
};

type GithubContextData = {
  listUsers: () => Promise<void>;
  getUser: (username: string) => Promise<User>;
  getRepos: (username: string) => Promise<Repository[]>;
  users: User[];
  isLoading: boolean;
};

const API_URL = 'https://sp-backend-c8hx.onrender.com/api'

const GithubContext = createContext<GithubContextData | undefined>(undefined);

const GithubProvider: FC<GithubProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const nextPageRef = useRef(`${API_URL}/users`);

  const handleListUsers = useCallback(async () => {
    setIsLoading(true);
    const { data } = await axiosClient.get<GetList>(nextPageRef.current);
    setUsers((prevUsers) => [...prevUsers, ...data.users]);
    nextPageRef.current = data.nextPage;
    setIsLoading(false);
  }, []);

  const handleGetCurrentUser = useCallback(async (username: string) => {
    setIsLoading(true);
    const { data } = await axiosClient.get<User>(
      `${API_URL}/users/${username}/details`
    );
    setIsLoading(false);
    return data;
  }, []);

  const handleGetCurrentUserRepos = useCallback(async (username: string) => {
    setIsLoading(true);
    const { data } = await axiosClient.get<Repository[]>(
      `${API_URL}/users/${username}/repos`
    );
    setIsLoading(false);

    return data;
  }, []);

  const state = {
    listUsers: handleListUsers,
    getUser: handleGetCurrentUser,
    getRepos: handleGetCurrentUserRepos,
    users,
    isLoading,
  } satisfies GithubContextData;

  useEffect(() => {
    handleListUsers();
  }, [handleListUsers]);

  return (
    <GithubContext.Provider value={state}>{children}</GithubContext.Provider>
  );
};

const useGithub = () => {
  const context = useContext(GithubContext);

  if (!context) {
    throw new Error("useGithub must be used within a GithubProvider");
  }

  return context;
};

export { GithubProvider, useGithub };
