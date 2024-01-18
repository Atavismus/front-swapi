import { useState, useEffect } from 'react';
import { getData } from '../services/AllByResourceService';
import { MainLayout } from '../layouts/MainLayout';
import { ResultsList } from '../components/ResultsList/ResultsList';
import { Result } from '../components/Result/Result';
import { Loader } from '../components/Loader/Loader';
import { getIdFromUrl } from '../helpers/url';
import { classes } from '../classes/classes';
import { Resource, ResourceButFilm, Response } from '../types';

interface AllByResourceProps {
  match: {
    path: string;
  };
  location: {
    search: string;
  }
}

const AllByResource = (props: AllByResourceProps) => {
  const { match, location } = props;
  const page = location.search;
  const resource = match.path.slice(1);
  const [data, setData] = useState<Resource[]>();
  const [count, setCount] = useState<number>(0);
  const [currentResult, setCurrentResult] = useState<number>(1);
  const [dataOneSheet, setDataOneSheet] = useState<Resource>();
  const [prevPage, setPrevPage] = useState<string>('');
  const [nextPage, setNextPage] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(resource, page);
        setCount((response as Response).count);
        setData((response as Response).results);
        setPrevPage((response as Response).previous);
        setNextPage((response as Response).next);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [resource, page]);

  const handleResult = (event: MouseEvent) => {
    const id: number = parseInt((event?.target as HTMLButtonElement).value);
    setCurrentResult(id);
    // Get the right object from data where url id = id
    if (data) {
      const found = data.find((r: Resource) => getIdFromUrl(r.url) === id);
      const obj: Resource | ResourceButFilm = new classes[resource](found);
      setDataOneSheet(obj);
    }
  };

  return (
    <MainLayout>
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
