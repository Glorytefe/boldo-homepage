'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/Button/Button';
import { POSTS_PER_PAGE, type Post } from '@/content/posts';
import styles from './Blog.module.scss';

const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });

export function PostList({ posts }: { posts: Post[] }) {
  const [visible, setVisible] = useState(POSTS_PER_PAGE);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRowRef = useRef<HTMLDivElement>(null);
  const firstNewIndex = useRef<number | null>(null);
  const justCollapsed = useRef(false);

  const showingAll = visible >= posts.length;

  useEffect(() => {
    if (firstNewIndex.current !== null) {
      listRef.current?.children[firstNewIndex.current]?.querySelector('h3')?.focus();
      firstNewIndex.current = null;
    } else if (justCollapsed.current) {
      buttonRowRef.current?.scrollIntoView({ block: 'center' });
      justCollapsed.current = false;
    }
  }, [visible]);

  const loadMore = () => {
    firstNewIndex.current = visible;
    setVisible((count) => Math.min(count + POSTS_PER_PAGE, posts.length));
  };

  const showLess = () => {
    justCollapsed.current = true;
    setVisible(POSTS_PER_PAGE);
  };

  return (
    <>
      <ul ref={listRef} id="blog-posts" className={styles.grid}>
        {posts.slice(0, visible).map((post) => (
          <li key={post.title}>
            <article className={styles.post}>
              <Image
                className={styles.image}
                src={post.image}
                alt=""
                width={300}
                height={209}
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 33vw, 100vw"
              />
              <p className={styles.meta}>
                <span className={styles.category}>{post.category}</span>
                <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
              </p>
              <h3 className={styles.title} tabIndex={-1}>
                {post.title}
              </h3>
              <p className={styles.author}>
                <Image
                  className={styles.avatar}
                  src={post.author.avatar}
                  alt=""
                  width={32}
                  height={32}
                />
                {post.author.name}
              </p>
            </article>
          </li>
        ))}
      </ul>

      {posts.length > POSTS_PER_PAGE && (
        <div ref={buttonRowRef} className={styles.more}>
          <Button
            variant="outline"
            aria-controls="blog-posts"
            onClick={showingAll ? showLess : loadMore}
          >
            {showingAll ? 'Show less' : 'Load more'}
          </Button>
        </div>
      )}
    </>
  );
}
