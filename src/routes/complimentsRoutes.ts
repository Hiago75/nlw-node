import { Router } from 'express';
import { CreateComplimentController } from '../controllers';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

const createComplimentController = new CreateComplimentController();

router.post(
  '/',
  ensureAuthenticated,
  createComplimentController.handle.bind(createComplimentController),
);

export default router;
