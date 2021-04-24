import http from 'http';
import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import cartRoutes from './routes/cart';

const server = http.createServer((req, res) =>
{
    console.log(req);
});
server.listen();

const app = express();
app.listen(3001);
app.use(json);
app.use('/items', cartRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
{
    res.status(500).json({ message: err.message });
});

export default app;