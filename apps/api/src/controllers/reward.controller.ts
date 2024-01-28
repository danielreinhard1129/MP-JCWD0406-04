import { findUserByReferralCodeAction } from '@/actions/reward/findUserByReferralCode.action';
import { getPointByUserIdAction } from '@/actions/reward/getPointByUserId.action';
import { NextFunction, Request, Response } from 'express';
export class RewardController {
  async checkReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { referralCode } = req.body;
      const result = await findUserByReferralCodeAction(referralCode);
      return res.status(result?.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getPointByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const result = await getPointByUserIdAction(parseInt(userId, 0));
      return res.status(result?.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
