import {render} from "@testing-library/react";
import {createRef, FC} from "react";
import {useVariantContext, Variant} from "./Context";
import SegmentedDialog from "./SegmentedDialog";

describe("<Dialog/>", () => {
    test("should render trigger Button", () => {
        const refButton = createRef<HTMLButtonElement>();

        render(
            <SegmentedDialog>
                <SegmentedDialog.Trigger ref={refButton}>TestButton</SegmentedDialog.Trigger>
            </SegmentedDialog>
        )

        expect(refButton.current).toBeTruthy();
        expect(refButton.current).toBeInTheDocument();
    });

    test("should have expected sub components", async () => {
        expect(SegmentedDialog.Trigger).toBeTruthy();
        expect(SegmentedDialog.Portal).toBeTruthy();
        expect(SegmentedDialog.Content).toBeTruthy();
        expect(SegmentedDialog.Close).toBeTruthy();
    });

    test.each([
        ["danger"],
        ["standard"],
    ])('test variant %s', async (variant: string) => {
        const TestComponent: FC<{ expVariant: Variant }> = ({expVariant}) => {

            expect(useVariantContext).not.toThrow();
            const variant = useVariantContext();

            expect(variant).toBe(expVariant);

            return <></>;
        };

        render(
            <SegmentedDialog variant={variant as Variant}>
                <TestComponent expVariant={variant as Variant}/>
            </SegmentedDialog>
        );
    });
});