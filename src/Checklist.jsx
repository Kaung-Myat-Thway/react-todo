import React from "react";

export default function Checklist(props) {
  return (
    <div className="row px-5">
      <div className="col-4">
        <span className="float-start"> <span className="text-primary fs-4 px-2">{props.remainingItem()}</span>Item Remaining</span>
      </div>
      <div className="col-8">
        <button className="btn btn-primary mx-1" onClick={props.clearComplete}>Clear Complete </button>
        <button className="btn btn-primary mx-1" onClick={props.check ? props.checkAll : props.uncheckAll}>
          {props.check ? "Check All" : "Uncheck all"}
        </button>
      </div>
    </div>
  );
}
