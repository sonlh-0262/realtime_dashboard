import React, { useState, useEffect } from 'react'
import './App.css';

import { SensorRequest } from './sensorpb/sensor_pb'
import { SensorClient } from './sensorpb/sensor_grpc_web_pb'

var client = new SensorClient('http://localhost:8000')

function App() {
  const [temp, setTemp] = useState(-9999)

  const getTemp = () => {
    console.log('called')

    var sensorRequest = new SensorRequest()
    var stream = client.tempSensor(sensorRequest, {})

    stream.on('data', function(response) {
      setTemp(response.getValue())
    })
  }

  useEffect(() => {
    getTemp()
  }, []);

  return (
    <div className="App">
      Temperature: { temp } F
    </div>
  );
}

export default App;
