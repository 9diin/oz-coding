import { ChartNoAxesCombined, ChevronDown, CodeXml, DraftingCompass, Footprints, Goal, Icon, Lightbulb, List, Rocket, Search } from "lucide-react";
import { Button, Input } from "./components/ui";
import { NewTopic } from "./components/topic";

const CATEGORIES = [
    // { icon: List, label: "전체" },
    { icon: Lightbulb, label: "인문학" },
    { icon: Rocket, label: "스타트업" },
    { icon: CodeXml, label: "IT·프로그래밍" },
    { icon: Goal, label: "서비스·전략 기획" },
    { icon: ChartNoAxesCombined, label: "마케팅" },
    { icon: DraftingCompass, label: "디자인·일러스트" },
    { icon: Footprints, label: "자기계발" },
];

function App() {
    return (
        <div className="w-full max-w-[1328px] h-full flex items-start py-6 gap-6">
            <aside className="w-60 min-w-60 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <p className="text-xl font-semibold">카테고리</p>
                    <ChevronDown />
                </div>
                <div className="flex flex-col gap-2">
                    <Button className="flex justify-start text-white bg-card hover:bg-card hover:text-white hover:pl-6 duration-500">
                        <List />
                        전체
                    </Button>
                    {CATEGORIES.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <Button className="flex justify-start text-neutral-500 bg-transparent hover:bg-card hover:text-white hover:pl-6 duration-500">
                                <IconComponent />
                                {category.label}
                            </Button>
                        );
                    })}
                </div>
            </aside>
            <div className="min-h-screen flex-1 flex flex-col gap-12">
                <section className="w-full flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <img src="/gifs/heart.gif" alt="@HEART_GIFS" className="w-8" />
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">지식과 인사이트를 모아,</h3>
                        </div>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">토픽으로 깊이 있게 나누세요!</h3>
                    </div>
                    {/* 검색창 */}
                    <div className="w-full max-w-lg flex items-center gap-2 border py-2 pl-4 pr-3 rounded-full">
                        <Search size={24} className="text-neutral-500 -mr-2" />
                        <Input placeholder="관심 있는 클래스, 토픽 주제를 검색하세요." className="border-none bg-transparent! focus-visible:ring-0 placeholder:text-base" />
                        <Button variant={"secondary"} className="rounded-full">
                            검색
                        </Button>
                    </div>
                </section>
                {/* HOT 토픽 */}
                <section>HOT 토픽 섹션</section>
                {/* NEW 토픽 */}
                <section className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <img src="/gifs/writing-hand.gif" alt="@WRITING-HAND_GIFS" className="w-7 mb-2" />
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">NEW 토픽</h4>
                        </div>
                        <p className="text-neutral-500 text-base">새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의 토픽을 작성해보세요.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <NewTopic />
                        <NewTopic />
                        <NewTopic />
                        <NewTopic />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
