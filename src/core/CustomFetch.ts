import { queryStringify } from "helpers/queryStringify"

enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: Method
  data?: any
  timeout?: number
  headers?: Record<string, string>
}

type OptionsWithoutMethod = Omit<Options, "method">

export class HTTPTransport {
  get = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(`${url}${queryStringify(options.data)}`, { ...options, method: Method.GET }, options.timeout)
  }
  post = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(url, { ...options, method: Method.POST }, options.timeout)
  }
  put = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(url, { ...options, method: Method.PUT }, options.timeout)
  }
  delete = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(url, { ...options, method: Method.DELETE }, options.timeout)
  }

  request(url: string, options: Options = { method: Method.GET }, timeout = 5000) {
    const { headers = {}, method, data } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method,url)

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (method === Method.GET || !data) {
        xhr.send()
      } else {
        xhr.send(data)
      }
    })
  }
}
