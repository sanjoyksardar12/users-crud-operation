export function apiCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("api success")
    }, 1000);
  })
}
