import { AppFooter, AppHeader } from "@/components/common";
import { Outlet } from "react-router";

function RootLayout() {
    return (
        <div className="w-full h-screen flex flex-col bg-red-500">
            <AppHeader />
            {/* 페이지별 콘텐츠 영역 */}
            <Outlet />
            <AppFooter />
        </div>
    );
}

export default RootLayout;
