import { HtmlHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface BlockQuoteProps {
  quote: string;
  quotee: string;
}

export const BlockQuote = ({
  quote,
  quotee,
  className,
  ...props
}: BlockQuoteProps & HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={twMerge('text-center flex flex-col gap-4', className)} {...props}>
      <h2 className="text-lg md:text-xl text-slate-800">&quot;{quote}&quot;</h2>
      <p className="text-slate-600">&mdash; {quotee}</p>
    </div>
  );
};
