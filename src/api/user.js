export function getLogin (query) {
  return $http.post({
    url: '/user',
    method: 'post',
    params: query,
  })
}