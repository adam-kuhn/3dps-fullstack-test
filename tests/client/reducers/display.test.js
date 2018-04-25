import {SHOW_SUBMIT, SHOW_TALK} from '../../../client/actions/talks'

import display from '../../../client/reducers/display'

const state = false

test('display return true for SHOW_SUBMIT', () => {
  const action = {type: SHOW_SUBMIT}
  const newState = display(state, action)
  expect(newState).toBe(true)
})

test('display returns false for SHOW_TALK', () => {
  const action = {type: SHOW_TALK}
  const newState = display(state, action)
  expect(newState).toBe(false)
})
