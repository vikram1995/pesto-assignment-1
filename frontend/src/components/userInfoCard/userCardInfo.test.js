import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import UserInfoCard from "./userInfoCard";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
    act(() => {
      render(<UserInfoCard name={"vikram"} />, container);
    });
    expect(container.textContent).toBe("vikram");
  
    act(() => {
      render(<UserInfoCard name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");
  
    act(() => {
      render(<UserInfoCard name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
  });