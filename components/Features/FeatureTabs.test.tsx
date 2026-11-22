import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { featureTabs } from '@/content/featureTabs';
import { FeatureTabs } from './FeatureTabs';

const renderTabs = () => render(<FeatureTabs heading="Heading" />);

describe('FeatureTabs', () => {
  it('shows the first tab’s content by default', () => {
    renderTabs();

    expect(screen.getByRole('tab', { name: featureTabs[0].label })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAccessibleName(featureTabs[0].label);
    expect(screen.getByRole('img', { name: featureTabs[0].image.alt })).toBeInTheDocument();
  });

  it('swaps the photo and chart on the right when another tab is clicked', async () => {
    const user = userEvent.setup();
    renderTabs();
    const [, second] = featureTabs;

    await user.click(screen.getByRole('tab', { name: second.label }));

    expect(screen.getByRole('tabpanel')).toHaveAccessibleName(second.label);
    expect(screen.getByRole('img', { name: second.image.alt })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: featureTabs[0].image.alt })).not.toBeInTheDocument();
    expect(
      screen.getByText(`${second.breakdown[0].percent}% - ${second.breakdown[0].label}`),
    ).toBeInTheDocument();
  });

  it('supports arrow keys, Home and End, keeping one tab in the tab order', async () => {
    const user = userEvent.setup();
    renderTabs();
    const tabs = screen.getAllByRole('tab');

    await user.click(tabs[0]);
    await user.keyboard('{ArrowDown}');
    expect(tabs[1]).toHaveFocus();
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    expect(tabs.filter((tab) => tab.tabIndex === 0)).toEqual([tabs[1]]);

    await user.keyboard('{End}');
    expect(tabs.at(-1)).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(tabs[0]).toHaveFocus();

    await user.keyboard('{ArrowUp}');
    expect(tabs.at(-1)).toHaveFocus();

    await user.keyboard('{Home}');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
  });
});
