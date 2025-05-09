import { Router } from 'express';
import { V1UsersController } from './controller';

const router = Router();
const controller = new V1UsersController();

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.post('/', controller.create);

export default router;
