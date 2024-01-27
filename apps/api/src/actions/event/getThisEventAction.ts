import { getEventThisWeekend } from '@/repositories/event/getEventThisWeekend';

export const getThisEventsAction = async () => {
  try {
    const events = await getEventThisWeekend();
    return {
      status: 200,
      message: 'success',
      data: events,
    };
  } catch (error) {
    throw error;
  }
};
