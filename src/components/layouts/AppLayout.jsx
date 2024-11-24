import AppSidebar from "./AppSidebar";
import MainContent from "./MainContent";

export default function AppLayout({ children }) {
  return (
    <>
      <AppSidebar />
      <MainContent>{children}</MainContent>
    </>
  );
}
