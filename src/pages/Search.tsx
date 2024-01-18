import React, { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Search as SearchComponent } from '../components/Search/Search';
import { ResultsList } from '../components/ResultsList/ResultsList';
import { Result } from '../components/Result/Result';
import { Loader } from '../components/Loader/Loader';
import { getIdFromUrl } from '../helpers/url';
import { classes } from '../classes/classes';
import { getData } from '../services/SearchService';
import { Resource, ResourceButFilm, Response } from '../types';

interface ISearch {
  location: {
    search: string
  }
}

const Search = (props: ISearch) => {
  const { location } = props;
  let page = location.search;
  page = page.substring(page.lastIndexOf('&'));
  const [search, setSearch] = useState<string>('');
  const [resource, setResource] = useState<string>('');
  const [data, setData] = useState<Resource[]>();
  const [count, setCount] = useState<number>(0);
  const [currentResult, setCurrentResult] = useState<number>(1);
  const [dataOneSheet, setDataOneSheet] = useState<Resource>();
  const [prevPage, setPrevPage] = useState<string>('');
  const [nextPage, setNextPage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(resource, search, page);
        setCount((response as Response).count);
        setData((response as Response).results);
        setPrevPage((response as Response).previous);
        setNextPage((response as Response).next);
      } catch (error) {
        console.error(error);
      }
    };
    search !== '' && resource && fetchData();
  }, [search, resource, page]);

  const handleSearch = (event: MouseEvent) => {
    const search: string = (event?.target as HTMLButtonElement).value;
    setSearch(search);
    setDataOneSheet(null);
  };

  const handleResource = (event: MouseEvent) => {
    const resource: string = (event?.target as HTMLButtonElement).value;
    setResource(resource);
    setDataOneSheet(null);
  };

  const handleResult = (event: MouseEvent) => {
    const id: number = parseInt((event?.target as HTMLButtonElement).value);
    setCurrentResult(id);
    // Get the right object from data where url id = id
    if (data) {
      const found = data.find(({ url }) => getIdFromUrl(url) === id);
      const obj: Resource | ResourceButFilm = new classes[resource](found);
      setDataOneSheet(obj);
    }
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
          prevPage={prevPage}
          nextPage={nextPage}
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
