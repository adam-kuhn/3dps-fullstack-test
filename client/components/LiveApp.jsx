import React from 'react'
// import request from 'superagent'
import {connect} from 'react-redux'

import {requestTalks} from '../actions'
class LiveApp extends React.Component {
  // constructor () {
  //   super()
  // this.clickHandler = this.clickHandler.bind(this)
  // }
  componentDidMount () {
    this.props.dispatch(requestTalks())
  }
  // clickHandler () {
  //   request
  //     .get('/api/v1/talks')
  //     .set('Content-Type', 'application/json')
  //     .send()
  //     .then(res => {
  //       console.log(res.body)
  //     })
  // }
  render () {
    return (
      <button type='button' onClick={this.clickHandler}>api test</button>
    )
  }
}

export default connect()(LiveApp)
