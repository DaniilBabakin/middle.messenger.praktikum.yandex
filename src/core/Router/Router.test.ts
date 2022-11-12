import MockedPathRouter from "tests/mockedPathRouter"

describe("core/Router/PathRouter", () => {
  const url = "/test.com"

  it("should change path", () => {
    global.window = Object.create(global.window)
    Object.defineProperty(window, "location", {
      value: {
        pathname: url,
      },
    })
    expect(window.location.pathname).toEqual(url)

    const router = new MockedPathRouter()
    router.go("/test.ru")

    expect(window.location.pathname).toEqual("/test.ru")
  })

  it("should set callback path", () => {
    const router = new MockedPathRouter()
    const callback = () => {
      console.log("callback invoked!")
    }

    router.use(url, callback)
    expect(router.getRoutes()[url]).toEqual(callback)
  })

  it("should call callback when go to url", () => {
    const router = new MockedPathRouter()

    const mockCallback = jest.fn()

    router.use(url, mockCallback)
    router.go(url)
    expect(mockCallback).toHaveBeenCalled()
  })
})
