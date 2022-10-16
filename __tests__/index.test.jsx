// __tests__/index.test.jsx

import { render } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("카테고리 메뉴가 렌더링 되어야한다.", () => {
    const { getByRole } = render(<Home />);
    const navigation = getByRole("navigation", {
      name: /fastcampus/g,
    });

    expect(navigation).toBeInTheDocument();
  });

  it("배너가 렌더링 되어야한다.", () => {
    const { getByRole } = render(<Home />);
    const banner = getByRole("banner", {
      name: "",
    });

    expect(banner).toBeInTheDocument();
  });

  it("강의 목록이 렌더링 되어야한다.", () => {
    const { getByTitle } = render(<Home />);

    const lectureList = getByTitle("lectureList", {
      name: "",
    });

    expect(lectureList).toBeInTheDocument();
  });
});
