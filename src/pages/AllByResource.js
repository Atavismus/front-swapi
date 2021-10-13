import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MainLayout } from '../layouts/MainLayout';

const AllByResource = (props) => {
  const { match } = props;
  const resource = match.path.slice(1);
  const [data, setData] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/get?resource=${resource}`
        );
        setData(response.data.results);
        setNextPage(response.data.next);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [resource]);

  return (
    <MainLayout>
      <>
        {data &&
          data.map((element, index) => <p key={index}>{element.name}</p>)}

        {nextPage && <p>TODO next page: {nextPage}</p>}
      </>
    </MainLayout>
  );
};

export { AllByResource };
