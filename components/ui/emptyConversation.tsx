import React from "react";

const EmptyConversation = () => {
  return (
    <>
      <svg
        id="changeColor"
        fill="#DC7633"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <path
            id="pathAttribute"
            d="M 43.839844 17.902344 L 321.339844 17.902344 L 321.339844 362.902344 L 43.839844 362.902344 Z M 43.839844 17.902344 "
            clipRule="nonzero"
            fill="#ff006a"
            filter="url(#bgShadow)"
          >
            <filter id="bgShadow">
              <feDropShadow
                id="bgShadowValue"
                stdDeviation=".5"
                dx="0"
                dy="0"
                floodColor="black"
              ></feDropShadow>
            </filter>
          </path>
        </defs>
        <path
          id="pathAttribute"
          d="M 321.335938 44.882812 L 43.839844 44.882812 L 43.839844 268.027344 L 321.335938 268.027344 C 321.335938 268.027344 321.335938 44.882812 321.335938 44.882812 M 182.519531 295.007812 L 294.320312 295.007812 C 309.242188 295.007812 321.335938 282.929688 321.335938 268.027344 L 43.839844 268.027344 C 43.839844 282.929688 55.933594 295.007812 70.859375 295.007812 L 156.816406 295.007812 C 155.984375 322.605469 157.300781 350 154.949219 362.902344 C 165.105469 340.960938 172.5 317.363281 182.519531 295.007812 M 294.320312 17.902344 L 70.859375 17.902344 C 55.933594 17.902344 43.839844 29.976562 43.839844 44.882812 L 321.335938 44.882812 C 321.335938 29.976562 309.242188 17.902344 294.320312 17.902344 "
          fillOpacity="1"
          fillRule="nonzero"
          fill="#ff006a"
          filter="url(#bgShadow)"
        ></path>
        <g id="inner-icon" transform="translate(85,55)">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="199.8"
            height="199.8"
            fill="currentColor"
            className="bi bi-chat"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            {" "}
            <path
              d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
              id="mainIconPathAttribute"
              fill="#ffffff"
              filter="url(#shadow)"
            ></path>{" "}
            <filter id="shadow">
              <feDropShadow
                id="shadowValue"
                stdDeviation=".5"
                dx="0"
                dy="0"
                floodColor="black"
              ></feDropShadow>
            </filter>
          </svg>{" "}
        </g>
      </svg>
    </>
  );
};

export default EmptyConversation;
