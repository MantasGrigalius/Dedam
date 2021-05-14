import React from "react";

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? "active" : ""}>Prisijungti</div>
      <div className={props.step2 ? "active" : ""}>Pristatymas</div>
      <div className={props.step3 ? "active" : ""}>Apmokėjimas</div>
      <div className={props.step4 ? "active" : ""}>Patvirtinti užsakymą</div>
    </div>
  );
}
