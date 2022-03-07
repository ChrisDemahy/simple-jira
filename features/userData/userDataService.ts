import { UserData } from '@prisma/client';
import prisma from '../../prisma';

export const getUserData = async (id: string) => {
  const userData = await prisma.userData.findUnique({
    where: {
      id,
    },
  });
  return userData;
};

export const modidfyUserData = async (id: string) => {};
