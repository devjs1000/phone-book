import type { ReactNode, ReactElement } from "react";
import { Provider } from "react-redux";
import store from "../states/store";
const ReduxWrapper = ({ children }: Props): ReactElement => {
  return <Provider store={store}>{children}</Provider>;
};

interface Props {
  children: ReactNode;
}

export default ReduxWrapper;
