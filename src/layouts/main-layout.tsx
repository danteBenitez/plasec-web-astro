import { type ReactNode } from 'react';

export default function MainLayout(props: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full font-thin">
      {props.children}
    </div>
  );
}
