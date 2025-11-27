import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import supabase from "@/utils/supabase";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Separator } from "@/components/ui";
import { ArrowLeft, Asterisk, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const formSchema = z
    .object({
        email: z.email({
            error: "올바른 형식의 이메일 주소를 입력해주세요.",
        }),
        password: z.string().min(8, {
            error: "비밀번호는 최소 8자 이상이어야 합니다.",
        }),
        confirmPassword: z.string().min(8, {
            error: "비밀번호 확인을 입력해주세요.",
        }),
        nickname: z.string().trim().regex(/^\S+$/, "공백을 포함할 수 없습니다.").min(2),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
        if (password !== confirmPassword) {
            ctx.addIssue({
                code: "custom",
                message: "비밀번호가 일치하지 않습니다.",
                path: ["confirmPassword"],
            });
        }
    });

function SignUp() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const navigate = useNavigate();
    // 필수 동의항목 상태값
    const [serviceAgreed, setServiceAgreed] = useState<boolean>(false); // 서비스 이용약관 동의 여부
    const [privacyAgreed, setPrivacyAgreed] = useState<boolean>(false); // 개인정보 수집 및 이용동의 여부
    const [marketingAgreed, setMarketingAgreed] = useState<boolean>(false); // 마케팅 및 광고 수신 동의 여부

    const handleCheckService = () => setServiceAgreed(!serviceAgreed);
    const handleCheckPrivacy = () => setPrivacyAgreed(!privacyAgreed);
    const handleCheckMarketing = () => setMarketingAgreed(!marketingAgreed);

    // 컴포넌트 마운트 시에만 실행되도록 useEffect의 의존성은 비워둡니다. ([])
    useEffect(() => {
        // 1. 초기 세션 확인 (Initial Session Check)
        // - 애플리케이션이 로드되거나 새로고침 되었을 때, Supabase에 저장된 현재 세션 정보를 확인합니다.
        // - 세션이 유효하다면, 그 즉시 전역 상태(Zustand Store)에 사용자 정보를 설정합니다.
        const checkSession = async () => {
            // 현재 세션 정보를 비동기적으로 가져옵니다.
            try {
                const {
                    data: { session },
                } = await supabase.auth.getSession();

                // 세션과 사용자 정보가 존재하면,
                if (session?.user) {
                    navigate("/"); // => 로그인된 상태라면, 메인 페이지로 리디렉션 or 현재 유저가 보고 있는 페이지로 리디렉션
                }
                // 세션이 없다면, setUser(null)을 할 필요는 없습니다. 리스너가 처리할 것입니다.
            } catch (error) {
                console.log(error);
                throw error;
            }
        };

        // 초기 세션 확인 함수를 즉시 호출합니다.
        checkSession();
    }, []);

    // 일반 회원가입
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!serviceAgreed || !privacyAgreed) {
            toast.warning("잠깐! 필수 동의가 아직 완료되지 않았어요!");
            return;
        }

        try {
            const {
                data: { user, session },
                error: signUpError,
            } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
                options: {
                    data: {
                        display_name: values.nickname,
                    },
                },
            });

            if (signUpError) {
                toast.error(signUpError.message === "User already registered" ? "이미 가입된 계정입니다." : "회원가입 중 오류가 발생했습니다.");
                return;
            }

            // user와 session 두 값 모두 null이 아닐 경우에만 회원가입이 완료되었음을 의미
            if (user && session) {
                const { error: updateUserError } = await supabase.from("users").insert([
                    {
                        id: user.id,
                        email: user.email,
                        nickname: values.nickname,
                        service_agreed: serviceAgreed,
                        privacy_agreed: privacyAgreed,
                        marketing_agreed: marketingAgreed,
                    },
                ]);

                if (updateUserError) {
                    toast.error(updateUserError.message);
                }

                // 회원가입 성공 시,
                toast.success("회원가입을 완료하였습니다.");
                navigate("/sign-in"); // => 로그인 페이지로 리디렉션
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return (
        <div className="w-full max-w-[1328px] h-full flex items-center justify-center">
            <Card className="w-full max-w-sm border-0 bg-transparent">
                <CardHeader className="gap-0">
                    <CardTitle className="text-lg">회원가입</CardTitle>
                    <CardDescription>회원가입을 위한 정보를 입력해주세요</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="nickname"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-1">
                                            <Asterisk className="text-[#FA6859]" size={14} />
                                            <FormLabel>닉네임</FormLabel>
                                        </div>
                                        <FormControl>
                                            <Input placeholder="닉네임을 입력하세요." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-1">
                                            <Asterisk className="text-[#FA6859]" size={14} />
                                            <FormLabel>이메일</FormLabel>
                                        </div>
                                        <FormControl>
                                            <Input placeholder="이메일을 입력하세요." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-1">
                                            <Asterisk className="text-[#FA6859]" size={14} />
                                            <FormLabel>비밀번호</FormLabel>
                                        </div>
                                        <FormControl>
                                            <Input type="password" placeholder="비밀번호를 입력하세요." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-1">
                                            <Asterisk className="text-[#FA6859]" size={14} />
                                            <FormLabel>비밀번호 확인</FormLabel>
                                        </div>
                                        <FormControl>
                                            <Input type="password" placeholder="비밀번호 확인을 입력하세요." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* 필수 동의항목 */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <Asterisk className="text-[#FA6859]" size={14} />
                                    <p>필수 동의항목</p>
                                </div>
                                {/* 서비스 이용약관 동의 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox className="w-[18px] h-[18px]" checked={serviceAgreed} onCheckedChange={handleCheckService} />
                                        <p>서비스 이용약관 동의</p>
                                    </div>
                                    <Button variant={"link"} className="p-0! gap-1 text-xs">
                                        자세히
                                        <ChevronRight />
                                    </Button>
                                </div>
                                {/* 개인정보 수집 및 이용동의 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox className="w-[18px] h-[18px]" checked={privacyAgreed} onCheckedChange={handleCheckPrivacy} />
                                        <p>개인정보 수집 및 이용동의</p>
                                    </div>
                                    <Button variant={"link"} className="p-0! gap-1 text-xs">
                                        자세히
                                        <ChevronRight />
                                    </Button>
                                </div>
                            </div>
                            <Separator />
                            {/* 선택 동의항목 */}
                            <div className="flex flex-col">
                                <p>선택 동의항목</p>
                                {/* 서비스 이용약관 동의 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox className="w-[18px] h-[18px]" checked={marketingAgreed} onCheckedChange={handleCheckMarketing} />
                                        <p>마케팅 및 광고 수신 동의</p>
                                    </div>
                                    <Button variant={"link"} className="p-0! gap-1 text-xs">
                                        자세히
                                        <ChevronRight />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant={"outline"} size={"icon"}>
                                    <ArrowLeft />
                                </Button>
                                <Button type="submit" className="flex-1">
                                    회원가입
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <div className="w-full flex items-center justify-center gap-2 -mt-3">
                        <p>이미 계정이 있으신가요?</p>
                        {/* <Button variant={"link"} className="p-0 underline" onClick={() => navigate("/sign-up")}>
                            회원가입
                        </Button> */}
                        <NavLink to={"/sign-in"} className="underline underline-offset-4">
                            로그인
                        </NavLink>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SignUp;
