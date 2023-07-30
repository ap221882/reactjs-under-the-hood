import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Blog from "@/containers/Blog/Blog";
import RecentBlogs from "@/containers/RecentBlogs/RecentBlogs";

export default function BlogPage() {
  return (
    <main>
      <NavBar />
      <Blog />
      <RecentBlogs />
      <Footer />
    </main>
  );
}
