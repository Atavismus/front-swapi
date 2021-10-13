import React, { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Search as SearchComponent } from '../components/Search/Search';
import { ResultsList } from '../components/ResultsList/ResultsList';
import { Result } from '../components/Result/Result';
import { Loader } from '../components/Loader/Loader';
import { getIdFromUrl } from '../helpers/url';
import { classes } from '../classes/classes';
import { getData } from '../services/SearchService';

const Search = () => {
  const [search, setSearch] = useState('');
  const [resource, setResource] = useState('');
  const [data, setData] = useState(null);
  const [currentResult, setCurrentResult] = useState(null);
  const [count, setCount] = useState(0);
  const [dataOneSheet, setDataOneSheet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(resource, search);
        setCount(response.count);
        setData(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    search !== '' && resource && fetchData();
  }, [search, resource]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setDataOneSheet(null);
  };

  const handleResource = (event) => {
    setResource(event.target.value);
    setDataOneSheet(null);
  };

  const handleResult = (event) => {
    const id = parseInt(event.target.value);
    setCurrentResult(id);
    // Get the right object from data where url id = id
    const found = data.find(({ url }) => getIdFromUrl(url) === id);
    const obj = new classes[resource](found);
    setDataOneSheet(obj);
  };

  return (
    <MainLayout>
      <SearchComponent
        search={search}
        resource={resource}
        setSearch={handleSearch}
        setResource={handleResource}
      />
      {data ? (
        <ResultsList
          data={data}
          resource={resource}
          count={count}
          currentResult={currentResult}
          onResultClick={handleResult}
        />
      ) : (
        search !== '' && resource && <Loader />
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

export { Search };
