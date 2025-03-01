import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("title");

    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag("description", t("description"));
    updateMetaTag("keywords", t("keywords"));
    updateMetaTag("author", "Łukasz Męcała");

    updateMetaTag("og:title", t("title"));
    updateMetaTag("og:description", t("description"));
    updateMetaTag("og:type", "website");
    updateMetaTag("og:image", "/seoimg.jpg");

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", t("title"));
    updateMetaTag("twitter:description", t("description"));
  }, [t]);

  return null; // Nie renderujemy niczego w JSX, bo wszystko dzieje się w `head`
};

export default SEO;
