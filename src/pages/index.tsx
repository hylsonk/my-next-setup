import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Input from '../components/ui/atoms/input/input';
import SampleForm from '../components/ui/templates/sampleForm';

const Home: React.FC = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <SampleForm/>
      </main>
    </div>
  );
};

export default Home