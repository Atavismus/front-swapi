import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh">
      <CircularProgress size="5rem" />
    </Box>
  );
};

export { Loader };
