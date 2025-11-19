import { BadgeCheck, CaseSensitive, ChartNoAxesColumnIncreasing, Heart, MessageCircleMore } from "lucide-react";
import { Card, Separator } from "../ui";

function NewTopic() {
    return (
        <Card className="p-4 gap-4">
            <div className="h-fit flex items-center gap-4">
                <div className="h-full flex flex-col justify-between">
                    {/* 제목 */}
                    <div className="flex flex-col">
                        <CaseSensitive size={16} className="text-neutral-500" />
                        <p className="font-semibold text-base line-clamp-2">
                            NEW Topic 제목 조회 테스트 문구입니다. NEW Topic 제목 조회 테스트 문구입니다. NEW Topic 제목 조회 테스트 문구입니다. NEW Topic 제목 조회 테스트 문구입니다. NEW Topic 제목 조회 테스트 문구입니다.
                        </p>
                    </div>
                    {/* 본문 */}
                    <p className="text-neutral-500 line-clamp-3">
                        NEW Topic 본문 조회 테스트 문구입니다. NEW Topic 본문 조회 테스트 문구입니다. NEW Topic 본문 조회 테스트 문구입니다. NEW Topic 본문 조회 테스트 문구입니다. NEW Topic 본문 조회 테스트 문구입니다. NEW Topic 본문 조회 테스트
                        문구입니다. NEW Topic 본문 조회 테스트 문구입니다.
                    </p>
                </div>
                <div className="w-35 min-w-35 bg-accent rounded-md p-4">
                    {/* <img src="/vite.svg" alt="@SAMPLE_IMAGE" className="w-35 min-w-35 bg-accent rounded-md" /> */}
                    <img src="/vite.svg" alt="@SAMPLE_IMAGE" className="w-full bg-accent rounded-md" />
                </div>
            </div>
            <Separator />
            <div className="flex items-end justify-between">
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <BadgeCheck size={14} className="text-green-500 mb-0.5" />
                        <p>개발자 9Diin</p>
                    </div>
                    <div className="flex items-center text-neutral-500 text-xs gap-2">
                        <p>IT 및 기술분야</p>
                        <Separator orientation="vertical" className="h-3!" />
                        <p>소프트웨어 엔지니어</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <ChartNoAxesColumnIncreasing size={14} />
                            <p>24</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageCircleMore size={14} />
                            <p>0</p>
                        </div>
                    </div>
                    <Separator orientation="vertical" className="h-3!" />
                    <div className="flex items-center gap-1">
                        <Heart size={14} className="text-rose-500" />
                        <p>1</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export { NewTopic };
