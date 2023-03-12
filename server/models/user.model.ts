import { prisma } from './db-connect';

const addUser = async () => {
  const user = await prisma.user.findMany();
};

addUser();
