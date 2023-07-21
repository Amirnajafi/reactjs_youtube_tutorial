import {
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import React, { useEffect } from "react";

const ReactQuery = () => {
  const queryclient = useQueryClient();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: ({ pageParam = 0 }) =>
      fetch(`https://cataas.com/api/cats?skip=${pageParam}&limit=10`).then(
        (resp) => resp.json()
      ),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.lenght !== 0 ? allPages.length : undefined;
    },
  });
  const handleAddCat = () => {
    queryclient.setQueryData(["cats"], (oldData: any) => [
      ...oldData,
      {
        _id: "2",
        tags: ["new", "new test 2"],
      },
    ]);
  };

  // if (error) return <div>Error: {`${error}`}</div>;
  return (
    <div>
      <button onClick={handleAddCat}> add new cat</button>
      {data &&
        data.pages.map((group, i) => {
          return group.map((item: any, index: number) => {
            return (
              <li key={index}>
                <span>{item._id}</span>
                <span>
                  -
                  {item.tags.map((tag: any) => {
                    return <span key={tag}>{tag} -</span>;
                  })}
                </span>
              </li>
            );
          });
        })}

      <div>
        <button
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => {
            fetchNextPage();
          }}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      {/* <button onClick={() => setPage(page - 1)}>prev</button>
      <button onClick={() => setPage(page + 1)}>next</button> */}
    </div>
  );
};

export default ReactQuery;
