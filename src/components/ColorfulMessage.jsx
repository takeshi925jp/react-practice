import React from "react";
export const ColorfulMessage = (props) => {
  const { color, children } = props;
  // スタイルはJSのオブジェクトとして定義
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
