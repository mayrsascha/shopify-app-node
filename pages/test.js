import { Heading, Page } from "@shopify/polaris";

export async function getServerSideProps(ctx) {
  return { props: { text: 'Hello' } };
}

const Test = (props) => (
  <Page>
    <Heading>2nd Next.js page</Heading>
    {props.text}
  </Page>
);

export default Test;
