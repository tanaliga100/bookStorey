import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid, Pagination, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../store/slices/ui-slice";
import Cart from "../views/Cart";
import { AppBar, DrawerHeader, Main, drawerWidth } from "../wrapper";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { DUMMY_PRODUCTS } from "../data/dummy";
import Sidebar from "../views/Menu";
import ProductItem from "../views/ProductItem";
export default function MainLayout() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isVisible = useSelector((state) => state.ui.cartIsVisible);
  const handleToggle = () => {
    dispatch(UiActions.toggle());
  };

  const [page, setPage] = React.useState(1);
  const prodPerPage = 10;
  const totalProds = DUMMY_PRODUCTS.length;
  const totalPages = Math.ceil(totalProds / prodPerPage);

  const handlePageChange = (e, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * prodPerPage;
  const endIndex = startIndex + prodPerPage;
  const displayedProducts = DUMMY_PRODUCTS.slice(startIndex, endIndex);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={isVisible}>
        <Toolbar
          sx={{
            height: "5rem",
            // background: `url(${headerBackground})`,
            background: "black",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            variant="h6"
            fontFamily="Poppins"
            fontWeight="800"
            fontSize="1rem"
            color="crimson"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Book
            <main style={{ color: "white" }}>storeY</main>
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleToggle}
            sx={{ ...(isVisible && { display: "none" }) }}
          >
            {/* <MenuIcon /> */}
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                "&:hover": {
                  color: "red",
                  cursor: "pointer",
                },
              }}
            >
              <Typography variant="body2" fontSize=".5em" paddingRight=".7rem">
                Cart
              </Typography>
              <ShoppingCartIcon />
            </Stack>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={isVisible}>
        <DrawerHeader />
        <Box pt={5}>
          <Grid container spacing={6} height="100%">
            <Grid item md={3} xs={12}>
              <Typography variant="subtitle2" fontWeight="900" fontSize=".8rem">
                Browse Categories
              </Typography>
              <Box
                mt={4}
                sx={{
                  // background: `url(${sidebarBackground})`,
                  // background: "whitesmoke",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Sidebar />
              </Box>
            </Grid>
            <Grid item md={9} xs>
              <Typography variant="subtitle2" fontWeight="900" fontSize=".8rem">
                List of Products
              </Typography>
              <Grid
                container
                spacing={1}
                direction="row"
                textAlign="center"
                mt={3}
              >
                {displayedProducts.map((product) => (
                  <Grid item key={product.id} xs="auto">
                    <ProductItem {...product} />
                  </Grid>
                ))}
              </Grid>
              <Box mt={3} display="flex" justifyContent="flex-end">
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  shape="rounded"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={isVisible}
      >
        <DrawerHeader>
          <IconButton onClick={handleToggle}>
            {theme.direction === "rtl" ? (
              <Stack>
                <ShoppingCartIcon />
              </Stack>
            ) : (
              <>
                <Stack direction="row">
                  {/* <ShoppingCartIcon /> */}
                  <ArrowForwardIosIcon />
                </Stack>
              </>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* CART ITEM HERE  */}
        {isVisible && <Cart />}
      </Drawer>
    </Box>
  );
}
