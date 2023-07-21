import { useIsFetching } from "@tanstack/react-query";
import React from "react";

export default function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();
  return isFetching ? <span>is global loading</span> : null;
}
