var auth = {
  x: 2,
  token: localStorage.getItem('authToken'),
  login(authToken, name, email) {
    // Set the authToken and reroute to index page
    auth.name = name
    this.token = authToken
    localStorage.authToken = authToken
    localStorage.name = name
    if (typeof this.onLogin == 'function') this.onLogin()
  },
  logout() {
    // Unset the authToken and reroute to index page
    this.token = ''
    this.name = ''
    localStorage.authToken = this.token
    localStorage.name = this.name
    if (typeof this.onLogin == 'function') this.onLogout()
  },
}

auth.login = auth.login.bind(auth)
auth.logout = auth.logout.bind(auth)

module.exports = auth
