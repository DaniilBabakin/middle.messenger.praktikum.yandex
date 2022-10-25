import { CoreRouter, Store, renderDOM } from "core"
import { getScreenComponent, Screens } from "helpers"
import { ROUTES } from "../../constants/routes"

const routes = [
  {
    path: ROUTES.Login,
    block: Screens.Login,
    shouldAuthorized: false,
    shouldGuest: true,
  },
  {
    path: ROUTES.SignUp,
    block: Screens.SignUp,
    shouldAuthorized: false,
    shouldGuest: true,
  },
  {
    path: ROUTES.Chat,
    block: Screens.Main,
    shouldAuthorized: true,
    shouldGuest: false,
  },
  {
    path: ROUTES.Profile,
    block: Screens.Profile,
    shouldAuthorized: true,
    shouldGuest: false,
  },
  {
    path: ROUTES.ProfileSettings,
    block: Screens.ProfileChangeValues,
    shouldAuthorized: true,
    shouldGuest: false,
  },
  {
    path: ROUTES.ChangePassword,
    block: Screens.ProfileChangePassword,
    shouldAuthorized: true,
    shouldGuest: false,
  },
  {
    path: "*",
    block: Screens.NotFound,
    shouldAuthorized: false,
  },
]

export function initRouter(router: CoreRouter, store: Store<AppState>) {
  routes.forEach((route) => {
    router.use(route.path, () => {
      const isAuthorized = Boolean(store.getState().user)
      const currentScreen = Boolean(store.getState().screen)
      console.log("isAuthorized", isAuthorized)
      if (isAuthorized && route.shouldGuest) {
        window.history.pushState({}, "", "/messenger")
        console.log("ROUTE", route)
        console.log("Redirect to MAIN")
        store.dispatch({ screen: Screens.Main })
        return
      }

      if (isAuthorized || !route.shouldAuthorized) {
        store.dispatch({ screen: route.block })
        return
      }

      if (!currentScreen) {
        console.log("go to login")
        store.dispatch({ screen: Screens.Login })
      }
    })
  })

  store.on("changed", (prevState, nextState) => {
    if (!prevState.appIsInited && nextState.appIsInited) {
      router.start()
    }
    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen)
      renderDOM(new Page({}))
      document.title = `${Page.componentName}`
    }
  })
}
