import React from "react";

import {
  List,
  ListItem,
  makeStyles,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import {
  Person,
  Dashboard,
  Translate,
  LocalOffer,
  Work,
  ShoppingCart,
  Favorite,
  Notifications,
  Chat,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 260,
  },
}));

const ListComponent = () => {
  const sideDrawerStyles = useStyles();

  return (
    <List className={sideDrawerStyles.list}>
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="All Categories" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Translate />
        </ListItemIcon>
        <ListItemText primary="Choose Language" />
      </ListItem>

      <Divider />

      <ListItem button>
        <ListItemIcon>
          <LocalOffer />
        </ListItemIcon>
        <ListItemText primary="Offer Zone" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Work />
        </ListItemIcon>
        <ListItemText primary="Sell on Flipkart" />
      </ListItem>

      <Divider />

      <ListItem button>
        <ListItemIcon>
          <Work />
        </ListItemIcon>
        <ListItemText primary="My Orders" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocalOffer />
        </ListItemIcon>
        <ListItemText primary="My Coupons" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary="My Cart" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>
        <ListItemText primary="My Wishlist" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="My Account" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Notifications />
        </ListItemIcon>
        <ListItemText primary="My Notifications" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Chat />
        </ListItemIcon>
        <ListItemText primary="My Chats" />
      </ListItem>
    </List>
  );
};

export default ListComponent;
