import NextApiRequest from 'next';
import NextApiResponse from 'next';
import connectDB from '@/db/connection';
import ZFuelStation from '@/db/model';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === 'GET') {
    const { address } = req.query;

    if (!address || typeof address !== 'string') {
      return res.status(400).json({ error: 'Address is required' });
    }

    const [street, city, state, zip] = address.split(',');

    if (!street || !city || !state || !zip) {
      return res.status(400).json({ error: 'Address must include street, city, state, and zip' });
    }

    try {
      const station = await ZFuelStation.findOne({
        'address.street': street.trim(),
        'address.city': city.trim(),
        'address.state': state.trim(),
        'address.zip': zip.trim()
      });

      if (!station) {
        return res.status(404).json({ error: 'Station not found' });
      }

      return res.status(200).json({ prices: station.prices });
    } catch (error) {
      return res.status(500).json({ error: 'Error retrieving fuel prices' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;