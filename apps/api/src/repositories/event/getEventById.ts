import prisma from '@/prisma';

export const getEventById = async (id: number) => {
  try {
    const eventId = await prisma.event.findUnique({
      where: { id },
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

    return eventId;
  } catch (error) {
    throw error;
  }
};
