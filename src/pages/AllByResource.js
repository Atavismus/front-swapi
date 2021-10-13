import React, { useState, useEffect } from 'react';
import { getData } from '../services/AllByResourceService';
import { MainLayout } from '../layouts/MainLayout';
import { ResultsList } from '../components/ResultsList/ResultsList';
import { Loader } from '../components/Loader/Loader';

const AllByResource = (props) => {
  const { match } = props;
  const resource = match.path.slice(1);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [currentResult, setCurrentResult] = useState(null);
  // const [nextPage, setNextPage] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(resource);
        setCount(response.count);
        setData(response.results);
        //setNextPage(response.next);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [resource]);

  const handleResult = (event) => {
    setCurrentResult(parseInt(event.target.value));
  };

  return (
    <MainLayout>
      {data ? (
        <ResultsList
          data={data}
          resource={resource}
          count={count}
          currentResult={currentResult}
          onResultClick={handleResult}
        />
      ) : (
        <Loader />
      )}
    </MainLayout>
  );
};

export { AllByResource };
