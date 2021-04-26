import { Heading, Page } from "@shopify/polaris";
import NextLink from 'next/link';

const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
    <NextLink href="/test">Go to test page</NextLink>
  </Page>
);

export default Index;
