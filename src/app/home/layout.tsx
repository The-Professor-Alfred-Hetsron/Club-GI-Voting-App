import { Header,Footer } from "@/components";

export default function HomeLayout(
    { 
        children,
    }: {
        children: React.ReactNode,
    }
){
    return (
        <main className="w-screen h-screen flex flex-col justify-between items-center overflow-y-auto">
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}