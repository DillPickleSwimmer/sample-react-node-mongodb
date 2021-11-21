import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

import RootWrapper from "../../../test/RootWrapper.react";
import { RecoilObserver } from "../../../test/RecoilObserver";

import App from "../App.react";
import { testData } from "../../state/example";

fetchMock.enableMocks();

describe("The app state should", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("change when the data loads", async () => {
    const onChange = jest.fn();

    fetch.mockResponseOnce(JSON.stringify({ message: "DATA" }));

    render(
      <RootWrapper>
        <RecoilObserver node={testData} onChange={onChange} />
        <App />
      </RootWrapper>
    );

    // const component = screen.getByTestId("app_root");
    // fireEvent.change(component, { target: { value: "Recoil" } });

    const component = screen.getByTestId("data_result");
    await waitFor(() => expect(component.textContent).toBe("DATA"));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(""); // Initial state on render.
    expect(onChange).toHaveBeenCalledWith("DATA"); // New value on change.
  });
});
