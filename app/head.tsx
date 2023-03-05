import DefaultMetaTags from '@components/DefaultMetaTags';

export default async function Head({ params }) {
  const title = 'Filecoin Education';
  const description = 'Enroll into the most comprehensive Filecoin and Web3 certificate program on the new internet.';
  const url = 'www.filecoin.education';
  const image = 'https://user-images.githubusercontent.com/28320272/222938353-9c59e585-a6ba-48c5-8980-dd3967fdbfdc.png';

  return (
    <>
      <title>{title}</title>
      <DefaultMetaTags />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content={image} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </>
  );
}
