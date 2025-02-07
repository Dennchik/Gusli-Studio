import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = ({ seoData }) => {
    if (!seoData) {
        return null; // Agar seoData bo'sh bo'lsa, hech narsa qaytarilmaydi
    }

    const {
        title,
        description,
        robots,
        og_title,
        og_description,
        og_site_name,
        article_published_time,
        article_modified_time,
        twitter_card,
        twitter_misc,
    } = seoData;
    return (
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {robots && (
                <meta
                    name="robots"
                    content={`${robots.index}, ${robots.follow}`}
                />
            )}
            {og_title && <meta property="og:title" content={og_title} />}
            {og_description && <meta property="og:description" content={og_description} />}
            {og_site_name && <meta property="og:site_name" content={og_site_name} />}
            {article_published_time && (
                <meta
                    property="article:published_time"
                    content={article_published_time}
                />
            )}
            {article_modified_time && (
                <meta
                    property="article:modified_time"
                    content={article_modified_time}
                />
            )}
            {twitter_card && <meta name="twitter:card" content={twitter_card} />}
            {twitter_misc &&
                Object.entries(twitter_misc).map(([key, value]) => (
                    <meta name={`twitter:${key}`} content={value} key={key} />
                ))}
        </Helmet>
    );
};
// PropTypes validatsiyasi
Seo.propTypes = {
    seoData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        robots: PropTypes.shape({
            index: PropTypes.string,
            follow: PropTypes.string,
        }),
        og_title: PropTypes.string,
        og_description: PropTypes.string,
        og_site_name: PropTypes.string,
        article_published_time: PropTypes.string,
        article_modified_time: PropTypes.string,
        twitter_card: PropTypes.string,
        twitter_misc: PropTypes.objectOf(PropTypes.string),
    }),
};

export default Seo;