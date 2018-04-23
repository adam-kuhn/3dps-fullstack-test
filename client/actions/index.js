import request from 'superagent'

export const GET_TALKS = 'GET_TALKS'

export const getTalks = () => {
  console.log('dispatched')
  return {
    type: GET_TALKS
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
