import { hashPassword } from '@/lib/bcrypt';
import { nanoid } from '@/lib/nanoid';
import { createUser } from '@/repositories/user/createUser';
import { findUserByEmail } from '@/repositories/user/findUserByEmail';
import { IUser } from '@/types/user.type';

export const registerAction = async (data: IUser) => {
  try {
    const { email, firstName, lastName, password, role } = data;
    const user = await findUserByEmail(email);
    if (user) throw new Error('email already exist');

    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;
    data.codeReferral = nanoid();

    await createUser(data);

    return {
      message: 'Register new user success',
    };
  } catch (error) {
    throw error;
  }
};
