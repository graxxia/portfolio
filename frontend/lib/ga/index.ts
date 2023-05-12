// log the pageview with their URL
export const pageview = (url) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        wait_for_update: 500,
      });
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? "", {
        page_location: url,
      });
    }
  };
  
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    if ( window  && window.gtag) {
    window.gtag('event', action, params)
    }
  }