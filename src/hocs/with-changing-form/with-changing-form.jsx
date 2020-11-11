import React, {PureComponent} from "react";

const withChangingForm = (Component) => {
  class WithChangingForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        rating: `3`,
        text: ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      // const {onSubmit} = this.props;

      // onSubmit({
      //   email: this.state.email,
      //   password: this.state.password,
      // });

      const data = new FormData(evt.target);

      fetch(`https://5.react.pages.academy/wtw`, {
        method: `POST`,
        body: data,
      });
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {email, password, rating, text} = this.state;

      return (
        <Component
          {...this.props}
          email={email}
          password={password}
          rating={rating}
          text={text}
          handleSubmit={this.handleSubmit}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  return WithChangingForm;
};

export default withChangingForm;
