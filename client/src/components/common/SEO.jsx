import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  keywords,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content="Kundan Kumar Sahani"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:image"
        content="/preview.png"
      />
    </Helmet>
  );
}

export default SEO;