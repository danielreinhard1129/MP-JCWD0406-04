import prisma from '@/prisma';

export const getAllEvent = async () => {
  try {
    const events = await prisma.event.findMany({
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
