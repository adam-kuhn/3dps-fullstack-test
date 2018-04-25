import request from 'superagent'

export const RECEIVED_TALKS = 'RECEIVED_TALKS'
export const SHOW_SUBMIT = 'SHOW_SUBMIT'
export const RECEIVED_NEW_TALK = 'RECEIVED_NEW_TALK'
export const SHOW_TALK = 'SHOW_TALK'
export const RECEIVED_VOTES = 'RECEIVED_VOTES'

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

export const receivedVotes = (talks) => {
  return {
    type: RECEIVED_VOTES,
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
  return (dispatch) => {
    request
      .post('/api/v1/talks/upvote')
      .set('Content-Type', 'application/json')
      .send({talkId})
      .then((res) => {
        dispatch(receivedVotes(res.body))
      })
  }
}
