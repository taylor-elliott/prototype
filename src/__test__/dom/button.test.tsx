import { render } from "@testing-library/react";
import Button from "../../components/Button";

test("renders button with label [button-test]", () => {
    const { getByText } = render(<Button label="abc" />);
    expect(getByText("abc")).toBeInTheDocument();
});
