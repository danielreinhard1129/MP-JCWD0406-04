import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

export const updatePointReferral = async (userId: number, data: any) => {
  try {
    const result = await prisma.referralPoints.update({
      data,
      where: {
        userId,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
