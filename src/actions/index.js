export function trigger(type) {
  return payload => ({ type, payload })
}

export function triggerError(type, message) {
  return error => {
    return trigger(type)(message)
  }
}
