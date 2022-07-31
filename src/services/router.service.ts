// Using window to programmaticaly change location will cause a page refresh.
// This service provides ways to programatically manipulate the app route
// without causing a refresh.

class RouterService {
  // eslint-disable-next-line class-methods-use-this
  public navigateTo(path: string): void {
    window.history.pushState({}, path, window.location.origin + path);

    // "popstate" doesn't fire on window.history.pushState()
    // but it is necessary for the router to work
    // didn't create a custom event for routing in order to keep the
    // back navigation native browser functionality
    window.dispatchEvent(new Event('popstate'));
  }
}

const routerService = new RouterService();

export default routerService;
