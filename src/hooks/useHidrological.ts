'use client';
import { useState } from 'react';
import { fetchInfoHidro } from '@/api';
import { IDataHidro } from '@/types';

export const useHidrological = () => {
  const [data, setData] = useState<IDataHidro | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getHidroData = async () => {
    setLoading(true);
    try {
      const data: IDataHidro = await fetchInfoHidro();
      setData(data);
    } catch (error) {
      console.error('Error fetching or processing data:', error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    getHidroData,
    loading,
  };
};
