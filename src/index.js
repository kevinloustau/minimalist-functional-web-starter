import initModel from './model.js'
import update from './update.js'
import view from './view.js'
import app from './app.js'

const node = document.getElementById('app')
app(initModel, update, view, node)
