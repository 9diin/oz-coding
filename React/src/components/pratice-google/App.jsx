import { FlaskConical, Github, Grip, ImagePlus, Instagram, Mic, PencilLine, Plus, Search, User, Youtube } from "lucide-react";

function App() {
    const shortcuts = [
        {
            icon: "YouTube",
            title: "YouTube",
        },
        {
            icon: "Github",
            title: "Github",
        },
        {
            icon: "Instagram",
            title: "Instagram",
        },
    ];

    const handleAddShorcut = () => {};

    return (
        <div className="relative w-full h-screen flex flex-col items-center">
            <header className="w-full flex justify-end py-4 px-6">
                <div className="flex items-center gap-4">
                    <a href="#" className="text-sm">
                        Gmail
                    </a>
                    <a href="#" className="text-sm">
                        이미지
                    </a>
                    <button className="cursor-pointer">
                        <FlaskConical size={20} />
                    </button>
                    <button className="cursor-pointer">
                        <Grip size={20} />
                    </button>
                    <button className="cursor-pointer">
                        <User size={20} />
                    </button>
                </div>
            </header>
            <main className="w-full flex flex-col items-center mt-20 gap-10">
                {/* GOOGLE LOGO */}
                <img src="src/assets/google-logo.png" alt="@LOGO" className="w-[272px]" />
                {/* SEARCH BAR */}
                <div className="w-full max-w-[746px] flex items-center px-5 py-3 gap-3 rounded-full border/30 shadow-sm">
                    <Search size={20} className="text-neutral-500" />
                    <input type="text" className="flex-1 outline-0" placeholder="검색어를 입력하세요." />
                    <Mic size={20} className="text-neutral-500" />
                    <ImagePlus size={20} className="text-neutral-500" />
                </div>
                {/* SHORT CUTS */}
                <div className="flex items-center">
                    {/* 개별 SHORT CUT */}
                    {shortcuts.map((shortcut) => (
                        <button className="w-27 h-27 flex flex-col items-center justify-center gap-3 rounded-md hover:bg-neutral-200 cursor-pointer">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100">
                                {shortcut.icon === "YouTube" && <Youtube size={20} />}
                                {shortcut.icon === "Github" && <Github size={20} />}
                                {shortcut.icon === "Instagram" && <Instagram size={20} />}
                            </div>
                            <p className="text-sm">{shortcut.title}</p>
                        </button>
                    ))}
                    {/* 바로가기 추가 */}
                    <button className="w-27 h-27 flex flex-col items-center justify-center gap-3 rounded-md hover:bg-neutral-200 cursor-pointer" onClick={handleAddShorcut}>
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#004a77]">
                            <Plus size={20} className="text-white" />
                        </div>
                        <p className="text-sm">바로가기 추가</p>
                    </button>
                </div>
            </main>
            <button className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-full bg-neutral-100 cursor-pointer">
                <PencilLine size={16} />
                <p className="text-sm">Chrome 맞춤설정</p>
            </button>
        </div>
    );
}

export default App;
