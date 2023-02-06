import React from "react";
class ImageComponent extends React.Component {
    render(){
        return <div>
            <img src={this.props.src}  alt={this.props.alt} style={{borderRadius: this.props.border, marginTop: this.props.margin}}/>
            </div>
    }
}

export default ImageComponent ;