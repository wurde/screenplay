import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

export default graphcms;
