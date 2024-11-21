require('dotenv').config()
const RabbitConnectionManager = require('./message_stream/RabbitMQConnectionManager')
const { messageTypeQueue } = require("./helper/messageType")
const RABBIT_MQ_INSTANCE_NAME = process.env.RABBIT_MQ_INSTANCE_NAME;

const SERVER_USER = process.env.SERVER_USER

const launchServer = async () => {
    try {
      await RabbitConnectionManager.initialize()
      await RabbitConnectionManager.listenToQueueMessages(RABBIT_MQ_INSTANCE_NAME,SERVER_USER,messageTypeQueue)
  
      console.log('[SERVER] _sm_user service is running successfully')

    } catch (error) {
    console.log(error)
    }
  }
  
  launchServer()