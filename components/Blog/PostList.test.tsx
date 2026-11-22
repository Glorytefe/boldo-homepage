import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { POSTS_PER_PAGE, posts } from '@/content/posts';
import { PostList } from './PostList';

describe('PostList', () => {
  it('shows the first page of posts, then the rest after "Load more"', async () => {
    const user = userEvent.setup();
    render(<PostList posts={posts} />);

    expect(screen.getAllByRole('article')).toHaveLength(POSTS_PER_PAGE);

    await user.click(screen.getByRole('button', { name: 'Load more' }));

    expect(screen.getAllByRole('article')).toHaveLength(posts.length);
  });

  it('moves focus to the first newly loaded post', async () => {
    const user = userEvent.setup();
    render(<PostList posts={posts} />);

    await user.click(screen.getByRole('button', { name: 'Load more' }));

    expect(screen.getByRole('heading', { name: posts[POSTS_PER_PAGE].title })).toHaveFocus();
  });

  it('offers "Show less" once every post is shown, collapsing back to the first page', async () => {
    const user = userEvent.setup();
    render(<PostList posts={posts} />);

    await user.click(screen.getByRole('button', { name: 'Load more' }));
    const showLess = screen.getByRole('button', { name: 'Show less' });
    await user.click(showLess);

    expect(screen.getAllByRole('article')).toHaveLength(POSTS_PER_PAGE);
    expect(screen.getByRole('button', { name: 'Load more' })).toBe(showLess);
    expect(showLess).toHaveFocus();
    expect(showLess.closest('div')!.scrollIntoView).toHaveBeenCalled();
  });

  it(`shows no "Load more" button when there are ${POSTS_PER_PAGE} posts or fewer`, () => {
    render(<PostList posts={posts.slice(0, POSTS_PER_PAGE)} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
