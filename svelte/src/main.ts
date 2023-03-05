import App from "./App.svelte";

interface hydratedWindow extends Window {
  __COMP__: any;
  __DATA__: any;
  __ISLOGGEDIN__:boolean;
}

const app = new App({
  target: document.getElementById("app")!,
  hydrate: true,
  props: {
    component: (window as any as hydratedWindow).__COMP__ || "Index",
    data: (window as any as hydratedWindow).__DATA__,
    isLoggedIn: (window as any as hydratedWindow).__ISLOGGEDIN__
    // Instead of rendering the component with the data
    // I'm sending the data with the HTML response
    // and then initializing the component with the data client-side
    // rendering with the data server-side doesn't work
  },
});

export default app;
