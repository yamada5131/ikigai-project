import {
  HiViewBoards,
  HiInbox,
  HiUser,
  HiArrowSmRight,
  HiTable,
  HiHome,
} from "react-icons/hi";
import Sidebar from "./Sidebar";
import SidebarLogo from "./Sidebar/SidebarLogo";
import SidebarItems from "./Sidebar/SidebarItems";
import SidebarItemGroup from "./Sidebar/SidebarItemGroup";
import SidebarItem from "./Sidebar/SidebarItem";
export default function AppSidebar() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <SidebarLogo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
        Flowbite
      </SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiHome}>
            ホームぺ-ジ
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards}>
            クラス詳細
          </SidebarItem>
          <SidebarItem href="#" icon={HiInbox}>
            Inbox
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            ユーザー
          </SidebarItem>
          <SidebarItem href="#" icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem href="#" icon={HiTable}>
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
