import { HashRouter, Route, Routes } from "react-router-dom";
import { GithubProvider } from "./contexts/GithubProvider";
import AppThemeProvider from "./global/styles/AppThemeProvider";
import GlobalStyle from "./global/styles/GlobalStyles";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages";
import UserPage from "./pages/user";

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <GithubProvider>
        <HashRouter>
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/:username" element={<UserPage />} />
            </Routes>
          </DefaultLayout>
        </HashRouter>
      </GithubProvider>
    </AppThemeProvider>
  );
}

export default App;
