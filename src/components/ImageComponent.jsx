import React from "react";

// const ImageComponent = (props) => {
//   return(
//     <img src={props.src} alt={props.alt} />
//     );
//   };
  
  class ImageComponent extends React.Component {
    render() {
      return <img src={this.props.src} alt={this.props.alt} />
  }
}

export default ImageComponent;