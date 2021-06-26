import { Router } from 'express';
import { AuthUserController } from '../controllers/Auth/AuthUserController';

const router = Router();
const authUserController = new AuthUserController();

router.post('/', authUserController.handle);

export default router;
