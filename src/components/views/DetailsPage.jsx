import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const params = useParams();
  const details = useSelector((state) => state.cart.items);
  const selected = details.filter((detail, index, arr) => {
    if (detail.id === params.id) {
      return arr[0];
    }
  });
  return (
    <>
      {selected.map((book) => (
        <section key={book.id}>
          <img src={book.img} alt="book" />
          <div>{book.name}</div>
          <div>{book.price}</div>
          <div>{book.description}</div>
        </section>
      ))}
    </>
  );
};

export default DetailsPage;
