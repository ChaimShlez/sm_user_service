const uuid = require('uuid').v4
const moment = require('moment')
const RabbitConnectionManager = require('../message_stream/RabbitMQConnectionManager')
const RABBIT_MQ_INSTANCE_NAME = process.env.RABBIT_MQ_INSTANCE_NAME;
const USER_SERVER = process.env.USER_SERVER

const sendToLog = async (level, response,timestamp,saveInDb) => {
  try {
    const responseMessage = {
      id: uuid(),
      level,
      service: 'user-services',
      data: response,
      saveInDb,
      timestamp: timestamp ? timestamp : moment().format('YYYY-MM-DD HH:mm:ss.sss'),
    }
      await RabbitConnectionManager.pushMessageToQueue(RABBIT_MQ_INSTANCE_NAME,USER_SERVER, JSON.stringify(responseMessage))
  } catch (error) {
    console.log(error)
    const errorMessage = `Failed to send message to Log queue, level: ${level}, data: ${JSON.stringify(response)}`
    console.error(errorMessage)
  }
}

module.exports = {
  sendToLog,
}
