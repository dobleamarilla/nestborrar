import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway({
  cors: {
    origin: true,
    credentials: true,
    transports: ['websocket', 'polling'],
    },
    allowEIO3: true
  })
export class SocketGateway{
  @WebSocketServer()
  server;

  @SubscribeMessage('lal')
  handleMessage(@MessageBody() message: string): void {
    console.log("Me llega: ", message);
    this.server.emit('message', 'chupame la pija colorado');
  }
}