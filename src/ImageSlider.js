// your ImageSlider code here!
import React from 'react'

class ImgSlider extends React.Component {
    super(){
    this.state = {
    currentSlideIndex: 0
        }
    }
    render(){
        return(
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}
export default ImgSlider;