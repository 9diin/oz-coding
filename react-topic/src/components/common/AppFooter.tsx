import { Button, Separator } from "../ui";

function AppFooter() {
    return (
        <footer className="w-full flex items-center justify-center p-6 bg-[#121212]">
            <div className="w-full max-w-[1328px] flex flex-col items-center justify-center">
                <div className="w-full flex items-start justify-between">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <h3 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">나의 학습 여정이,</h3>
                            <h3 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">나만의 창작으로 이어지는 플랫폼</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button>유튜브</Button>
                            <Button>스레드</Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-white">이용약관</p>
                        <Separator orientation="vertical" className="h-3!" />
                        <p className="text-white">개인정보처리방침</p>
                        <Separator orientation="vertical" className="h-3!" />
                        <p className="text-white">클래스 론칭 문의</p>
                    </div>
                </div>
                <Separator />
                <div>asdfasdfasdfasdf</div>
            </div>
        </footer>
    );
}

export { AppFooter };
