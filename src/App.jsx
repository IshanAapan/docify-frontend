import "./assets/styles/global.css";
import { AuthContextProvider } from "./context/AuthProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </>
  );
};
export default App;
