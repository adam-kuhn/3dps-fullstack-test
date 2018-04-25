import request from 'superagent'

export const RECEIVED_TALKS = 'RECEIVED_TALKS'
export const SHOW_SUBMIT = 'SHOW_SUBMIT'
export const RECEIVED_NEW_TALK = 'RECEIVED_NEW_TALK'
export const SHOW_TALK = 'SHOW_TALK'

export const getTalks = (talks) => {
  return {
    type: RECEIVED_TALKS,
    talks
  }
}

export const showTalks = () => {
  return {
    type: SHOW_TALK
  }
}

export const showSubmit = () => {
  return {
    type: SHOW_SUBMIT
  }
}

export const receivedNewTalk = (talkInfo) => {
  return {
    type: RECEIVED_NEW_TALK,
    talkInfo
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

export const submitTalk = (talk) => {
  return (dispatch) => {
    request
      .post('/api/v1/talks')
      .set('Content-Type', 'application/json')
      .send(talk)
      .then(() => {
        dispatch(showTalks())
      })
  }
}

export const upVote = (talkId) => {
  console.log('upvote', talkId)
  return (dispatch) => {
    request
      .post('/api/v1/talks/upvote')
      .set('Content-Type', 'application/json')
      .send({talkId})
      .then(() => {
        dispatch(showTalks())
      })
  }
}
