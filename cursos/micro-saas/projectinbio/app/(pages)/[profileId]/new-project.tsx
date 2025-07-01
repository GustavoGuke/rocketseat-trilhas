"use client"
import { startTransition, useState } from "react";
import { ArrowUpFromLine, Plus } from "lucide-react";
import Modal from "@/app/components/ui/Modal";
import TextArea from "@/app/components/ui/TextArea"
import TextInput from "@/app/components/ui/TextInput";
import Button from "@/app/components/ui/Button";
import { compressFiles } from "@/app/lib/utils";
import { createProject } from "@/app/actions/create-project";
import { useRouter } from "next/navigation";

export default function NewProject({ profileId }: { profileId: string }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [projectName, setProjectName] = useState<string>("");
    const [projectDescription, setProjectDescription] = useState<string>("");
    const [projectUrl, setProjectUrl] = useState<string>("");
    const [projectImage, setProjectImage] = useState<string | null>(null);
    const [idCreatingProject, setIdCreatingProject] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    function triggerImageInput(inputId: string) {
        document.getElementById(inputId)?.click();
    }

    function handleImageInput(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            return imageUrl
        }
        return null
    }

    async function handleCreateProject() {
        setIdCreatingProject(true);
        const imageInput = document.getElementById("imageInput") as HTMLInputElement;

        if(!imageInput.files) return

        const compressedFile = await compressFiles(Array.from(imageInput.files));

        const formData = new FormData();
        formData.append("file", compressedFile[0]);
        formData.append("profileId", profileId);
        formData.append("projectName", projectName);
        formData.append("projectDescription", projectDescription);
        formData.append("projectUrl", projectUrl);

        await createProject(formData);
        startTransition(() => {
            setIsOpen(false);
            setIdCreatingProject(false);
            setProjectName("");
            setProjectDescription("");
            setProjectUrl("");
            setProjectImage(null);
            router.refresh()
        })
    }

    return (
        <>
            <button
                onClick={handleOpenModal}
                className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border hover:border-dashed border-border-secondary"
            >
                <Plus className="size-10 text-accent-green" />
                <span>Novo projeto</span>
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
                    <p className="text-white font-bold text-xl">Novo projeto</p>
                    <div className="flex gap-10">
                        <div className="flex flex-col items-center gap-3 text-xs">
                            <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
                                {
                                    projectImage ? (
                                        <img
                                            src={projectImage}
                                            alt="Projeto"
                                            className="object-cover object-center"
                                        />
                                    ) : (
                                        <button className="w-full h-full" onClick={() => triggerImageInput("imageInput")}>100x100</button>
                                    )
                                }

                            </div>
                            <button className="text-white flex items-center gap-2" onClick={() => triggerImageInput("imageInput")}>
                                <ArrowUpFromLine className="size-4" />
                                <span>Adicionar imagem</span>
                            </button>
                            <input
                                type="file"
                                id="imageInput"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => setProjectImage(handleImageInput(e))}
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-[293px]">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="project-name" className="text-white font-bold">
                                    Titulo do projeto
                                </label>
                                <TextInput
                                    id="project-name"
                                    placeholder="Digite o nome do projeto"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="project-description"
                                    className="text-white font-bold"
                                >
                                    Descrição
                                </label>
                                <TextArea
                                    id="project-description"
                                    placeholder="Dê uma breve descrição do seu projeto"
                                    className="h-36"
                                    value={projectDescription}
                                    onChange={(e) => setProjectDescription(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="project-url" className="text-white font-bold">
                                    URL do projeto
                                </label>
                                <TextInput
                                    type="url"
                                    id="project-description"
                                    placeholder="Digite a URL do projeto"
                                    value={projectUrl}
                                    onChange={(e) => setProjectUrl(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <button className="font-bold text-white" onClick={() => setIsOpen(false)}>Voltar</button>
                        <Button onClick={handleCreateProject} disabled={idCreatingProject}>Salvar</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}