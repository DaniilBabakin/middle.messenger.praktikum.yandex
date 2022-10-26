export function checkResponse(res: XMLHttpRequest) {
  if (res.status !== 200) {
    throw Error(JSON.parse(res.responseText).reason)
  }
  return JSON.parse(res.responseText)
}
