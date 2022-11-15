import type { ReactNode, ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraWrapper = ({ children }: Props): ReactElement => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

interface Props {
  children: ReactNode;
}

export default ChakraWrapper;
