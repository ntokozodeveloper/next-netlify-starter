import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Forex Robots Secure Payments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Forex Robots" />
        <p className="description">
          Visit <code>fxrobots.co.za</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
