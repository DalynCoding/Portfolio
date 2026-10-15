import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title }) => (
  <>
    <p className="flex items-center gap-3 text-sm font-medium text-blue-400 mb-3">
      <span className="h-px w-8 bg-blue-400/60" aria-hidden="true"></span>
      {label}
    </p>
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
  </>
);

export default SectionHeading;
