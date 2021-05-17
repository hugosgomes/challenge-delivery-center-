import React from "react";
import Typography from "@material-ui/core/Typography";

const CardTitle = ({ name }) => {
  return (
    <Typography gutterBottom variant="h5" component="h1">
      {name}
    </Typography>
  );
};

export default CardTitle;
