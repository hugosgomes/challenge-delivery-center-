import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

const CardInfo = ({ infoLabel, infoText }) => {
  const classes = useStyles();
  return (
    <Typography variant="body2" component="p">
      <Typography variant="body2" component="span" className={classes.title}>
        {`${infoLabel}: `}
      </Typography>
      {infoText}
    </Typography>
  );
};

export default CardInfo;
