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
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
          <Card className="h-full transition-shadow group-hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base leading-snug">
                {post.metadata.title}
              </CardTitle>
              <Badge className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.metadata.publishedAt}>
                  {formatDate(post.metadata.publishedAt)}
                </time>
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {post.metadata.summary && (
                <p className="text-sm text-muted-foreground line-clamp-3">
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
