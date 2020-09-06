import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: this.props.maxChars,
      message: ""
    };

    
  }

  handleChange =(event) => {
    let input = event.target.value;
    this.setState({
      charsLeft: (this.props.maxChars - input.length),
      message: event.target.value
    })
  }
  /*handleChange(event) {
    this.setState({
      charsLeft: (this.props.maxChars - event.target.value.length),
      message: event.target.value});
  }*/

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange.bind(this)}/>
    <p> {this.state.charsLeft} characters remaining. </p>
      </div>
    );
  }
}

export default TwitterMessage;
