import { Box } from "@chakra-ui/react";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Route from "./route";

const App = () => {
  const isLogged = useSelector((state: any) => state.login.isLogged);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const navigateUrl = isLogged ? "/" : "/login";
    navigate(navigateUrl);
  }, [isLogged]);

  return (
    <Box>
      <Route />
    </Box>
  );
};

export default App;
