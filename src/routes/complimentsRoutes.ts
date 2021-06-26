import { Router } from 'express';
import { CreateComplimentController } from '../controllers/Compliments/CreateComplimentController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

const createComplimentController = new CreateComplimentController();

router.post('/', ensureAuthenticated, createComplimentController.handle);

export default router;
