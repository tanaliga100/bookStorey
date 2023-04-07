import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActionCreator } from "../store/slices/cart-slice";

const CartItem = (props) => {
  const { name, quantity, description, total, price, id } = props.item;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActionCreator.addItemToCart({
        id,
        name,
        price,
        description,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActionCreator.removeItemCart(id));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle2" fontWeight="900" fontSize=".8rem">
        {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Typography
          variant="caption"
          color="success"
          fontSize=".6rem"
          fontWeight="600"
        >
          Qty:{" "}
        </Typography>
        <Typography
          variant="caption"
          color="warning"
          fontSize=".6rem"
          fontWeight="600"
        >
          x{quantity}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Typography
          variant="caption"
          color="warning"
          fontSize=".6rem"
          fontWeight="600"
        >
          Price:
        </Typography>
        <Typography
          variant="caption"
          color="warning"
          fontSize=".6rem"
          fontWeight="600"
        >
          ${price.toFixed(2)}/item
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Typography
          variant="caption"
          color="warning"
          fontSize=".6rem"
          fontWeight="600"
        >
          Total:
        </Typography>
        <Typography
          variant="caption"
          color="warning"
          fontSize=".6rem"
          fontWeight="600"
        >
          ${total.toFixed(2)}
        </Typography>
      </Box>
      <Divider sx={{ mt: 1, mb: 1 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<RemoveIcon />}
          onClick={removeItemHandler}
        >
          Remove
        </Button>
        <Button
          variant="outlined"
          color="success"
          size="small"
          endIcon={<AddIcon />}
          onClick={addItemHandler}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default CartItem;
