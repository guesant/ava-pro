import React, { FormEvent } from "react";
import { useContextSelector } from "use-context-selector";
import { AddRoomContext } from "./AddRoomContext";

const AddRoomForm: React.FC = ({ children }) => {
  const isValid = useContextSelector(AddRoomContext, ({ isValid }) => isValid);

  const saveRoom = useContextSelector(
    AddRoomContext,
    ({ saveRoom }) => saveRoom
  );

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isValid && saveRoom();
  };

  return <form onSubmit={handleFormSubmit}>{children}</form>;
};

export default AddRoomForm;
