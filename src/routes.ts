import { Router } from 'express';
import { CreateUserController } from './controllers/User/CreateUserController';
import { CreateTagController } from './controllers/Tag/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthUserController } from './controllers/Auth/AuthUserController';
import { CreateComplimentController } from './controllers/Compliments/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserSentComplimentsController } from './controllers/Compliments/ListUserSentComplimentsController';
import { ListUserReceivedComplimentsController } from './controllers/Compliments/ListUserReceivedComplimentsController';
import { ListTagsController } from './controllers/Tag/ListTagController';
import { ListUserController } from './controllers/User/ListUserController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

//User routes
router.post('/users', createUserController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);

//Tags routes
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);

//Auth routes
router.post('/auth', authUserController.handle);

//Compliments Routes
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.get(
  '/users/compliments/sent',
  ensureAuthenticated,
  listUserSentComplimentsController.handle,
);
router.get(
  '/users/compliments/received',
  ensureAuthenticated,
  listUserReceivedComplimentsController.handle,
);

export { router };
