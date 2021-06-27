import { Router } from 'express';

import { CreateUserController } from '../controllers';
import { ListUserController } from '../controllers';
import { ListUserReceivedComplimentsController } from '../controllers';
import { ListUserSentComplimentsController } from '../controllers';
import { ListAdminUserController } from '../controllers/User/listAdminUsersController';
import { ensureAdmin } from '../middlewares';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUserController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listAdminUserController = new ListAdminUserController();

router.post('/', createUserController.handle.bind(createUserController));

router.get('/', ensureAuthenticated, listUsersController.handle.bind(listUsersController));

router.get(
  '/compliments/sent',
  ensureAuthenticated,
  listUserSentComplimentsController.handle.bind(listUserSentComplimentsController),
);

router.get(
  '/admin',
  ensureAuthenticated,
  ensureAdmin,
  listAdminUserController.handle.bind(listAdminUserController),
);

router.get(
  '/compliments/received',
  ensureAuthenticated,
  listUserReceivedComplimentsController.handle.bind(listUserReceivedComplimentsController),
);

export default router;
