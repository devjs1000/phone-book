import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Center p={6}>
      <Spinner size="lg" />
    </Center>
  );
};

export default Loader;
