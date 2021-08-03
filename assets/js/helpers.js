const getParams = () => {
  const url = window.location.search
  let key = ""
  return url.substring(1).split("=").reduce((acc, e, i) => {
    i++
    if (!(i % 2)) {
      acc[key] = e
    } else {
      acc[e] = ""
      key = e
    }
    return acc
  }, {})
}
