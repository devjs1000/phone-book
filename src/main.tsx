import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChakraWrapper from "./wrappers/ChakraWrapper";
import ReduxWrapper from "./wrappers/ReduxWrapper";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

const Main = () => {
  return (
    <StrictMode>
      <ChakraWrapper>
        <ReduxWrapper>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReduxWrapper>
      </ChakraWrapper>
    </StrictMode>
  );
};

root.render(<Main />);
