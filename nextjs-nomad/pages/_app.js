import Layout from "@/component/Layout"

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App
