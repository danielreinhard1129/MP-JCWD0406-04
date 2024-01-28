import { getEventById } from '@/repositories/event/getEventById';
import { getEventThisWeekend } from '@/repositories/event/getEventThisWeekend';

export const getEventByIdAction = async (id: number) => {
  try {
    const events = await getEventById(id);
    return {
      status: 200,
      message: 'success',
      data: events,
    };
  } catch (error) {
    throw error;
  }
};
