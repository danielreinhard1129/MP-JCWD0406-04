import { hashPassword } from '@/lib/bcrypt';
import { nanoid } from '@/lib/nanoid';
import { createDiscountReferral } from '@/repositories/reward/createDiscountReferral';
import { createPointReferral } from '@/repositories/reward/createPointReferral';
import { findReferralPointByUserId } from '@/repositories/reward/findReferralPointByUserId';
import { findUserByReferralCode } from '@/repositories/reward/findUserByReferralCode';
import { updatePointReferral } from '@/repositories/reward/updatePointReferral';
import { createUser } from '@/repositories/user/createUser';
import { findUserByEmail } from '@/repositories/user/findUserByEmail';
import { ICouponDiscount, IReferralPoints } from '@/types/reward.type';
import { IUser } from '@/types/user.type';
import { addMonths, format } from 'date-fns';

export const registerAction = async (data: IUser) => {
  try {
    const referred = data.referralCode;
    const { email, firstName, lastName, password, role } = data;
    const isExist = await findUserByEmail(email);
    if (isExist) {
      return { status: 400, message: 'Email already exist' };
    }

    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;

    data.referralCode = nanoid();

    const user = await createUser(data);

    if (referred && data.role.name !== 'promoter') {
      const userReferral = await findUserByReferralCode(referred);
      console.log(userReferral);
      if (userReferral?.role?.name === 'promoter') {
        return { status: 200, message: 'Register success' };
      }
      if (userReferral === null) {
        return { status: 404, message: 'Referral code is not found' };
      }
      const currentDate = new Date();
      const futureDate = addMonths(currentDate, 3);
      const formatDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');
      const dataDiscount: ICouponDiscount = {
        userId: user.id,
        couponCode: `${user.referralCode}-discount`,
        discountPersentase: 10,
        expiresOn: new Date(formatDate),
      };
      await createDiscountReferral(dataDiscount);

      const userPoints = await findReferralPointByUserId(userReferral.id);
      console.log(userPoints);

      if (!userPoints) {
        const dataPoints: IReferralPoints = {
          userId: userReferral.id,
          pointEarned: 10000,
          expiresOn: new Date(formatDate),
        };
        await createPointReferral(dataPoints);
      } else {
        await updatePointReferral(userPoints.userId, {
          pointEarned: userPoints.pointEarned + 10000,
        });
      }
    }
    return {
      status: 200,
      message: 'Register new user success',
    };
  } catch (error) {
    throw error;
  }
};
