enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: METHOD
  data?: any
  timeout?: number
  headers?: Record<string, string>
}

type OptionsWithoutMethod = Omit<Options, "method">

function queryStringify(data: {}) {
  return `?${Object.entries(data)
    .map(([key, val]) => `${key}=${val}`)
    .join("&")}`
}
export class HTTPTransport {
  get = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(url, { ...options, method: METHOD.GET }, options.timeout)
  }
  post = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(url, { ...options, method: METHOD.POST }, options.timeout)
  }
  put = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(url, { ...options, method: METHOD.PUT }, options.timeout)
  }
  delete = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(url, { ...options, method: METHOD.DELETE }, options.timeout)
  }

  request(url: string, options: Options = { method: METHOD.GET }, timeout = 5000) {
    const { headers = {}, method, data } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, method === METHOD.GET && !!data ? `${url}${queryStringify(data)}` : url)

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

      if (method === METHOD.GET || !data) {
        xhr.send()
      } else {
        xhr.send(data)
      }
    })
  }
}
