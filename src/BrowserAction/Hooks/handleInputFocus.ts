import React from "react";

export const handleInputFocus = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
) => e.target.select();
