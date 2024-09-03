import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("버튼이 제대로 작동하고 있는지 테스트합니다.", () => {
  render(<App />);

  const button = screen.getByRole("link", { name: "change to blue!" });
  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button.textContent).toBe("change to red!");
});
