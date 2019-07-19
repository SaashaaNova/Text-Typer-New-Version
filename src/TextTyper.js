
import React, { Component } from 'react';

class TextTyper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textToType: [],
      typeOneTime: [],
      typeInfinity: [],
      counter: 0,
      currentLetter: 0,
      delay: this.props.delay,
      intervalSpeed: this.props.interval,
    };
  }

  componentDidMount() {
    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => {
      this.startTyping();
    }, this.state.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimer);
    clearInterval(this.typeInterval);
  }


  startTyping = () => {
    this.typeInterval = setInterval(() => {

      const {content} = this.props;
      const { 
        typeOneTime, 
        typeInfinity, 
        currentLetter, 
        counter,
      } = this.state;


      let arrayOfSentences = content.match( /[^\.!\?]+[\.!\?]+/g ); 
      arrayOfSentences.push(' ')
      let splitSentence = arrayOfSentences[counter].split('');
      const start = splitSentence[currentLetter];

      if(currentLetter !== splitSentence.length && counter === 0) {
        this.setState({
          typeOneTime: [...typeOneTime, start],
          currentLetter: currentLetter + 1,
          textToType: [typeOneTime]
        })        
      } else {
        this.setState({
          typeInfinity: [...typeInfinity, start],
          currentLetter: currentLetter + 1,
          textToType: [typeOneTime, typeInfinity]
        })  
      }

      if (currentLetter === splitSentence.length) {    
        this.setState({
          counter: counter + 1,
          currentLetter: 0,      
        }) 
      } 
        
      if (counter === arrayOfSentences.length - 1) {
        
          this.setState({
            counter: 1,
            currentLetter: 0,
            typeInfinity: [], 
          })
        
      } 
   
    }, this.state.intervalSpeed)
  }


 render() {
  const { textToType } = this.state;

   return (
     <div className="main-container">
       <div className="text-container">
         <h1>{textToType}</h1>
       </div>
     </div>
   );
 }
}

export default TextTyper;
