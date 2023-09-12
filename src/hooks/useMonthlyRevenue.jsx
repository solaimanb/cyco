import { useEffect, useState } from 'react';
import axios from 'axios';

function useMonthlyRevenue() {
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMonthlyRevenue() {
      try {
        const response = await axios.get('/monthly-revenue');
        setMonthlyRevenue(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchMonthlyRevenue();
  }, []);

  return { monthlyRevenue, loading, error };
}

export default useMonthlyRevenue;
