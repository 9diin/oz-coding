import { Card, Separator } from "../ui";
import { BadgeCheck } from "lucide-react";

function HotTopic() {
    return (
        <Card className="p-0 gap-4 border-0 bg-transparent">
            <div className="relative">
                <img src="/images/bg-sample.png" alt="@BG-SAMOPLE" className="h-70 rounded-lg" />
                <p className="absolute bottom-4 z-10 px-4 font-semibold text-xl line-clamp-2">
                    NEW Topic 제목 조회 테스트 문구입니다. NEW Topic 제목 조회 테스트 문구입니다. NEW Topic 제목 조회 테스트 문구입니다. NEW Topic 제목 조회 테스트 문구입니다. NEW Topic 제목 조회 테스트 문구입니다.
                </p>
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent rounded-b-lg"></div>
            </div>
            {/* <UserInfo props={props} /> */}
            <div className="flex flex-col">
                <div className="flex items-center gap-1">
                    <BadgeCheck size={14} className="text-green-500 mb-0.5" />
                    <p className="mb-[3px] text-neutral-500">알 수 없는 사용자</p>
                </div>
                <div className="flex items-center text-neutral-500 text-xs gap-2">
                    <p>IT 및 기술분야</p>
                    <Separator orientation="vertical" className="h-3!" />
                    <p>소프트웨어 엔지니어</p>
                </div>
            </div>
        </Card>
    );
}

export { HotTopic };
