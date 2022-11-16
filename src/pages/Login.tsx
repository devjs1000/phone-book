import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../states/login.slice";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state: any) => state.login.isLogged);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);
  return (
    <Center
      h={"100vh"}
      pos={"fixed"}
      top={0}
      w={"100vw"}
      bgGradient={[
        "linear(to-t, black, blackAlpha.900)",
        "linear(to-r, blackAlpha.900, gray.900)",
        "linear(to-br, blackAlpha.900, blue.900)",
      ]}
      backdropFilter={"blur(100px)"}
    >
      <Box
        bg={"whiteAlpha.500"}
        rounded={"md"}
        p={8}
        w={{ base: "100%", md: "400px" }}
        pos={{
          base: "absolute",
          md: "relative",
        }}
        bottom={0}
        backdropFilter={"blur('100px)"}
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel w={"100%"}>Username</FormLabel>
              <Input
                bg={"blackAlpha.100"}
                onChange={handleChange("username")}
                value={values.username}
                type={"text"}
                w={"100%"}
              />
            </FormControl>
            <FormControl>
              <FormLabel w={"100%"}>Password</FormLabel>
              <Input
                bg={"blackAlpha.400"}
                onChange={handleChange("password")}
                value={values.password}
                type={"password"}
                w={"100%"}
              />
            </FormControl>
            <Button
              py={6}
              type={"submit"}
              bg={"blue.600"}
              w={"100%"}
              color={"white"}
            >
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
