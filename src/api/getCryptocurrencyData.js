import axios from "axios";

export const getCryptocurrencyData = async (value) => {
    const res = await axios.get(
      `https://backend-coin-lift-production.up.railway.app/api/v1/cryptocurrency/${value}`
    );
    return res;
  };