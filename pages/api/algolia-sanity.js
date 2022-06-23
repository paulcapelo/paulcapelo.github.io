import algoliasearch from "algoliasearch";
import { client } from "@/lib/Client";
import indexer, { flattenBlocks } from "sanity-algolia";


//  20b8705f927d0d69d96a92dbff769bc4



const algolia = algoliasearch();
const sanity = client;

export default function handler(req, res) {
  const sanityAlgolia = indexer(
    {
      post: {
        index: algolia.initIndex("posts"),
      },
    },
    (document) => {
      switch (document._type) {
        case "post":
          return {
            title: document.title,
            path: document.slug.current,
            publishedAt: document.publishedAt,
            excerpt: flattenBlocks(document.excerpt),
          };
        default:
          throw new Error(`Unknown type: ${document.type}`);
      }
    }
  );

  return sanityAlgolia
    .webhookSync(sanity, req.body)
    .then(() => res.status(200).send("ok"));
}
