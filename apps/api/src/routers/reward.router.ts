import { RewardController } from '@/controllers/reward.controller';
import { Router } from 'express';

export class RewardRouter {
  private router: Router;
  private rewardController: RewardController;

  constructor() {
    this.rewardController = new RewardController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/check-referralcode',
      this.rewardController.checkReferralCode,
    );
    this.router.get('/points/:userId', this.rewardController.getPointByUserId);
  }
  getRouter(): Router {
    return this.router;
  }
}
