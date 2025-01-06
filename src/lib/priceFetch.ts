export const fetchPrices = async (address: string) => {
  try {
    const response = await fetch(`/price-comparison/api?address=${encodeURIComponent(address)}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch prices');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching prices:', error);
    throw error;
  }
};