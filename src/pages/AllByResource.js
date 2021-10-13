import React, { useState, useEffect } from 'react';
import { getData } from '../services/AllByResourceService';
import { MainLayout } from '../layouts/MainLayout';
import { ResultsList } from '../components/ResultsList/ResultsList';
import { Result } from '../components/Result/Result';
import { Loader } from '../components/Loader/Loader';
import { classes } from '../classes/classes';

const AllByResource = (props) => {
  const { match } = props;
  const resource = match.path.slice(1);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [currentResult, setCurrentResult] = useState(null);
  const [dataOneSheet, setDataOneSheet] = useState(null);
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
    const id = parseInt(event.target.value);
    setCurrentResult(id);
    const obj = new classes[resource](data[id]);
    setDataOneSheet(obj);
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
      {dataOneSheet && (
        <Result
          data={dataOneSheet}
          currentResource={resource}
          currentResult={currentResult}
        />
      )}
    </MainLayout>
  );
};

export { AllByResource };
