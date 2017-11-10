import React from 'react';

// React Component
// Receive texts to display as array of strings as props to component
// onComponentDidMount,
// get the first string in texts,
  // iterate through letters and setState every 200ms adding each letter to the displayedText
  // after iterating through string, remove the text one letter at a time
// get second string in text and repeat process above
// infinite loop

export default class React extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedText: "",
    };

    this._startTextAnimation = this._startTextAnimation.bind(this);
    this._renderText = this._renderText.bind(this);
    this._clearText = this._clearText.bind(this);
  }

  onComponentDidMount() {
    // invoke _startTextAnimation
    // this._startTextAnimation();
  }

  _startTextAnimation() {
    let i = 0;
    let texts = this.props.texts;
    // while i < this.props.texts.length
      // stringToRender = props.texts[i]
      // invoke renderString passing in stringToRender
      // This line makes it loop inifinitely
        // i < this.props.texts.length ? i++ : i = 0
    while (i < texts.length) {
      let textToRender = texts[i];
      this._renderText(text);
      i < texts.length ? i++ : i = 0;
    }
  }

  _renderText(text) {
    // iterate through text
      // for each char, setState of displayedText, adding chars one at a time
      // rest 2~300 ms between chars to imitate keystrokes
    // pause for .5sec and invoke _clearText

    for (let i = 0; i < text.length; i++) {
      
    }
  }

  _clearText() {
    // iterate through displayedText
      // setState and remove chars one at a time
  }

  render() {
    return (
      <span id="Typewriter">
        {this.state.displayedText}
      </span>
    );
  }
}
