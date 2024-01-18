import { getUserByEmailAction } from '@/actions/user/getUserByEmail.action';
import { registerAction } from '@/actions/user/register.action';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const result = await registerAction(data);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getUserByEmail (req: Request, res: Response, next: NextFunction) {
    try {
      const {email} = req.params
      const result = await getUserByEmailAction(email)
      res.status(result?.status as number).send(result)
    } catch (error) {
      
    }
  }
}
