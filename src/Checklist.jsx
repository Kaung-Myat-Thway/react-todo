import React from "react";

export default function Checklist(props) {
  return (
    <div class="row px-5">
      <div class="col-4">
        <span class="float-start"> <span class="text-primary fs-4 px-2">{props.remainingItem()}</span>Item Remaining</span>
      </div>
      <div class="col-8">
        <button class="btn btn-primary mx-1" onClick={props.clearComplete}>Clear Complete </button>
        <button class="btn btn-primary mx-1" onClick={props.check ? props.checkAll : props.uncheckAll}>
          {props.check ? "Check All" : "Uncheck all"}
        </button>
      </div>
    </div>
  );
}
