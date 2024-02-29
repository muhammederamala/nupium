import React, { useEffect } from "react";

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

const GoogleTranslateWidget = () => {
  useEffect(() => {
    const loadGoogleTranslateScript = async () => {
      try {
        await loadScript(
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en" },
            "google_translate_element"
          );
        };
      } catch (error) {
        console.error("Failed to load Google Translate script:", error);
      }
    };

    loadGoogleTranslateScript();

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslateWidget;
