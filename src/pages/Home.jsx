import Hero from "../components/Hero"
import LastBlogPosts from "../components/LastBlog"
import About from "../components/About"
import Products from "../components/Products"
import Faq from "../components/Faq"

export default function Home() {
  return (
    <div>
      <section><Hero /></section>
      <section><About /></section>
      <section><Products /></section>
      <section><Faq /></section>
      <section><LastBlogPosts /></section>
    </div>
  )
}

