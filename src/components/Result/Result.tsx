import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Loader } from '../Loader/Loader';
import { Link as LinkIcon } from '@mui/icons-material';
import { ICONS } from '../../config/constants';
import { getPathFromUrl } from '../../helpers/url';
import styles from './Result.module.scss';

const Result = (props) => {
  const { data, currentResource, currentResult } = props;
  const [title, setTitle] = useState(null);
  const [fields, setFields] = useState(null);

  useEffect(() => {
    data && setTitle(data.getTitleFields());
  }, [data]);

  useEffect(() => {
    data && setFields(data.getSheetFields());
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
          <IconButton>
            <LinkIcon />
          </IconButton>
        </Link>
      </Tooltip>
    );
  };

  const renderUrl = (url) => {
    url = getPathFromUrl(url);
    return (
      <li key={url}>
        <Link to={url} target="_blank">
          {url.slice(0, -1)}
        </Link>
      </li>
    );
  };

  const renderField = (key, label, field) => {
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
    <Container maxWidth="md">
      {title && fields ? (
        <Card className={styles.card}>
          <CardHeader
            avatar={
              <Tooltip title={currentResource}>
                {ICONS[currentResource]}
              </Tooltip>
            }
            title={renderTitle()}
            action={renderLink()}
            className={styles.cardHeader}
          ></CardHeader>
          <CardContent>
            {Object.keys(fields).map((key) =>
              renderField(key, fields[key], data[key])
            )}
          </CardContent>
        </Card>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export { Result };
