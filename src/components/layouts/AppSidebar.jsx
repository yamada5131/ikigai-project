import {
	HiArrowSmRight,
	HiHome,
	HiInbox,
	HiTable,
	HiUser,
	HiViewBoards,
} from "react-icons/hi";
import Sidebar from "./Sidebar";
import SidebarItem from "./Sidebar/SidebarItem";
import SidebarItemGroup from "./Sidebar/SidebarItemGroup";
import SidebarItems from "./Sidebar/SidebarItems";
import SidebarLogo from "./Sidebar/SidebarLogo";
export default function AppSidebar() {
	return (
		<Sidebar aria-label="Sidebar with logo branding example">
			<SidebarLogo href="#" img="/favicon.svg" imgAlt="">
				Ikigai
			</SidebarLogo>
			<SidebarItems>
				<SidebarItemGroup>
					<SidebarItem href="/" icon={HiHome}>
						ホームぺ-ジ
					</SidebarItem>
					<SidebarItem href="/classes/:id" icon={HiViewBoards}>
						クラス詳細
					</SidebarItem>
					<SidebarItem href="/notifications/create" icon={HiInbox}>
						通知を作成
					</SidebarItem>
					<SidebarItem href="#" icon={HiArrowSmRight}>
						ログアウト
					</SidebarItem>
					{/* <SidebarItem href="#" icon={HiArrowSmRight}>
						Sign In
					</SidebarItem>
					<SidebarItem href="#" icon={HiTable}>
						Sign Up
					</SidebarItem> */}
				</SidebarItemGroup>
			</SidebarItems>
		</Sidebar>
	);
}
