import { Meta } from "@storybook/react";

const meta: Meta<any> = {
    title: "CES Theme/Text elements",
};

const Template = (args: any) => {
    return (
        <>
            <article>
                <h5>Overview of different text elements</h5>
                <section className="pb-6">
                    <h6>Small default text</h6>
                    <p className="desktop:text-desktop-small mobile:h-mobile-small">
                        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <strong>laboris nisi</strong> ut
                        aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </section>
                <section className="pb-6">
                    <h6>Regular paragraphs</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi
                        consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi
                        consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </section>
                <section className="pb-6">
                    <h6>Labels</h6>
                    <form>
                        <div className="pb-1">
                            <label htmlFor="lfname">Vorname:</label>
                            <input className="border mx-2 px-2" id="lfname" name="fname" type="text" />
                        </div>
                        <div>
                            <label htmlFor="lfemployee">Mitarbeiter:</label>
                            <input className="mx-2" id="lfemployee" name="checkEmployee" type="checkbox" />
                        </div>
                    </form>
                </section>
                <section className="pb-6">
                    <h6>Fieldset Legend</h6>
                    <form>
                        <fieldset>
                            <legend>Choose your programming language</legend>

                            <input className="mr-1" type="radio" id="java" name="lang" value="J" />
                            <label htmlFor="java">Java</label>
                            <br />

                            <input className="mr-1" type="radio" id="go" name="lang" value="G" />
                            <label htmlFor="go">Golang</label>
                            <br />

                            <input className="mr-1" type="radio" id="python" name="lang" value="P" />
                            <label htmlFor="python">Python</label>
                        </fieldset>
                    </form>
                </section>
            </article>
        </>
    );
};

export const Text = Template.bind({}) as unknown as { args: any };

export default meta;
