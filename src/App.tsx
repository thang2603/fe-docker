import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/editor"} />} />
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
