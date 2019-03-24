
import React, { Component } from 'react';
// import '../main.css';

class TextTyper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
      firstWritten: true,
      typeOneTime: [],
      typeInfinity: [],
      listArr: [],
      currLetterNumb: 0,
      currStringNumb: 0,
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
      const {
        currLetterNumb,
        currStringNumb,
        content,
        typeInfinity,
        listArr,
        firstWritten,
      } = this.state;

      if (firstWritten) {
        this.typeOneTime();
      } else if (currStringNumb < content.length) {
        const currentNew = content[currStringNumb];

        this.setState({
          typeInfinity: [...typeInfinity, currentNew[currLetterNumb]],
          currLetterNumb: currLetterNumb + 1,
        });

        if (currLetterNumb >= currentNew.length) {
          this.setState({
            currLetterNumb: 0,
            currStringNumb: currStringNumb + 1,
            listArr: [...listArr, typeInfinity],
            typeInfinity: [],
          });
        }
      } else {
        this.setState({
          currLetterNumb: 0,
          currStringNumb: 0,
          typeInfinity: [],
          listArr: [],
        });
      }
    }, this.state.intervalSpeed);
  }


 typeOneTime = () => {
   const {
     typeOneTime,
     currLetterNumb,
     content,
   } = this.state;

   const currentSentence = content[0];

   this.setState({
     typeOneTime: [...typeOneTime, currentSentence[currLetterNumb]],
     currLetterNumb: currLetterNumb + 1,
   });

   if (currLetterNumb >= currentSentence.length - 1) {
     this.setState({
       content: content.slice(1),
       firstWritten: false,
       currLetterNumb: 0,
     });
   }
 };

 createList = () => {
   const table = [];

   for (let i = 0; i < this.state.listArr.length; i++) {
     table.push(<li key={i}>{this.state.listArr[i]}</li>);
   }

   return table;
 };

 render() {
   const {
     typeOneTime,
     typeInfinity,
   } = this.state;

   return (
     <div className="main-container">
       <div className="text-container">
         <h1>{typeOneTime}</h1>
         <ul>
           {this.createList()}
         </ul>
         <p>{typeInfinity}</p>
       </div>
     </div>
   );
 }
}

export default TextTyper;
