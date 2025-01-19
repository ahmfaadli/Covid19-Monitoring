import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle/Index";
import Layout from "./Layout/Layout";
import IndonesiaPage from "./pages/Indonesia";
import data from "./utils/constants/provinces";
import DataContext from "./Context/DataContext";
import { useState } from "react";
import ProvinsiPage from "./pages/Provinsi";
import AboutPage from "./pages/About";


function App() {

  const [province, setProvince] = useState(data);

  const valueContext = {
    province,
    setProvince
  };

  return(
      <ThemeProvider theme={theme}>
        <DataContext.Provider value={valueContext}>
        <GlobalStyle />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/Indonesia" element={<IndonesiaPage />}></Route>
              <Route path="/Provinsi" element={<ProvinsiPage />}></Route>
              <Route path="/About" element={<AboutPage />}></Route>
            </Routes>
          </Layout>
        </DataContext.Provider>
      </ThemeProvider>  
  );
}

export default App;
