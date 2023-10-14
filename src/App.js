import React, { useEffect, useState } from 'react';
import { HTTP } from 'app/HTTP';

export const App = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const { data } = await HTTP.get('/api/data');
      setData(data);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <h1>{JSON.stringify(data?.user)}</h1>;
};
