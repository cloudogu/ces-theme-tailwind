import { render } from "@testing-library/react";
import Toast from "./Toast";
import Title from "./Title";
import Viewport from "./Viewport";
import SegmentedProvider from "./SegmentedProvider";

describe("<Title/>", () => {
    test("should render title", () => {
        const { queryByTestId } = render(
            <SegmentedProvider>
                <Toast open>
                    <Title data-testid="title-test">Title</Title>
                </Toast>
                <Viewport />
            </SegmentedProvider>
        );

        expect(queryByTestId("title-test")).toBeTruthy();
    });
});
