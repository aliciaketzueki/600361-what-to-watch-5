import React, {PureComponent} from "react";

const withChangingForm = (Component) => {
  class WithChangingForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        rating: `3`,
        textReview: ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {email, password, rating, textReview} = this.state;

      return (
        <Component
          {...this.props}
          email={email}
          password={password}
          rating={rating}
          textReview={textReview}
          handleSubmit={this.handleSubmit}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  return WithChangingForm;
};

export default withChangingForm;
