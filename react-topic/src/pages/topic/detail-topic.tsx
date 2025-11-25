// 우리가 필요한 정보
// - title: 제목
// - created_at: 작성일
// - content: 내용
// - thumbnail: 썸네일
// - category: 카테고리

import { AppTextEditor } from "@/components/common";
import { Button, Separator } from "@/components/ui";
import supabase from "@/utils/supabase";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";

import dayjs from "dayjs";

interface Topic {
    id: number;
    author: string;
    category: string;
    content: string;
    created_at: string | Date;
    status: string;
    thumbnail: string;
    title: string;
}

// http://localhost:5173/topic/topic_id
function DetailTopic() {
    const { topic_id } = useParams();
    const [topic, setTopic] = useState<Topic>();

    const fetchTopic = async () => {
        try {
            const { data, error } = await supabase
                .from("topics")
                .select("*")
                // Filters
                .eq("id", topic_id);

            if (error) {
                toast.error(error.message);
                return;
            }

            console.log("data: ", data);

            if (data) {
                setTopic(data[0]);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        fetchTopic();
    }, []);

    return (
        <div className="w-full max-w-[1328px] min-h-[720px] flex-1 flex justify-center pb-6">
            {/* 제목, 카테고리, 썸네일, 버튼박스 영역 */}
            <div className="relative w-full h-100 bg-cover bg-position-[50%_50%]" style={{ backgroundImage: `url(${topic?.thumbnail})` }}>
                <div className="relative z-20 flex flex-col gap-6">
                    <div className="flex items-center gap-2 mt-6">
                        {/* 뒤로 가기 */}
                        <Button variant={"outline"} size={"icon"}>
                            <ArrowLeft />
                        </Button>
                        {/* 삭제 */}
                        <Button variant={"outline"} size={"icon"} className="bg-red-900/50!">
                            <Trash2 />
                        </Button>
                    </div>
                    <div className="flex flex-col items-center gap-6 mt-28">
                        {/* 카테고리 */}
                        <span># {topic?.category}</span>
                        {/* 제목 */}
                        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">{topic?.title}</h1>
                        <Separator className="w-6! bg-white" />
                        {/* 작성일 */}
                        <span>{dayjs(topic?.created_at).format("YYYY. MM. DD")}</span>
                    </div>
                </div>

                {/* 좌, 우, 하단 그라데이션 */}
                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-l from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>
            {/* 콘텐츠 영역 */}
            <div>{topic && <AppTextEditor props={JSON.parse(topic.content)} />}</div>
        </div>
    );
}

export default DetailTopic;
