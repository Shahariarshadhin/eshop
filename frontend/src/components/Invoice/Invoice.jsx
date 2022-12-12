import React from "react";
import "./Invoice.css";
const Invoice = (props) => {
  const order = props.orderInfo;
  console.log(order);
  return (
    <div className="Invoice">
      <h1 style={{ textAlign: "center" }}>
        <u>Invoice</u>
      </h1>
      <div className="grid_container">
        <div className="grid_item">
          <span>
            <b>Name: </b> <span>{order.user.name}</span>
          </span>
          <span>
            <b>Email: </b>
            <span><span>{order.user.email}</span></span>
          </span>
          <span>
            <b>Address: </b>
            <span>{order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}</span>
          </span>
        </div>
        <div className="grid_item"></div>
        <div className="grid_item">
          <span>
            <b>Invoice#</b> <span>{order._id}</span>
          </span>
          <span>
            <b>Date:</b> <span>{order.createdAt}</span>
          </span>
        </div>
      </div>
      <div className="productListTable">
        <h1 style={{ textAlign: "center" }}>Order Items</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qnt</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.orderItems.map((item) => {
              return <tr>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.qty * item.price}</td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
      <div className="grid_container">
        <div className="grid_item customer_info"></div>
        <div className="grid_item"></div>
        <div className="grid_item table_summer">
          <h1 style={{ textAlign: "center" }}>Summery</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Item</b>
                </td>
                <td>{order.itemsPrice}</td>
              </tr>
              <tr>
                <td>
                  <b>Shipping</b>
                </td>
                <td>{order.shippingPrice}</td>
              </tr>
              <tr>
                <td>
                  <b>Tax</b>
                </td>
                <td>{order.taxPrice}</td>
              </tr>
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td>{order.totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
