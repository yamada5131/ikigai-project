export default function SidebarItem({ href, icon: Icon, children }) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        {Icon && (
          <Icon className="size-5 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        )}
        <span className="ms-3 flex-1 whitespace-nowrap">{children}</span>
      </a>
    </li>
  );
}
