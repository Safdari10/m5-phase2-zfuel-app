export const fetchPrices = async (address: string) => {
    try {
      const response = await fetch(`/api/price-comparison?address=${encodeURIComponent(address)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching prices:', error);
      throw error;
    }
  };