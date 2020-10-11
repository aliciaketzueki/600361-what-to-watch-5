import React, {PureComponent} from "react";

class FormAddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: `3`,
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

  addRating(rating) {
    const maxRate = 5;
    const rateBlocks = [];

    for (let i = 1; i <= maxRate; i++) {
      rateBlocks.push(
          <React.Fragment key={`rate-${i}`}>
            <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} defaultChecked={i === parseInt(rating, 10) ? `checked` : !`checked`} onChange={this.handleFieldChange}/>
            <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
          </React.Fragment>
      );
    }

    return rateBlocks;
  }

  render() {
    const {rating} = this.state;

    return (
      <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {this.addRating(rating)}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.handleFieldChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}

export default FormAddReview;
