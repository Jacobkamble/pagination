import { Button, Grid } from "@mui/material";
import React,{memo} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Pagination = ({
  currentPage,
  pageSize,
  totalItems,
  totalpages,
  goToPage,
  changePageSize,
}) => {

  
    console.log("pagination render......")

  return (
    <>
      { 

      totalpages>=1&&
        <Grid container gap={2} >
             <Box sx={{ minWidth: 120,m:2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pageSize}
          label="Page Size"
          onChange={(e)=>changePageSize(Number(e.target.value))}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        
        </Select>
      </FormControl>
    </Box>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <span>
              <Button
                disabled={currentPage === 1}
                onClick={() => {
                  goToPage(currentPage - 1);
                }}
                size="small"
                variant="contained"
              >
                Prev
              </Button>
            </span>
            {[...Array(totalItems / pageSize)].map((_, i) => {
              return (
                <span key={i}>
                  <Button
                    disabled={currentPage === i + 1}
                    size="small"
                    variant="contained"
                    onClick={() => goToPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                </span>
              );
            })}

            <span>
              <Button
                disabled={currentPage === totalpages}
                onClick={() => {
                  goToPage(currentPage + 1);
                }}
                size="small"
                variant="contained"
              >
                Next
              </Button>{" "}
            </span>
          </Grid>
        </Grid>
      }
    </>
  );
};

export default memo( Pagination);
