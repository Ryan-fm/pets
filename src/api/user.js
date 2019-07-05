export function getLogin (query) {
  return this.$http.post({
    url: '/user',
    method: 'post',
    params: query,
  })
}