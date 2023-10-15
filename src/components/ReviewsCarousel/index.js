import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currObjIndex: 0,
  }

  OnClickRight = () => {
    const {currObjIndex} = this.state
    const {reviewsList} = this.props
    console.log(currObjIndex)
    if (currObjIndex < reviewsList.length - 1) {
      this.setState(prevState => ({currObjIndex: prevState.currObjIndex + 1}))
    } else {
      this.setState({currObjIndex: reviewsList.length - 1})
    }
  }

  OnClickLeft = () => {
    const {currObjIndex} = this.state
    console.log(currObjIndex)
    if (currObjIndex > 0) {
      this.setState(prevState => ({currObjIndex: prevState.currObjIndex - 1}))
    } else {
      this.setState({currObjIndex: 0})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currObjIndex} = this.state
    console.log(reviewsList[currObjIndex])

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            onClick={this.OnClickLeft}
            className="arrow-button"
            data-testid="leftArrow"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="review-container">
            <img
              src={reviewsList[currObjIndex].imgUrl}
              alt={reviewsList[currObjIndex].username}
              className="logo"
            />
            <p className="user-head">{reviewsList[currObjIndex].username}</p>
            <p className="user-para">{reviewsList[currObjIndex].companyName}</p>
            <p className="user-description">
              {reviewsList[currObjIndex].description}
            </p>
          </div>
          <button
            onClick={this.OnClickRight}
            className="arrow-button"
            data-testid="rightArrow"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
