export function checkResponse(res: XMLHttpRequest) {
  if (res.status !== 200) {
    console.error(JSON.parse(res.responseText).reason)
    return res
  }
  if (res.responseText === "OK") {
    return true
  }
  try {
    return JSON.parse(res.responseText)
  } catch (e) {
    throw e
  }
}
