import Head from 'next/head';
import UserProfile from '../src/components/Auth/UserProfile';
import s from '../src/components/Auth/auth.module.scss';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

type Props = {
  // Add custom props here
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'profile', 'signup'])),
  },
});

export default function Profile(_props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('profile');
  return (
    <div className={s.container}>
      <Head>
        <title>profile</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={s.main}>
        <h1>{t('profile_h1')}</h1>
        {<UserProfile />}
      </main>
    </div>
  );
}
