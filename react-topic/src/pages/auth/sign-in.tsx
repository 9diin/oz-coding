import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label } from "@/components/ui";

function SignIn() {
    return (
        <div className="w-full max-w-[1328px] h-full flex items-center justify-center">
            <Card className="w-full max-w-sm border-0 bg-transparent">
                <CardHeader className="gap-0">
                    <CardTitle className="text-lg">로그인</CardTitle>
                    <CardDescription>로그인을 위한 정보를 입력해주세요</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">이메일</Label>
                                <Input id="email" type="email" placeholder="이메일을 입력하세요." required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">비밀번호</Label>
                                    <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                        비밀번호를 잊으셨나요?
                                    </a>
                                </div>
                                <Input id="password" type="password" required placeholder="비밀번호를 입력하세요." />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        로그인
                    </Button>
                    <Button variant="outline" className="w-full">
                        <img src="/icons/google.svg" alt="@GOOGLE" className="w-4" />
                        구글 로그인
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SignIn;
