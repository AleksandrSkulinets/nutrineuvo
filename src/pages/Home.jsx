import Hero from "../components/Hero"
import LastBlogPosts from "../components/LastBlog"
import About from "../components/About"

export default function Home() {
  return (
    <div>
      <section><Hero /></section>
      <section><About /></section>
      <section><LastBlogPosts /></section>
    </div>
  )
}

