import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardTitle from "../CardTitle";
import CardInfo from "../CardInfo";

const useStyles = makeStyles({
  root: {
    width: "292px",
    boxShadow: "5px 5px 15px 5px #000000",
    margin: "9px",
  },
  subTitle: {
    fontSize: 16,
    margin: "5px 0",
    fontWeight: 500,
    borderTop: "1px solid #000",
  },
  button: {
    backgroundColor: "rgba(254, 82, 0, 1)",
    margin: "auto",
    "&:hover": {
      backgroundColor: "rgba(204, 82, 0, .9)",
    },
  },
});

const CardComponent = ({ user }) => {
  const classes = useStyles();

  const viewMap = (lat, lng) =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    );

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardTitle name={user.name} />
        <CardInfo infoLabel="Username" infoText={user.username} />
        <CardInfo infoLabel="E-mail" infoText={user.email} />
        <CardInfo infoLabel="Endereço" infoText={'"Endereço"'} />
        <CardInfo infoLabel="Phone" infoText={user.phone} />
        <CardInfo infoLabel="Website" infoText={user.website} />
        <hr />
        <Typography variant="body2" component="p" className={classes.subTitle}>
          Address
        </Typography>
        <CardInfo infoLabel="Street" infoText={user.address.street} />
        <CardInfo infoLabel="Suite" infoText={user.address.suite} />
        <CardInfo infoLabel="City" infoText={user.address.city} />
        <CardInfo infoLabel="Zipcode" infoText={user.address.zipcode} />

        <Typography variant="body2" component="p" className={classes.subTitle}>
          Company
        </Typography>
        <CardInfo infoLabel="Name" infoText={user.company.name} />
        <CardInfo infoLabel="CatchPhrase" infoText={user.company.catchPhrase} />
        <CardInfo infoLabel="Bs" infoText={user.company.bs} />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => viewMap(user.address.geo.lat, user.address.geo.lng)}
        >
          Ver Mapa
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
