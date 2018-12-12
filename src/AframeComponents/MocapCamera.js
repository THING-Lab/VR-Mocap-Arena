import AFRAME from 'aframe';
import io from 'socket.io-client';

AFRAME.registerComponent(
  'mocap-camera',
  {
    schema: {},
    init() {
      this.socket = io('192.168.0.100:8000');

      this.socket.on(
        'frame',
        (d) => console.log(d),
      );
    } 
  }
)

