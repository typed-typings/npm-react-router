# Typings-React-Router

This is typings for thee [react-router](https://github.com/reactjs/react-router)

It's highly suggested to install with [typings](https://github.com/typings/typings) definition manager.
Use the command `typings install react-router --save`.

You're code should look pretty much the same the javascript with one exception.
When a component is used with a `Route` component it injects several property values.
To type this the `IInjectedProps` interface has all the properties defined that injecting will add.

To use it extend your current Property interface with `IInjectedProps`.

```typescript
import React from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IInjectedProps } from 'react-router';

class User extends React.Component<IInjectedProps,{}> {
  render() {
    let { userID } = this.props.params
    let { query } = this.props.location
    let age = query && query["showAge"] ? '33' : ''

    return (
      <div className="User">
        <h1>User id: {userID}</h1>
        {age}
      </div>
    )
  }
}

const HelloMessage = (props) => <div>Hello {props.params.name}</div>;

class App extends React.Component<React.Props<{}>,{}> {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/user/bob" activeClassName="active">Bob</Link></li>
          <li><Link to={{ pathname: '/user/bob', query: { showAge: true } }} activeClassName="active">Bob With Query Params</Link></li>
          <li><Link to="/user/sally" activeClassName="active">Sally</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="user/:userID" component={User} />
      <Route path="message/:name" component={HelloMessage}/>
    </Route>
  </Router>
), document.getElementById('example'));
```

This is quite a large api so I might have missed some of the details.
If there is something that should work or documentation that's incorrect please don't hesistate to post an issue.