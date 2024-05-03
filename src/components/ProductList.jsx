import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState ,memo} from "react";
import ProductItem from "./ProductItem";
import withPagination from "./withPagination";

import Pagination from "./Pagination";

const HOCPagination=withPagination(Pagination)

const URL = `https://dummyjson.com/products?limit=100`;


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [paginateData,setPaginatedData]=useState([]);
  const fetchProducts = async () => {
try {
    const res = await fetch(URL);
    const json = await res.json();

    if (json.products.length > 0) {
      setProducts(json.products);
    } 
} catch (error) {
  console.log(error)  
}

  };

  useEffect(() => {
    fetchProducts();
  }, []);


  console.log("productList render......")

  return (
    <>
    <Typography variant="h3" sx={{m:2}}>Pagination with Higher Order Component</Typography>
      <Grid container gap={2}>
        {paginateData&&paginateData.map((prod) => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3} item key={prod.id}>
              <ProductItem item={prod} />
            </Grid>
          );
        })}
      </Grid>

<HOCPagination data={products} setPaginatedData={setPaginatedData}/>  
    </>
  );
};

export default memo( ProductList);
