import React, {PureComponent} from "react";

class FormLogin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    const {email, password} = this.state;

    return (
      <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
        {/* ERROR MESSAGE */}
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
        {/* SIGN-IN MESSAGE */}
        <div className="sign-in__message">
          <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
        </div>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              onChange={this.handleFieldChange}
              value={email} />
            <label className="sign-in__label visually-hidden" htmlFor="email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={this.handleFieldChange}
              value={password} />
            <label className="sign-in__label visually-hidden" htmlFor="password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    );
  }
}

export default FormLogin;
