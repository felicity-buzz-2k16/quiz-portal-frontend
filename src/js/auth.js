var auth = {
  x: 2,
  token: localStorage.getItem('authToken'),
  login(authToken) {
    // Set the authToken and reroute to index page
    this.token = authToken
    localStorage.authToken = authToken
    if (typeof this.onLogin == 'function') this.onLogin()
  },
  logout() {
    // Unset the authToken and reroute to index page
    this.token = ''
    localStorage.authToken = this.token
    if (typeof this.onLogin == 'function') this.onLogout()
  },
}

auth.login = auth.login.bind(auth)
auth.logout = auth.logout.bind(auth)

module.exports = auth
