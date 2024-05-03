import axios from "axios";
import Card from "./Card";
import React, { Suspense, useEffect, useState } from "react";
import { CardSectionType } from "@/types/ComponentPropsType";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const CardSection = ({ queryState }: CardSectionType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const BASE_URL = "https://yt-trend-zu4u.vercel.app";
        const url = buildUrl(BASE_URL);
        const response = await axios.get(url);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [queryState]);

  function buildUrl(BASE_URL: string) {
    const { Countrycode, Catcode } = queryState;
    let url = `${BASE_URL}/api/?`;
    // if(Countrycode && Catcode )
    if (Countrycode) url += `Countrycode=${Countrycode}&`;
    if (Catcode) url += `Catcode=${Catcode}&`;
    return url;
  }

  const Loader = () => {
    const temp = Array(10).fill(1);
    return (
      <section className=" grid grid-cols-3 grid-flow-row max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-4 mt-10 ">
        {temp.map((_, index) => (
          <div
            key={index}
            className="w-[300px] h-[350px] overflow-auto max-sm:w-[200px] max-sm:h-[300px] max-sm:mr-4 rounded-md backdrop-blur-md"
          >
            <Skeleton sx={{ bgcolor: "#27374D" }} width={310} height={300} />
            <Skeleton sx={{ bgcolor: "#27374D" }}  />
            <Skeleton sx={{ bgcolor: "#27374D" }} />
          </div>
        ))}
      </section>
    );
  };

  if (loading) return <Loader />;

  return (
    // <Suspense fallback={<Loader />}>
    <section className=" grid grid-cols-3 grid-flow-row max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-4 mt-10 ">
      {data?.map((el: any) => (
        <Card
          id={el.id}
          key={el.id}
          title={el.snippet.title}
          desc={el.snippet.description}
          thumbnail={el.snippet.thumbnails.high.url}
          viewCount={el.statistics.viewCount}
          likeCount={el.statistics.likeCount}
          commentCount={el.statistics.commentCount}
        />
      ))}
    </section>
    // </Suspense>
  );
};

export default CardSection;

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000`)
//   const data = await res.json()
//   // Pass data to the page via props
//   return { props: { data } }
// }