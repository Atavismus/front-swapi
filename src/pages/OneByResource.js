import React, { useState, useEffect } from 'react';
import { getData } from '../services/OneByResourceService';
import { MainLayout } from '../layouts/MainLayout';
import { Result } from '../components/Result/Result';
import { Loader } from '../components/Loader/Loader';

const OneByResource = (props) => {
  const { match } = props;
  const resource = match.path.replace('/:id', '').slice(1);
  const id = match.params.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const obj = await getData(resource, id);
        setData(obj);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [resource, id]);

  return (
    <MainLayout>
      {data ? (
        <Result data={data} currentResource={resource} currentResult={id} />
      ) : (
        <Loader />
      )}
    </MainLayout>
  );
};

export { OneByResource };
