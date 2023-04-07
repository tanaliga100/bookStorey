import { toast } from "react-toastify";
import { cartActionCreator } from "../slices/cart-slice";
import { UiActionCreator } from "../slices/ui-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-cart-ce18e-default-rtdb.firebaseio.com/cart.json/"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data !");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActionCreator.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        UiActionCreator.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data unsuccessfull",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UiActionCreator.showNotification({
        status: "pending",
        title: "pending",
        message: "sending cart data",
      })
    );
    const sendRequests = async () => {
      const response = await fetch(
        "https://react-cart-ce18e-default-rtdb.firebaseio.com/cart.json/",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequests();
      dispatch(
        UiActionCreator.showNotification({
          status: "success",
          title: "Sucess",
          message: "Send cart data successfully",
        })
      );
      toast.success("Send cart data successfully", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } catch (error) {
      dispatch(
        UiActionCreator.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data unsuccessfull",
        })
      );
    }
  };
};
