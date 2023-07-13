import Animated from '@/componets/Animated'
import Layout from '@/componets/Layout'
import Head from 'next/head'
import React from 'react'

function blog() {
  return (
    <div>
        <Head>
        <title>blog</title>
        <meta name="asrat adane" content="any discription" />
      </Head>
      <main>
        <Layout>
            <Animated text="Sharing is Caring"/>
        </Layout>
      </main>
    </div>
  )
}

export default blog