import ApplicationContainer from './ApplicationContainer';
describe('<ApplicationContainer />', () => {
    test("should have expected encapsulated components", async () => {
        expect(ApplicationContainer.ContentContainer).toBeTruthy();
        expect(ApplicationContainer.NavbarRoot).toBeTruthy();
    });
});