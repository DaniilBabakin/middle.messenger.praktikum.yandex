import { setupServer } from "msw/node"
import { rest } from "msw"
import { BASE_URL } from "../constants/defaults"

const handlers = [
  rest.post(`${BASE_URL}/auth/logout`, (_, res, ctx) => {
    console.log("Call logout endpoint")

    return res(ctx.status(200))
  }),
  rest.get(`${BASE_URL}/auth/user`, (_, res, ctx) => {
    console.log("Call user endpoint")

    return res(ctx.status(200))
  }),
  rest.put(`${BASE_URL}/user/profile/avatar`, (_, res, ctx) => {
    console.log("Call user endpoint")

    return res(ctx.status(200))
  }),
]

const server = setupServer(...handlers)

export default server
