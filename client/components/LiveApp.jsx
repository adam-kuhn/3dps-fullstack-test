import React from 'react'
import {connect} from 'react-redux'

import Talks from './Talks'
import SubmitTalks from './SubmitTalks'
class LiveApp extends React.Component {
  render () {
    return (
      <div>
        {!this.props.display && <Talks />}
        {this.props.display && <SubmitTalks />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    display: state.display
  }
}

export default connect(mapStateToProps)(LiveApp)
