import React from "react";

import {
  Card,
  makeStyles,
  CardHeader,
  Divider,
  CardContent,
  Button,
} from "@material-ui/core";

import ProductListComponent from "./ProductListComponent";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1, 0.8),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1.5),
      padding: "0.5rem",
    },
  },
  btnMargin: {
    margin: "0.5rem",
  },
}));

const CategoryComponent = (props) => {
  const { category, categoryTitle, categorySubTitle } = props;
  const categoryComponentStyles = useStyles();

  return (
    <Card className={categoryComponentStyles.card}>
      <CardHeader
        action={
          <Button
            variant="contained"
            color="primary"
            className={categoryComponentStyles.btnMargin}
          >
            View All
          </Button>
        }
        title={categoryTitle}
        subheader={categorySubTitle}
      />

      <Divider />

      <CardContent>
        <ProductListComponent category={category} />
      </CardContent>
    </Card>
  );
};

export default CategoryComponent;
