import { Router } from 'express';
import { AuthUserController } from '../controllers/';

const router = Router();
const authUserController = new AuthUserController();

router.post('/', authUserController.handle.bind(authUserController));

export default router;
