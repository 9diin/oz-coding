import { useRef, useState } from "react";
import { AppTextEditor } from "@/components/common";
import { Button, Input, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Separator } from "@/components/ui";
import { Asterisk, Image, ImageOff } from "lucide-react";

function CreateTopic() {
    const [title, setTitle] = useState<string | null>(null);
    const [content, setContent] = useState(null);
    const [category, setCategory] = useState<string | null>(null);
    const [thumbnail, setThumbnail] = useState<File | string | null>(null);
    // => File 타입의 원본 데이터를 받음
    // => Supabase의 이미지만 관리하는 Storage에 전달받은 File을 저장 => URL 형식으로
    // => Supabase 데이터베이스에 저장 (in topics 테이블의 thumbnail 컬럼)

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // 파일 변화 감지 및 상태값 할당
    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        // if (event.target.files) {
        //     setThumbnail(event.target.files[0]);
        // } else {
        //     setThumbnail(null);
        // }
        setThumbnail(event.target.files?.[0] ?? null);

        console.log("event.target.files: ", event.target.files);
        console.log("event.target.value: ", event.target.value);

        // 동일 파일 선택이 불가능할 수 있으므로 event.target.value를 초기화
        event.target.value = "";
    };

    return (
        <main className="w-full flex-1 flex justify-center">
            <div className="w-full max-w-[1328px] h-full flex gap-6 py-6">
                {/* STEP 01 */}
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col">
                        <p className="font-medium text-[#FA6859]">Step 1</p>
                        <p className="font-semibold text-base">토픽 작성하기</p>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <Asterisk size={14} className="text-[#FA6859]" />
                                <p className="text-neutral-500 text-base">제목</p>
                            </div>
                            <Input placeholder="토픽 제목을 입력하세요." className="h-16 placeholder:text-lg placeholder:font-semibold text-lg! font-semibold px-5 border-none" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <Asterisk size={14} className="text-[#FA6859]" />
                                <p className="text-neutral-500 text-base">본문</p>
                            </div>
                            {/* Blocknote 텍스트 에디터 UI */}
                            <div className="w-full h-screen">
                                <AppTextEditor />
                            </div>
                        </div>
                    </div>
                </div>
                {/* STEP 02 */}
                <div className="w-[314px] min-w-[314px] flex flex-col gap-6">
                    <div className="flex flex-col">
                        <p className="font-medium text-[#FA6859]">Step 2</p>
                        <p className="font-semibold text-base">카테고리 및 썸네일 등록</p>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-6">
                        {/* 카테고리 */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <Asterisk size={14} className="text-[#FA6859]" />
                                <p className="text-neutral-500 text-base">카테고리</p>
                            </div>
                            {/* 셀렉트 박스 */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="토픽(주제) 선택" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>카테고리(주제)</SelectLabel>
                                        <SelectItem value="humidity">인문학</SelectItem>
                                        <SelectItem value="start-up">스타트업</SelectItem>
                                        <SelectItem value="programming">IT&middot;프로그래밍</SelectItem>
                                        <SelectItem value="planning">서비스&middot;전략 기획</SelectItem>
                                        <SelectItem value="marketing">마케팅</SelectItem>
                                        <SelectItem value="design">디자인&middot;일러스트</SelectItem>
                                        <SelectItem value="self-development">자기계발</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* 썸네일 */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <Asterisk size={14} className="text-[#FA6859]" />
                                <p className="text-neutral-500 text-base">썸네일</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-full aspect-video flex items-center justify-center rounded-md bg-card">
                                    <Button variant={"ghost"} size={"icon"} onClick={() => fileInputRef.current?.click()}>
                                        <Image />
                                    </Button>
                                    <Input type="file" accept="image/*" ref={fileInputRef} onChange={handleChangeFile} className="hidden" />
                                </div>
                                {/* 썸네일 제거 버튼 */}
                                <Button variant={"secondary"} className="bg-card" onClick={() => setThumbnail(null)}>
                                    <ImageOff />
                                    썸네일 제거
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CreateTopic;
