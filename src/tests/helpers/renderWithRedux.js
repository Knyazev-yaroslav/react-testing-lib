import { render } from "@testing-library/react";
import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";

export const renderWithRedux = (component, inititalState) => {
  const store = createReduxStore(inititalState);
  return render(<Provider store={store}>{component}</Provider>);
};
