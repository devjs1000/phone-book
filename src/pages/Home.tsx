import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import UserCard from "../components/UserCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader";
import axios from "axios";

type User = {
  name: string;
  profile: string;
};
const Home = () => {
  const api = "https://randomuser.me/api/?results=10";
  const [data, setData] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = async () => {
    setTimeout(async () => {
      const resultData: any = await axios.get(api);
      const results = resultData.data.results;
      console.log(results);
      setData([...data, ...results]);
      setHasMore(resultData.data.results.length > 0);
    }, 1500);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <Box id="scrollableDiv" overflowY={"auto"} p={4} bg={"gray.100"}>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data.map((item: any, index) => {
          const profile = item.picture.medium;
          const name = `${item.name.first} ${item.name.last}`;
          return <UserCard key={index} name={name} profile={profile} />;
        })}
      </InfiniteScroll>
    </Box>
  );
};

export default Home;
