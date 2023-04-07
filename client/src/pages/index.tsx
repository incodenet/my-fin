import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from 'antd';
import Statistics from './statistics/page-statistics';

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Statistics />
      <Layout>
        <Sider className="color-primary">Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
