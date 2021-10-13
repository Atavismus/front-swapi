import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../services/OneByResourceService';
import { MainLayout } from '../layouts/MainLayout';

const OneByResource = (props) => {
  const { match } = props;
  const resource = match.path.replace('/:id', '').slice(1);
  const id = match.params.id;
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(null);
  const [fields, setFields] = useState(null);

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

  useEffect(() => {
    data && setTitle(data.getTitleFields());
  }, [data]);

  useEffect(() => {
    data && setFields(data.getSheetFields());
  }, [data]);

  // const renderUrl = async (url) => {
  //   url = url.replace('https://swapi.dev/api', '');
  //   const params = url.slice(1).slice(0, -1).split('/');
  //   try {
  //     let name = await getData(params[0], params[1], true);
  //     return (
  //       <Link to={url} key={url}>
  //         {url}
  //       </Link>
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const renderUrl = (url) => {
    url = url.replace('https://swapi.dev/api', '');
    return (
      <li key={url}>
        <Link to={url}>{url}</Link>
      </li>
    );
  };

  const renderField = (key, label, field) => {
    let displayField;
    let style = {};
    if (Array.isArray(field)) {
      displayField = field.map((element) => renderUrl(element));
      displayField = (
        <ul style={{ padding: 0, paddingLeft: '15px' }}>{displayField}</ul>
      );
      style = {
        //display: 'inline-flex',
        float: 'left',
        marginRight: '25px',
        paddingRight: '25px',
        borderRight: 'solid 1px #000000',
      };
    } else {
      displayField = <em>{field}</em>;
    }

    return (
      <div key={key} style={style}>
        <div>
          <strong>{label}: </strong>
          {displayField}
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      {data && title && fields && (
        <>
          <p>Title:</p>
          {title.map((element, index) => (
            <span key={index}>{element} </span>
          ))}
          {Object.keys(fields).map((key) =>
            renderField(key, fields[key], data[key])
          )}
        </>
      )}
    </MainLayout>
  );
};

export { OneByResource };
