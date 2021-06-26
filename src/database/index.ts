import { createConnection } from 'typeorm';

export const dbConnect = async (): Promise<void> => {
  const connection = await createConnection();
  console.log(`Connected to ${connection.options.database}`);

  process.on('SIGINT', () => {
    connection.close().then(() => console.log(`Connection to DB closed`));
  });
};
