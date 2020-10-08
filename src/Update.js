import { initModel } from './Model'
import * as R from 'ramda'

const MSGS = {}

// **************************
function update(msg, model) {
  switch (msg.type) {
    case MSGS:
    default:
      return model
  }
}

export default update
