import React from "react";

export default function image({ image }) {
  return <img src={image.download_url} width={300} alt="" />;
}
