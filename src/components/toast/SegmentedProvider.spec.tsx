import { render } from "@testing-library/react";
import SegmentedProvider from "./SegmentedProvider";
import Toast from "./Toast";
import Viewport from "./Viewport";

describe("<SegmentedProvider/>", () => {
    test("should render provider", () => {
        render(
            <SegmentedProvider>
                <Toast open>
                    Test    
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedProvider.Toast).toBeTruthy();
        expect(SegmentedProvider.Viewport).toBeTruthy();
        expect(SegmentedProvider.Counter).toBeTruthy();
    });
});