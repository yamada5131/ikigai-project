export default function MainContent({ children }) {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4">{children}</div>
    </div>
  );
}
