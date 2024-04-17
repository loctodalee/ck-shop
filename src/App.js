import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import BannerLayout from "./components/Layouts/BannerLayout";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout Banner={route.Banner}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
