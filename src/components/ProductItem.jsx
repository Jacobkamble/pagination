import {memo} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
const ProductItem = ({ item }) => {
  const { title, price, thumbnail, description } = item;

  console.log("item render......")

  return (
    <>
      <Card sx={{ maxWidth: 345 }} component={Paper}>
        <CardMedia sx={{ height: 140 }} image={thumbnail} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price : {price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default memo( ProductItem);
