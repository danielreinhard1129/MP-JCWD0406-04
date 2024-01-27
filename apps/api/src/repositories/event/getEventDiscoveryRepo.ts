import prisma from '@/prisma';

export const getEventDiscoveryRepo = async (page: number, pageSize: number) => {
  try {
    const events = await prisma.event.findMany({
      where: {
        startDate: {
          gte: new Date(),
        },
      },
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
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return events;
  } catch (error) {
    throw error;
  }
};
