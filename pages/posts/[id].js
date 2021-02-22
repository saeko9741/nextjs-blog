import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

// どんなページをを表示させるのか、ビルド時に準備しておくべきファイル
export async function getStaticPaths() {
  console.log('hoge')
  const paths = getAllPostIds()
  console.log('getStaticPaths', paths)
  return {
    paths,
    // 404を返す
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}