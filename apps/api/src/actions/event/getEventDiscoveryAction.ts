import { getEventDiscoveryRepo } from '@/repositories/event/getEventDiscoveryRepo';
import { getEventThisWeekend } from '@/repositories/event/getEventThisWeekend';

export const getThisEventDiscoveryAction = async (
  page: number,
  pageSize: number,
) => {
  try {
    const events = await getEventDiscoveryRepo(page, pageSize);
    return {
      status: 200,
      message: 'success',
      data: events,
    };
  } catch (error) {
    throw error;
  }
};
