var preactRoute = require('preact-router').route;

export function getPath (path) {
  if (path.startsWith('http:') || path.startsWith('https:')) return path;
  else if (path[0] == '/') return `${PUBLIC_PATH}${path.substr(1)}`
  else return `${PUBLIC_PATH}${path}`
}

export function route (path) {
  return preactRoute(getPath(path))
}
