import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sagar Furniture | Custom Furniture in Duba, Jharkhand',
  description: 'Beautiful custom-made beds, sofas, wardrobes, doors and furniture. Call or WhatsApp Sagar Furniture for a quote.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
