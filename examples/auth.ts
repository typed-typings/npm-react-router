export = {
  login(email?: any, pass?: any, cb?: any) {
    cb = arguments[arguments.length - 1];
    if (localStorage['token']) {
      if (cb) {
        cb(true);
      }
      this.onChange(true);
      return;
    }
    pretendRequest(email, pass, (res: any) => {
      if (res.authenticated) {
        localStorage['token'] = res.token;
        if (cb) {
          cb(true);
        }
        this.onChange(true);
      } else {
        if (cb) {
          cb(false);
        }
        this.onChange(false);
      }
    })
  },

  getToken() {
    return localStorage['token']
  },

  logout(cb?: any) {
    delete localStorage['token']
    if (cb) {
      cb();
    }
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage['token']
  },

  onChange() { }
};

function pretendRequest(email: any, pass: any, cb: any) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      });
    } else {
      cb({ authenticated: false });
    }
  }, 0);
}
