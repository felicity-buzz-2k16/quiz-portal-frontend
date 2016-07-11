var auth = {
  token: localStorage.getItem('authToken'),
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  login(authToken, name, email) {
    // Set the authToken and reroute to index page
    this.name = name
    this.token = authToken
    this.email = email
    localStorage.authToken = authToken
    localStorage.name = name
    localStorage.email = email
    if (typeof this.onLogin == 'function') this.onLogin()
  },
  logout() {
    // Unset the authToken and reroute to index page
    this.token = ''
    this.name = ''
    this.email = ''
    localStorage.authToken = this.token
    localStorage.name = this.name
    localStorage.email = this.email
    if (typeof this.onLogin == 'function') this.onLogout()
  },
}

auth.login = auth.login.bind(auth)
auth.logout = auth.logout.bind(auth)

module.exports = auth
