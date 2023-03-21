import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes/default";

type AppThemeProviderProps = {
  children: ReactNode;
};

const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
