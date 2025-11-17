import { AppFooter, AppHeader } from "@/components/common";

function SignUp() {
    return (
        <div>
            <AppHeader />
            <main className="w-full flex-1 flex justify-center">
                <div className="w-full max-w-[1328px] h-full flex items-center justify-center bg-red-500"></div>
            </main>
            <AppFooter />
        </div>
    );
}

export default SignUp;
