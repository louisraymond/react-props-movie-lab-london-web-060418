import React from 'react'

class Test extends React.Component {
  // constructor(props){
  //   super(props)
  //
  //   //MORE STUFF
  // }

  render(){

    console.log(`TEST ${this.props.number}`, this.props)

    return (
      <div>IM TEST {this.props.number}</div>
    )
  }
}



// const Test = (props) => {
//   return (
//     <div>IM A TEST</div>
//   )
// }


export default Test
