import React, { useEffect, useState } from "react";
import type { position } from "../@types/position";

import SockJS from "sockjs-client";

import Stomp from "stompjs";

const usePosition = () => {
  const [po, setPo] = useState<position>({
    id:"asd",
    status:"active",
    x: 37.5502,
    y: 127.0743,
  });
  useEffect(() => {
    const sockJS = new SockJS("https://api.domarketdodo.shop/container-status");
    //const sockJS = new SockJS("http://43.201.20.124:8080/container-status");
    const stompClient = Stomp.over(sockJS);
    const connect = () => {
      stompClient.connect({}, onConnected, onError); // ②
    };
    const onConnected = () => {
      stompClient.subscribe("/topic/container", async (payload) => {
        const data = await JSON.parse(payload.body);
        setPo(data);
      });
    };
    const onError = () => {
      console.log(">>> DISCONNECT");
    };
    connect();
  }, []);
  return po;
};

export default usePosition;
