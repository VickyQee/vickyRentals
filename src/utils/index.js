const response = (message, data = null, status = true) => ({
  message,
  data,
  status
})

const except = (obj, ...args) => {
  args.forEach(arg => {
    delete obj[arg]
  })
  return obj
}

module.exports = {
  response,
  except
}