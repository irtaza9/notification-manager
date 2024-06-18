import { Helmet } from "react-helmet-async";

const Head = ({ children, title, description, type, name }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title : "Push Notification"}</title>
        <link rel="canonical" href="https://www.nayatel.com/" />
        <meta name="description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </>
  );
};

export default Head;
