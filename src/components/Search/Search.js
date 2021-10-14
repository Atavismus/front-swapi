import React from 'react';
import {
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import styles from './Search.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { RESOURCES } from '../../config/constants';

const Search = (props) => {
  const { search, resource = RESOURCES[0], setSearch, setResource } = props;
  return (
    <Container maxWidth="md" className={`${styles.search} flex spaceBetween`}>
      <div className={styles.column}>
        <TextField
          label="Search"
          variant="standard"
          value={search}
          onChange={setSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </div>
      <div className={styles.column}>
        <FormControl fullWidth>
          <InputLabel id="searchResourceLbl">Resource</InputLabel>
          <Select
            variant="standard"
            labelId="searchResourceLbl"
            id="searchResource"
            defaultValue={resource}
            value={resource}
            label="Resource"
            onChange={setResource}
          >
            {RESOURCES.map((res) => (
              <MenuItem value={res} key={res}>
                {res}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Container>
  );
};

export { Search };
