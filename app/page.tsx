import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import { EmailSignUpHero } from '@root/components/EmailSignupHero';
import Footer from '@root/components/Footer';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <EmailSignUpHero />
    </DefaultLayout>
  );
}
