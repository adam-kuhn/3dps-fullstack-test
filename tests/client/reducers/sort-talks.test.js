import {compare} from '../../../client/reducers/talks'

const state = [{votes: 4}, {votes: 2}, {votes: 10}, {votes: 1}, {votes: 5}]

test('compare return a sorted array ranked Highest to Lowest', () => {
  const newState = state.sort(compare)
  expect(newState[0].votes).toBe(10)
  expect(newState[4].votes).toBe(1)
})
