import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app: Express = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World frrom the http server!');
});

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log('A client connected:', socket.id);

  socket.emit('hello', 'Hello from the socket server!');

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

httpServer.listen(4000, () => {
  console.log('Server is running on port 4000');
});