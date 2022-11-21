import Layout from "./components/layout/Layout";
//import Layout from "../src/components/layout/Layout";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;
