import { BlogPosts } from '@/components/posts';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
};

export default function Page() {
  return (
    <section className="container px-4 md:px-0 py-16 lg:max-w-screen-lg">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight leading-tight lg:text-5xl mb-8">
        My Blog
      </h1>
      <BlogPosts />
    </section>
  );
}
