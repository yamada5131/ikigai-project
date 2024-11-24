export default function SidebarLogo({ href, img, imgAlt, children }) {
  return (
    <a href={href} className="mb-5 flex items-center ps-2.5">
      <img src={img} alt={imgAlt} className="me-3 h-6 sm:h-7" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {children}
      </span>
    </a>
  );
}
