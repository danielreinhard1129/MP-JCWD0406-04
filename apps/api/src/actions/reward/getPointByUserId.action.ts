import { getPointByUserId } from '@/repositories/reward/getPointByUserId';

export const getPointByUserIdAction = async (userId: number) => {
  try {
    const data = await getPointByUserId(userId);
    console.log(data);
    if (!data)
      return { status: 404, message: 'You dont have any point to show' };

    return {
      status: 200,
      message: 'Success Get Data',
      data,
    };
  } catch (error) {
    throw error;
  }
};
