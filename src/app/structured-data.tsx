export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SquaredSymbol",
    "url": "https://squaredsymbol.com",
    "description": "Your comprehensive resource for the squared symbol (²). Learn how to type, copy, and use the superscript 2 symbol across different platforms and applications.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://squaredsymbol.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://twitter.com/squaredsymbol",
      "https://facebook.com/squaredsymbol"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
