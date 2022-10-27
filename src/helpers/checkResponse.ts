export function checkResponse(res: XMLHttpRequest) {
  if (res.status !== 200) {
    throw Error(JSON.parse(res.responseText).reason)
  }
  if (res.responseText === "OK") {
    return true
  }
  return JSON.parse(res.responseText)
}
