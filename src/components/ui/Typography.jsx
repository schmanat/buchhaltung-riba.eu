export const H2 = ({ title }) => (
  <h2 className="my-10 scroll-m-20 pb-2 text-3xl tracking-tight transition-colors first:mt-0 text-white">
    {title}
  </h2>
);

export const H3 = ({ title }) => (
  <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
    {title}
  </h3>
);

export const List = ({ children }) => (
  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
);
