export function queryStringify(data: {}) {
    return `?${Object.entries(data)
      .map(([key, val]) => `${key}=${val}`)
      .join("&")}`
  }
