import { MessageCircle } from "lucide-react";

export const Players = () => {
    return (
        <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
            <div className="flex w-[1100px] flex-col gap-4">

                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">Fundamentos Redux</h1>
                        <span className=" text-sm text-zinc-400">modulo 01</span>
                    </div>
                    <button className="flex items-center gap-2 bg-violet-500 rounded">
                        <MessageCircle className="w-p h-4"/>
                        Deixar feedback
                    </button>
                </div>


                <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">

                    <div className="flex-1">
                        video
                    </div>

                    <div className="w-80 border-l border-zinc-000 h-[600px]">

                    </div>

                </main>
            </div>
        </div>
    );
}


