import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../store/slices/ui-slice";
import CartItem from "./CartItem";

const Cart = () => {
  const itemList = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(UiActions.toggle());
  };

  return (
    <Container fixed>
      {itemList.length < 1 ? (
        <>
          <Typography
            marginTop={3}
            variant="subtitle2"
            fontWeight="900"
            fontSize=".8rem"
            sx={{
              backgroundColor: "orange",
              padding: ".3rem",
              textAlign: "center",
            }}
          >
            You have no products added...
          </Typography>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={toggle}
            sx={{ marginTop: 5 }}
          >
            {" "}
            Add One{" "}
          </Button>
        </>
      ) : (
        <Typography
          marginTop={3}
          variant="subtitle2"
          fontWeight="900"
          fontSize=".8rem"
          sx={{
            backgroundColor: "orange",
            padding: ".3rem",
            textAlign: "center",
          }}
        >
          Products You Added
        </Typography>
      )}
      <Stack>
        {itemList.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              description: item.description,
            }}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Cart;
