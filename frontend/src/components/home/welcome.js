import React from 'react';
import '../../css/welcome.css';

export default class Welcome extends React.Component {
  // constructor(props){
  //   super(props)
  //
  //   this.slideIndex = this.slideIndex.bind(this);
  //   this.showDivs= this.showDivs.bind(this);
  //   this.currentDiv = this.currentDiv.bind(this);
  // }

  // slideIndex = 1;
  // showDivs(this.slideIndex);
  //
  // plusDivs(n) {
  //   this.showDivs(this.slideIndex += n);
  // }
  //
  // currentDiv(n) {
  //   this.showDivs(this.slideIndex = n);
  // }

  // showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  //   if (n > x.length) {this.slideIndex = 1}
  //   if (n < 1) {this.slideIndex = x.length}
  //   for (i = 0; i < x.length; i++) {
  //      x[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //      dots[i].className = dots[i].className.replace(" w3-white", "");
  //   }
  //   x[this.slideIndex-1].style.display = "block";
  //   dots[this.slideIndex-1].className += " w3-white";
  // }


  render () {
    // const style = {
    //   width: '100%'
    // };

    return (
      // <div className="w3-content w3-display-container" style={style}>
      //   <img className="mySlides" src="img_nature_wide.jpg" style={style}/>
      //   <img className="mySlides" src="img_fjords_wide.jpg" style={style}/>
      //   <img className="mySlides" src="img_mountains_wide.jpg" style={style}/>
      //   <div className="w3-center w3-section w3-large w3-text-white w3-display-bottommiddle" style={style}>
      //     <div className="w3-left w3-padding-left w3-hover-text-khaki" onClick={this.plusDivs(-1)}>&#10094;</div>
      //     <div className="w3-right w3-padding-right w3-hover-text-khaki" onClick={this.plusDivs(1)}>&#10095;</div>
      //     <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.currentDiv(1)}></span>
      //     <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.currentDiv(2)}></span>
      //     <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.currentDiv(3)}></span>
      //   </div>
      // </div>
      <div className='cover-content'>
        <img src='cover.jpeg'/>
      </div>
    )
  }
}
