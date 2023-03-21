import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GithubProvider } from "./contexts/GithubProvider";
import AppThemeProvider from "./global/styles/AppThemeProvider";
import GlobalStyle from "./global/styles/GlobalStyles";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages";
import PageNotFound from "./pages/404";
import UserPage from "./pages/user";

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <GithubProvider>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/:username" element={<UserPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </GithubProvider>
    </AppThemeProvider>
  );
}

export default App;
