import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';
import { registerUser } from './controllers/UserController';

const app: Express = express();
const { PORT } = process.env;

app.post('/api/users', registerUser);
// app.post('/api/login', userLogin);
// app.get('/api/users/:targetUserId/links', getUserByUsername);
// app.post('api/links/', getUserLinks);
// app.get('/:targetUserLink', getUserLink);
// app.delete('/api/users/:targetUserId/links/:targetLinkId', deleteUserLink);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
