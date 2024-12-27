export default function Sidebar({ children, ...props }) {
	return (
		<aside
			className="fixed left-0 top-0 z-40 h-screen w-64 bg-gray-50 px-3 py-4 dark:bg-gray-800"
			{...props}
		>
			{children}
		</aside>
	);
}
