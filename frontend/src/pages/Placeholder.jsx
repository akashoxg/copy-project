const Placeholder = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center p-8 text-center">
    <div>
      <h1 className="font-display font-bold text-3xl text-brand-navy mb-4">{title}</h1>
      <p className="text-brand-text-secondary">This page is under construction.</p>
    </div>
  </div>
);

export default Placeholder;
