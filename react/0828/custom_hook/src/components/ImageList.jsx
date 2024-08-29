import React, { useEffect, useRef, useState } from "react";
import Image from "./Image";
import Loading from "./Loading";
import useScroll from "../Hook/useScroll";

export default function ImageList() {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const pageToFetch = useRef(1);
  const isBottom = useScroll();

  const fetchImages = async (page) => {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  useEffect(() => {
    console.log("is loading?: ", isLoading);
  }, [isLoading]);

  useEffect(() => {
    const fetchAndSetImages = async () => {
      setIsLoading(true);
      const images = await fetchImages(page);
      setImageList((prev) => [...prev, ...images]);
      setIsLoading(false);
    };
    if (isBottom || page === 1) {
      fetchAndSetImages();
      setPage((prev) => prev + 1);
    }
  }, [isBottom]);
  

  useEffect(() => {
    console.log(imageList);
  }, [imageList]);

  return (
    <ul>
      {!isLoading ? (
        imageList.map((image) => (
          <li key={image.id} style={{ listStyle: "none" }}>
            <Image image={image} />
          </li>
        ))
      ) : (
        <Loading />
      )}
    </ul>
  );
}
