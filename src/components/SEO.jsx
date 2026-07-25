import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedAt,
  updatedAt,
  article,
  schema,
}) {
  const siteName = "Érzelmi Ösztönkód";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  const defaultDescription =
    "Fedezd fel érzelmi mintáidat, önismereti programokat és AI-alapú elemzéseket az Érzelmi Ösztönkód segítségével.";

  const finalDescription = description || defaultDescription;

  const url = canonical || "https://www.osztonkod.hu/";

  const ogImage =
    image || "https://www.osztonkod.hu/og-image.jpg";

  return (
    <Helmet>

      <html lang="hu" />

      <title>{fullTitle}</title>

      <meta
        name="description"
        content={finalDescription}
      />

      <meta
        name="robots"
        content="index,follow"
      />

      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={finalDescription}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:image"
        content={ogImage}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={finalDescription}
      />

      <meta
        name="twitter:image"
        content={ogImage}
      />

       {type === "article" && article && (
        <script type="application/ld+json">
            {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: fullTitle,
            description: finalDescription,
            image: ogImage,
            author: {
                "@type": "Organization",
                name: siteName,
            },
             publisher: {
                "@type": "Organization",
                name: siteName,
                logo: {
                    "@type": "ImageObject",
                    url: "https://www.osztonkod.hu/logo.png",
                },
                },
                            
            datePublished: publishedAt,
            dateModified: updatedAt || publishedAt,
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": url,
            },
            })}
        </script>
        )}

        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}



    </Helmet>
  );
}