import Script from 'next/script';

export default function PlausibleAnalyticsScript() {
  return <Script defer data-domain="filecoin.education" src="https://plausible.io/js/script.js" />;
}
