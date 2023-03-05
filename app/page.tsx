import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import { SectionEmailSignup } from '@root/components/SectionEmailSignup';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <SectionEmailSignup />
    </DefaultLayout>
  );
}
