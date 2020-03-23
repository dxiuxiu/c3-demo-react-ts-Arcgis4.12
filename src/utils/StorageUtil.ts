/**
 * @author duxx
 */
export default {
  setLocalStorage: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  getLocalStorage: (key) => {
    const result = window.localStorage.getItem(key)
    if (result) {
      return JSON.parse(result!)
    }
    return null
  },
  delLocalStorage: (key) => {
    return new Promise((resolve) => {
      window.localStorage.removeItem(key)
      resolve({'isDeleted': true})
    })
  },
  delAllLocalStorage: () => {
    return new Promise((resolve) => {
      window.localStorage.clear()
      resolve({'isDeleted': true})
    })
  },
}