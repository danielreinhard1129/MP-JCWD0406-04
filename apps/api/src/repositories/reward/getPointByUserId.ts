import prisma from '@/prisma';

export const getPointByUserId = async (userId: number) => {
  try {
    const result = await prisma.referralPoints.findUnique({
      where: { userId },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
