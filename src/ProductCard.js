import React from 'react';

class ProductCard extends React.Component {
  static defaultProps = {

  };

  constructor(props) {
    super(props)

    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    if ('starRating' in props) {
      return {
        starRating: props.starRating
      };
    }
  }

  renderProductImage() {
    return (
      <div className="image-and-button-wrapper">
          <img
            src={this.props.productImageSrc}
            width="231"
            height="231"
            className="product-image"
            alt=""
            aria-hidden="true" />
          <button
            className="product-button">Add to cart</button>
        </div>
    );
  }

  renderStarRating() {
    const totalStars = 5;
    return (
      <span
        role="img"
        aria-label="Rating: {this.state.starRating} out of {totalStars} stars"
        className="star-rating-summary"
        data-star-rating={this.state.starRating}>
        {Array.from({length: totalStars}).map(this.renderStar)}
      </span>
    );
  }

  renderStar() {
    return (
      <span aria-hidden="true" className="star" />
    );
  }

  render() {
    return (
      <section className="product-card">
          {this.renderProductImage()}

          <h1 className="product-title">
            {this.props.title}
          </h1>
          <h2 className="product-price">
            {this.props.price}
          </h2>

          {this.renderStarRating()}
        </section>
    );
  }
}

export default ProductCard;