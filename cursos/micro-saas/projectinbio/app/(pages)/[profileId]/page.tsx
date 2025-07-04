import { verifyLink } from "@/app/actions/verify-link";
import ProjectCard from "@/app/components/common/ProjectCard";
import TotalVisits from "@/app/components/common/TotalVisit";
import UserCard from "@/app/components/common/UserCard";
import { auth } from "@/app/lib/auth";
import { getProfileData, getProfileProjects } from "@/app/server/get-profile-data";
import { Plus } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import NewProject from "./new-project";
import { getDownloadURLFrmPath } from "@/app/lib/firebase";

export default async function ProfilePage({ params, }: { params: Promise<{ profileId: string }> }) {
    const { profileId } = await params;

    const profileData = await getProfileData(profileId)
    if (!profileData) return notFound()

    const projects = await getProfileProjects(profileId)

    const session = await auth()
    const isOwner = profileData.userId === session?.user?.id
    


    return (
        <div className="relative h-screen flex p-20 overflow-hidden">
            <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
                <span>Você está usando a versão trial.</span>
                <Link href={`/${profileId}/upgrade`}>
                    <button className="text-accent-green font-bold">
                        Faça o upgrade agora!
                    </button>
                </Link>
            </div>
            <div className="w-1/2 flex justify-center h-min">
                <UserCard />
            </div>
            <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
                {isOwner && <NewProject profileId={profileId} />}
                
                {
                    projects.map(async(project, index) => (
                        <ProjectCard key={project.id}  
                            project={project}
                            isOwner={isOwner}
                            imgUrl={await getDownloadURLFrmPath(project.imagePath) || ""}
                            />
                    ))
                }
            </div>
            <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
                <TotalVisits />
            </div>
        </div>
    );
}