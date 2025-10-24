import { render } from "@testing-library/react";
import Button from "../../components/Button";

test("renders button with label [button-test]", () => {
    const { getByText } = render(<Button onClick={() => { }}>abc</Button>);
    expect(getByText("abc")).toBeInTheDocument();
});
