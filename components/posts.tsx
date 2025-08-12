import Link from 'next/link';
import { formatDate, getBlogPosts } from '@/app/blog/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';
import { Calendar } from 'lucide-react';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  const posts = allBlogs.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, idx) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group focus:outline-none"
        >
          <Card
            className="relative h-full overflow-hidden border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 focus-within:-translate-y-1 focus-within:shadow-xl focus-within:border-primary/40 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/20),transparent_70%)] before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100"
            style={{ animationDelay: `${idx * 40}ms` }}
          >
            <CardHeader className="relative z-[1]">
              <CardTitle className="text-base leading-snug transition-colors duration-300 group-hover:text-primary">
                {post.metadata.title}
              </CardTitle>
              <Badge className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.metadata.publishedAt}>
                  {formatDate(post.metadata.publishedAt)}
                </time>
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4 relative z-[1]">
              {post.metadata.summary && (
                <p className="text-sm text-muted-foreground line-clamp-3 transition-colors duration-300 group-hover:text-muted-foreground/90">
                  {post.metadata.summary}
                </p>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
