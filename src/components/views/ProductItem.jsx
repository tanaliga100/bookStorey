import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Modal,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActionCreator } from "../store/slices/cart-slice";

const style = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 300,
  minHeight: 300,
  borderRadius: "5px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const ProductItem = (products) => {
  const { id, name, price, description } = products;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActionCreator.addItemToCart({
        id: id,
        price: price,
        name: name,
        description: description,
      })
    );
    toast("Added to Cart");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Link onClick={handleOpen} underline="none">
        <Card sx={{ maxWidth: 160, height: 220, alignItems: "center" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ paddingTop: ".6rem" }}
              height="100"
              image={products.img}
              alt="books"
            />
            <CardContent>
              <Typography gutterBottom fontSize=".7rem" fontWeight="600">
                {products.name}
              </Typography>
              <Typography
                color="text.secondary"
                fontSize=".5rem"
                fontWeight="300"
              >
                {products.description.slice(0, 50)}...
              </Typography>
              <Divider sx={{ margin: ".3em 0" }} />
              <Typography
                gutterBottom
                fontSize=".7rem"
                fontWeight="200"
                color="error"
              >
                ${products.price}.00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" fontSize="1rem" fontWeight="800">
            {products.name}
          </Typography>
          <Divider />
          <img
            style={{ marginTop: ".8rem" }}
            src={products.img}
            alt="book"
            width="auto"
            height={100}
          />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            fontSize=".5rem"
            fontWeight="300"
          >
            <Typography
              color="error"
              fontSize=".7rem"
              fontWeight="500"
              textAlign="start"
              margin=".3rem 0"
            >
              Overview :
            </Typography>
            {products.description}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              fontSize=".8rem"
              fontWeight="800"
            >
              ${products.price}.00
            </Typography>

            <Button
              sx={{ marginTop: 2 }}
              variant="contained"
              color="warning"
              size="small"
              endIcon={<AddShoppingCartIcon />}
              onClick={addToCartHandler}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
export default ProductItem;
