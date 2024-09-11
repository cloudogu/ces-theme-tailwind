import mapping from "../../../../config/colormapping.json";
import colorscheme from "../../../../config/colorscheme.json";
import {isAccessible} from "get-contrast";

function extractFullColor(colorName: string): { [key: string]: string }[] {
    return Object
        .entries((mapping as any)[colorName])
        .map(entry =>
            ({
                name: `${colorName}-${entry[0]}`.replace("-DEFAULT", ""),
                color: (colorscheme as any)[colorName][(entry as any)[1]],
                colorName: `${colorName}-${entry[1]}`,
            })
        )
        .reduce((a, b) => {
            a[b.name] = b.color;
            return a;
        }, {} as any);
}

function extractColors(): { [key: string]: string } {
    return {
        ...extractFullColor("brand"),
        ...extractFullColor("danger"),
        ...extractFullColor("success"),
        ...extractFullColor("warning"),
        ...extractFullColor("neutral"),
    } as any;
}

describe('colormapping', () => {
    const colors = extractColors();
    const availableColorTypes = [
        "brand",
        "danger",
        "success",
        "warning",
        "neutral"
    ];

    availableColorTypes.forEach(colorName => {
        // TODO: Re-enable when color contrast rules are clarified (philipp)
        test("", async () => {
            
        });

        // Test contrast to itself
        // test.each([
        //     ["-stronger", "-weak"],
        //     ["-stronger", "-weaker"],
        //     ["-strong", "-weak"],
        //     ["-strong", "-weaker"],
        //     ["", "-weaker"],
        // ])(`Test ${colorName}%s is accessible to ${colorName}%s`, async (a: string, b: string) => {
        //     expect(isAccessible(colors[`${colorName}${a}`], colors[`${colorName}${b}`])).toEqual(true);
        // });

        // Test contrast to all other colors
        // availableColorTypes.filter(a => a !== colorName).forEach(anotherColorName => {
        //     test.each([
        //         ["-stronger", "-weak"],
        //         ["-stronger", "-weaker"],
        //         ["-strong", "-weak"],
        //         ["-strong", "-weaker"],
        //         ["", "-weaker"],
        //     ])(`Test ${colorName}%s is accessible to ${anotherColorName}%s`, async (a: string, b: string) => {
        //         console.log(`${colors[`${colorName}${a}`]}-${colors[`${anotherColorName}${b}`]}`);
        //         expect(isAccessible(colors[`${colorName}${a}`], colors[`${anotherColorName}${b}`])).toEqual(true);
        //     });
        // });
    })
});