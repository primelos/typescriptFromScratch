import React from "react";
import CartCSS from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      e.target as HTMLSpanElement;
    }
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          console.log("cart", state);
          const itemsCount = state.cart.items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0);
          return (
            <div className={CartCSS.cartContainer}>
              <button
                type="button"
                className={CartCSS.button}
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{
                  display: this.state.isOpen === true ? "block" : "none",
                }}
              >
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times;{item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
