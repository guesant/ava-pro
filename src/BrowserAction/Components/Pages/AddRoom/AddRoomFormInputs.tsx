import React from "react";
import AddRoomFormInputName from "./AddRoomFormInputName";
import AddRoomFormInputUrl from "./AddRoomFormInputUrl";

const AddRoomFormInputs: React.FC = () => (
  <div className="pageSpacing">
    <AddRoomFormInputName />
    <AddRoomFormInputUrl />
  </div>
);

export default AddRoomFormInputs;
