import prisma from '@/prisma';

export const getEventThisWeekend = async () => {
  const today = new Date();
  const startOfDay = new Date(today);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(today);
  endOfDay.setHours(23, 59, 59, 999);
  endOfDay.setDate(endOfDay.getDate() + 7);
  try {
    const events = await prisma.event.findMany({
      where: {
        startDate: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      orderBy: { startDate: 'desc' },
      include: {
        location: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        Event_category: {
          include: {
            category: true,
          },
        },
      },
    });

    return events;
  } catch (error) {
    throw error;
  }
};
