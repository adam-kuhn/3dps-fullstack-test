import request from 'superagent'

export const RECEIVED_TALKS = 'RECEIVED_TALKS'

export const getTalks = (talks) => {
  console.log('dispatched')
  return {
    type: RECEIVED_TALKS,
    talks
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
