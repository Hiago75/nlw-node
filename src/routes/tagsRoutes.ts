import { Router } from 'express';
import { CreateTagController } from '../controllers';
import { ListTagsController } from '../controllers';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();
const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

router.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle.bind(createTagController),
);
router.get('/', ensureAuthenticated, listTagsController.handle.bind(listTagsController));

export default router;
