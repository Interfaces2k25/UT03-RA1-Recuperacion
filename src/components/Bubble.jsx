function Bubble({ children }) {
    return (
      <div className="bg-[var(--color-secondary)] text-center p-4 rounded-xl max-w-xl mx-auto mt-6">
        <p className="text-sm text-[var(--color-primary)]">{children}</p>
      </div>
    );
  }
  
  export default Bubble;
  