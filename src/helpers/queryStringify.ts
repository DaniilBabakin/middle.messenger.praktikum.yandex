type StringIndexed = Record<string, any>

function objToString(obj: any) {
  let objString = ""
  const recursion = (obj1: any) => {
    Object.entries(obj1).map(([key, value]) => {
      if (typeof obj1[key] === "object") {
        objString = `${objString}[${key}]`
        return recursion(obj1[key])
      }

      return (objString = `${objString}[${key}]=${value}`)
    })
  }
  recursion(obj)
  return objString
}

export function queryStringify(data: StringIndexed): string | never {
  if (typeof data !== "object") {
    throw new Error("input must be an object")
  }
  return `${Object.entries(data)
    .map(([key, val]) => {
      if (Array.isArray(val)) {
        return val.reduce((acc, value, index) => {
          if (index + 1 === val.length) {
            return (acc = `${acc}${key}[${index}]=${value}`)
          }
          return (acc = `${acc}${key}[${index}]=${value}&`)
        }, "")
      }

      if (typeof val === "object") {
        return `${key}${objToString(val)}`
      }
      return `${key}=${val}`
    })
    .join("&")}`
}

export default queryStringify
