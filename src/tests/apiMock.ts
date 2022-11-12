import { setupServer } from "msw/node"
import { rest } from "msw"

const baseUrl = "https://ya-praktikum.tech/api/v2"

const handlers = [
  rest.post(`${baseUrl}/auth/logout`, (_, res, ctx) => {
    console.log("Call logout endpoint")

    return res(ctx.status(200))
  }),
  rest.get(`${baseUrl}/auth/user`, (_, res, ctx) => {
    console.log("Call user endpoint")

    return res(ctx.status(200))
  }),
  rest.put(`${baseUrl}/user/profile/avatar`, (_, res, ctx) => {
    console.log("Call user endpoint")

    return res(ctx.status(200))
  }),
]

const server = setupServer(...handlers)

export default server
