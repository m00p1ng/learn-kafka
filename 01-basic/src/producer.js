const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'm00p1ng-producer',
  brokers: ['localhost:9093']
})

const producer = kafka.producer()

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: `${Date.now()} - Hello KafkaJS user!` },
    ],
  })
  await producer.disconnect()
}

run().catch(console.error)