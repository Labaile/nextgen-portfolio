import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'NextGen Portfolio Studio',
  description: 'NextGen Portfolio Studio',
};

const layout = ({children}: {children: React.ReactNode}) => {
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  );
};

export default layout;