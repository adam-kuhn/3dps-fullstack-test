import request from 'superagent'

export const RECEIVED_TALKS = 'RECEIVED_TALKS'
export const SHOW_SUBMIT = 'SHOW_SUBMIT'

export const getTalks = (talks) => {
  console.log('dispatched')
  return {
    type: RECEIVED_TALKS,
    talks
  }
}

export const showSubmit = () => {
  return {
    type: SHOW_SUBMIT
  }
}

export const requestTalks = () => {
  return (dispatch) =>
    request
      .get('/api/v1/talks')
      .set('Content-Type', 'application/json')
      .send()
      .then(res => {
        dispatch(getTalks((res.body)))
      })
}
