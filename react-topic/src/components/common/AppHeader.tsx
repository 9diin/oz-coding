import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "@/store/auth";
import { Separator } from "../ui";

function AppHeader() {
    // const user = useAuthStore((state) => state.user);
    // const reset = useAuthStore((state) => state.reset);
    const { user, reset } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        reset();
        navigate("/sign-in");
    };

    return (
        <header className="fixed z-30 w-full h-12 min-h-12 flex items-center justify-center bg-[#121212] px-6">
            <div className="w-full max-w-[1328px] h-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* <img src="" alt="@LOGO" /> */}
                    <NavLink to={"/"}>토픽 인사이트</NavLink>
                    <Separator orientation="vertical" className="h-3!" />
                    <NavLink to={"/user/:id/profile"}>프로필</NavLink>
                    <Separator orientation="vertical" className="h-3!" />
                    <NavLink to={"/"}>우리가 하는 일</NavLink>
                </div>
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span>{user.email}</span>
                            <Separator orientation="vertical" className="h-3!" />
                            <span className="cursor-pointer" onClick={handleLogout}>
                                로그아웃
                            </span>
                        </div>
                    ) : (
                        <NavLink to={"/sign-in"} className="text-neutral-400 hover:text-white duration-300">
                            로그인
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    );
}

export { AppHeader };
