import { Router } from 'express';

import { CreateUserController } from '../controllers/User/CreateUserController';
import { ListUserController } from '../controllers/User/ListUserController';
import { ListUserReceivedComplimentsController } from '../controllers/Compliments/ListUserReceivedComplimentsController';
import { ListUserSentComplimentsController } from '../controllers/Compliments/ListUserSentComplimentsController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUserController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();

router.post('/', createUserController.handle);

router.get('/', ensureAuthenticated, listUsersController.handle);

router.get('/compliments/sent', ensureAuthenticated, listUserSentComplimentsController.handle);

router.get(
  '/compliments/received',
  ensureAuthenticated,
  listUserReceivedComplimentsController.handle,
);

export default router;
