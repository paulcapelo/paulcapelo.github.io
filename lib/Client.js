import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "74j5y384",
  dataset: "production",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "v1",
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
