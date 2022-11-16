import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Route from "./Route";
import './index.css';

const App = () => {
  const isLogged = useSelector((state: any) => state.login.isLogged);
  const navigate = useNavigate();

  useEffect(() => {
    const navigateUrl = isLogged ? "/" : "/login";
    navigate(navigateUrl);
  }, [isLogged]);

  return (
    <Box>
      <Nav />
      <Route />
    </Box>
  );
};

export default App;
