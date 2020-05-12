// your ImageSlider code here!
import React from 'react'
import { Component } from 'react'

export default class ImageSlider extends Component {
    state = {
        currentSlideIndex: 0
    }

    render() {
        return <p>I am on slide {this.state.currentSlideIndex}</p>
    }

}