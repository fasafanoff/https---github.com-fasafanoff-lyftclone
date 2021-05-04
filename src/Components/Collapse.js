import React from "react";
import Col from "react-bootstrap/Collapse";
import { useState } from "react";
import "./Collapse.css";
const Collapse = ({ children = "something", title = "title" }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="qcollapse">
      <div className="qcollapse__toggle" onClick={() => setOpen(!open)}>
        <div className="qcollapse__togglecontainer">
          <div className="qcollapse__title">
            <h3>{title}</h3>
          </div>
          <div className="qcollapse__button">
            {open ? (
              <i class="fas fa-minus-circle"></i>
            ) : (
              <i class="fas fa-plus-circle"></i>
            )}
          </div>
        </div>
      </div>
      <Col in={open}>
        <div className="qcollapse__content">{children}</div>
      </Col>
    </div>
  );
};

export default Collapse;
