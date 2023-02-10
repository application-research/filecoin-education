import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import { Hero } from '@root/components/Hero';
import SectionVideo from '@root/components/SectionVideo';
import Navigation from '@root/components/Navigation';
import { SectionAboutUs } from '@root/components/SectionAboutUs';
import Button from '@root/components/Button';
import { CourseOutline } from '@root/components/SectionCourseOutline';
import Footer from '@root/components/Footer';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <Navigation />

      <Hero />
      <SectionVideo />
      <CourseOutline />
      <SectionAboutUs />
      <Footer />
    </DefaultLayout>
  );
}
