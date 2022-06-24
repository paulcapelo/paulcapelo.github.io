import React from "react";
import { useRouter } from "next/router";
import { client } from "../lib/Client";
const Search = (props) => {
  const router = useRouter();
  console.log(props);

  const { q = "*" } = router?.query;

  return <div>input </div>;
};

export default Search;

export const getServerSideProps = async (prop) => {
  const { q = "all" } = prop?.query;
  console.log("prop", q);

  const query = `*[_type == "product" && title=='${q}']`;
  const products = await client.fetch(query);

  return { props: { products } };
};

//https://codesandbox.io/embed/github/algolia/doc-code-samples/tree/master/InstantSearch.js/getting-started
