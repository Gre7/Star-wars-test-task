import type { Metadata } from 'next';

import MainPageBanner from '@/widgets/MainPageBanner/MainPageBanner';

export const metadata: Metadata = {
  title: 'Star Wars Pet-project',
};

export default function HomePage() {
  return <MainPageBanner />;
}
