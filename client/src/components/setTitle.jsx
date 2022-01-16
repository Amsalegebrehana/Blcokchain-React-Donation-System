// Now our decorator will make continuous checks every time it receives props and update the title accordingly.
import React from "react"
const setTitle = (getTitle) => (WrappedComponent) => {
    return class extends React.Component {
       updateTitle = (props) => {
           // Check if the callback has returned something,
           // and if so - update the title
           const title = getTitle(props)
           if(title) {
              document.title = title
           }
       }
       componentDidMount() {
          this.updateTitle(this.props)
       }
       componentWillReceiveProps(props) {
          this.updateTitle(props)
       }
       render() {
          return <WrappedComponent {...this.props} />
       }
    }
 }
 export default setTitle;