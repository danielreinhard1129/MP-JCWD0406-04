import { SampleController } from '@/controllers/sample.controller';
import { UserController } from '@/controllers/user.controller';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.userController.registerUser);
    this.router.get('/:email', this.userController.getUserByEmail);
  }

  getRouter(): Router {
    return this.router;
  }
}
