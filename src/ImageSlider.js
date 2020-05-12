import React from "react";

export default class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
    };
  }

  // our increment method makes use of the 'setState' method, which is what we use to alter state
  increment = () => {
    const newCurrentSlideIndex = this.state.count + 1;
    this.setState({
      currentSlideIndex: newCurrentSlideIndex,
    });
  };

  render() {
    return <div>{`I am on slide ${this.state.currentSlideIndex}`}</div>;
  }
}
