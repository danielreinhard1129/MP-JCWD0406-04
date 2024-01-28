import { getAllEvent } from '@/repositories/event/getAllEvent';

export const getAllEventAction = async () => {
  try {
    const events = await getAllEvent();

    
    return {
      status: 200,
      message: 'success',
      data: events,
    };
  } catch (error) {
    throw error;
  }
};
