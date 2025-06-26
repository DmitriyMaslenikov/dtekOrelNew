import mqtt from 'mqtt';

export const getMqtt = () => {
  console.log('mqtt', mqtt);
  const host = '192.168.1.60';
  const port = '1883';
  const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

  const connectUrl = `mqtt://${host}:${port}`;

  const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'dmitriy',
    password: '626920847',
    reconnectPeriod: 1000,
  });

  const topic = '/energy/batch';

  client.on('connect', () => {
    console.log('Connected');

    client.subscribe([topic], () => {
      console.log(`Subscribe to topic '${topic}'`);
      client.publish(
        topic,
        '{"comand":"get", "date":"2024-04-01"}',
        { qos: 0, retain: false },
        (error) => {
          if (error) {
            console.error(error);
          }
        }
      );
    });
  });

  client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString());
  });
};
