export default function MainContent({ children }) {
  return (
    <div className="p-4 sm:ml-64">
      <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
}
