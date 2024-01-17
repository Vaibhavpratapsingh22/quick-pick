"use client"
import React, { use, useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("05533017-8f98-4f61-946f-283deae36a43");
  }, []);
  return null;
};

export default CrispChat;
