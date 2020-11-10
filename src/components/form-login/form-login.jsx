import React, {PureComponent, createRef} from "react";
import {validFunc} from "../../utils/props";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";

class FormLogin extends PureComponent {
  constructor(props) {
    super(props);

    this.history = this.props;
    this.email = createRef();
    this.password = createRef();

    this.state = {
      email: ``,
      password: ``,
      error: false
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeField(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});

    // if (this.state.email.length < 3 && this.state.password < 3) {
    //   this.setState({error: true});
    // }
  }

  handleSubmit(e) {
    const {onSubmit} = this.props;

    e.preventDefault();
    e.stopPropagation();

    // if (!this.state.error) {
      onSubmit({
        email: this.state.email,
        password: this.state.password,
      });
    // }
  }

  render() {
    console.log(this.state);
    return (
      <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
        {
          this.state.error &&
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>
        }
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
              value={this.state.email}
              onChange={this.handleChangeField}
            />
            <label className="sign-in__label visually-hidden" htmlFor="email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChangeField}
            />
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

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

FormLogin.propTypes = {
  onSubmit: validFunc
};

export {FormLogin};
export default connect(null, mapDispatchToProps)(FormLogin);

