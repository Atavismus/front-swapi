import { useState, useEffect, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  // IconButton,
  Tooltip,
} from '@mui/material';
import { Loader } from '../Loader/Loader';
// import { Link as LinkIcon } from '@mui/icons-material';
import { ICONS } from '../../config/constants';
import { getPathFromUrl } from '../../helpers/url';
import styles from './Result.module.scss';
import { Resource } from '../../types';
import { IFilm } from '../../classes/Film';

interface ResultProps {
  data: Resource,
  currentResource: string,
  currentResult: number,
}

const Result = (props: ResultProps) => {
  const { data, currentResource, currentResult } = props;
  const [title, setTitle] = useState<string>('');
  const [fields, setFields] = useState<{ [key: string]: string }>();

  useEffect(() => {
    data && setTitle((data as unknown as IFilm).getTitleFields());
  }, [data]);

  useEffect(() => {
    data && setFields((data as unknown as IFilm).getSheetFields());
  }, [data]);

  const renderTitle = () => {
    if (currentResource === 'films') {
      return `Star Wars: Episode ${title[0]} - ${title[1]} (${title[2]})`;
    } else {
      return `${title[0]} - ${title[1]} (${title[2]})`;
    }
  };

  const renderLink = () => {
    const url = `/${currentResource}/${currentResult}`;
    return (
      <Tooltip title={url}>
        <Link to={url} target="_blank">
          {/* <IconButton>
            <LinkIcon />
          </IconButton> */}
        </Link>
      </Tooltip>
    );
  };

  const renderUrl = (url: string) => {
    url = getPathFromUrl(url);
    return (
      <li key={url}>
        <Link to={url} target="_blank">
          {url.slice(0, -1)}
        </Link>
      </li>
    );
  };

  const renderField = (key: string, label: string, field: string) => {
    let displayField;
    if (Array.isArray(field)) {
      displayField = field.map((element) => renderUrl(element));
      displayField = <ul>{displayField}</ul>;
    } else {
      if (label === 'Homeworld' && field) {
        const path = getPathFromUrl(field);
        displayField = (
          <Link to={path} target="_blank" className={styles.notInAli}>
            {path.slice(0, -1)}
          </Link>
        );
      } else {
        displayField = <em>{field}</em>;
      }
    }
    if (field && field.length > 0) {
      return (
        <div key={key} className={styles.field}>
          <strong>{label}: </strong>
          {displayField}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {title && fields ? (
        <Card sx={{ minWidth: '300px', maxWidth: '70%' }} className={styles.card}>
          <CardHeader
            avatar={
              <Tooltip title={currentResource}>
                {(ICONS[currentResource] as ReactElement)}
              </Tooltip>
            }
            title={renderTitle()}
            action={renderLink()}
            className={styles.cardHeader}
          ></CardHeader>
          <CardContent>
            {Object.keys(fields).map((key: string) =>
              renderField(key, fields[key], data[key])
            )}
          </CardContent>
        </Card>
      ) : (
        <Loader />
      )}
    </>
  );
};

export { Result };
