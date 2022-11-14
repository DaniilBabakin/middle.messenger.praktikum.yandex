import { BASE_URL } from "../constants/defaults"
import { HTTPTransport } from "./CustomFetch"

describe("core/HTTPTransport", () => {
  it("should perform POST request", async () => {
    const fetch = new HTTPTransport(BASE_URL)
    const result = await fetch.post("/auth/logout")
    expect(result.status).toEqual(200)
  })
  it("should perform GET request", async () => {
    const fetch = new HTTPTransport(BASE_URL)
    const result = await fetch.get("/auth/user")
    expect(result.status).toEqual(200)
  })
  it("should perform PUT request", async () => {
    const fetch = new HTTPTransport(BASE_URL)
    const result = await fetch.put("/user/profile/avatar")
    expect(result.status).toEqual(200)
  })
})
