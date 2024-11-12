<<<<<<< HEAD
const EventEmmiter = require('events')

class Logger extends EventEmmiter {
          log(message) {
                    this.emit('message', `${message} ${Date.now()}`)
          }
}

const logger = new Logger()

logger.on('message', data => {
          console.log(data)
})

logger.log('First')
logger.log('Second')
logger.log('Thiird')
=======
const EventEmmiter = require('events')

class Logger extends EventEmmiter {
          log(message) {
                    this.emit('message', `${message} ${Date.now()}`)
          }
}

const logger = new Logger()

logger.on('message', data => {
          console.log(data)
})

logger.log('First')
logger.log('Second')
logger.log('Thiird')
>>>>>>> c397fe7e01dc19f73ea1d42207d2bc0cc98c4825
