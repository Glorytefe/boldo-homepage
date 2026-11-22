import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { posts } from '@/content/posts';
import { PostList } from './PostList';
import styles from './Blog.module.scss';

export function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <SectionHeading
        label="Our Blog"
        title="Value proposition accelerator product management venture"
      />
      <PostList posts={posts} />
    </section>
  );
}
