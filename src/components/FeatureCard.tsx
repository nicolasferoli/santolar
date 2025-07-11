import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  marginTop?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  marginTop = "" 
}) => {
  return (
    <article className={`bg-gradient-to-br from-amber-50 to-yellow-100 w-full overflow-hidden py-8 px-8 rounded-[20px] border border-yellow-200 shadow-sm max-md:px-5 ${marginTop}`}>
      <h3 className="text-gray-800 text-lg font-bold mb-3">
        {title}
      </h3>
      <div className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
        <div className="bg-amber-400 flex w-2 shrink-0 h-2 mt-2 rounded-full" />
        <p className="flex-1">
          {description}
        </p>
      </div>
    </article>
  );
};
