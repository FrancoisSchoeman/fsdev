import { BlogPosts } from '@/components/posts';
import { getBlogPosts } from './utils';
import { baseUrl } from '../sitemap';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
};

export default function Page() {
  const allBlogs = getBlogPosts();

  const blogPostings = allBlogs.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    description: post.metadata.summary,
    datePublished: post.metadata.publishedAt,
    url: `${baseUrl}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: 'Francois Schoeman',
    },
  }));

  return (
    <section className="container px-4 md:px-0 py-16 lg:max-w-screen-lg">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Francois Schoeman Blog',
            description:
              'Insights and articles about software development, web technologies, and programming.',
            url: `${baseUrl}/blog`,
            author: {
              '@type': 'Person',
              name: 'Francois Schoeman',
            },
            blogPost: blogPostings,
          }),
        }}
      />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight leading-tight lg:text-5xl mb-8">
        My Blog
      </h1>
      <BlogPosts />
    </section>
  );
}
