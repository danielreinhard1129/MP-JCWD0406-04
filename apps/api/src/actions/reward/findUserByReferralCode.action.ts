import { findUserByReferralCode } from '@/repositories/reward/findUserByReferralCode';

export const findUserByReferralCodeAction = async (referralCode: string) => {
  try {
    const data = await findUserByReferralCode(referralCode);
    console.log(data);
    if (!data) return { status: 404, message: 'Referral code is not found' };

    return {
      status: 200,
      message: 'Success Get Data',
      data,
    };
  } catch (error) {
    throw error;
  }
};
