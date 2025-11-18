import { useState } from "react";
import { NavLink } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Separator } from "@/components/ui";
import { ArrowLeft, Asterisk, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import supabase from "@/utils/supabase";

const formSchema = z.object({
    email: z.email("올바른 형식의 이메일 주소를 입력해주세요."),
    password: z.string().min(8, {
        message: "비밀번호는 최소한 8자 이상으로 작성해주세요.",
    }),
    confirmPassword: z.string().min(8, {
        message: "비밀번호 확인을 입력해주세요.",
    }),
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

    // 필수 동의항목 상태값
    const [serviceAgreed, setServiceAgreed] = useState<boolean>(true); // 서비스 이용약관 동의 여부
    const [privacyAgreed, setPrivacyAgreed] = useState<boolean>(true);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("values: ", values);

        if (!serviceAgreed || !privacyAgreed) {
            toast.warning("잠깐! 필수 동의가 아직 완료되지 않았어요!");
            return;
        }

        try {
            const { data, error: supabaseError } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
            });

            console.log(supabaseError);
            console.log("data:", data);
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
                                        <Checkbox className="w-[18px] h-[18px]" />
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
                                        <Checkbox className="w-[18px] h-[18px]" />
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
                                        <Checkbox className="w-[18px] h-[18px]" />
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
