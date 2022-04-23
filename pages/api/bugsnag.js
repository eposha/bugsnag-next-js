import { Bugsnag } from '../../src/bugsnag';

const handler = async (req, res) => {
  try {
    throw new Error('work');
  } catch (error) {
    Bugsnag.notify(error);
  }
};

export default handler;
