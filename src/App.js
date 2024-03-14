import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { routes } from "./Routes";
import Test from "./Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout children={route.element} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
