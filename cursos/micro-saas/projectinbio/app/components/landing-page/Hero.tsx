import ProjectCard from "../common/ProjectCard"
import TotalVisits from "../common/TotalVisit"
import UserCard from "../common/UserCard"
import Button from "../ui/Button"
import TextInput from "../ui/TextInput"


export default function Hero() {
  return (
    <div className="flex gap-5">
        <div className="w-full flex flex-col gap-2 mt-[35vh] ">
            <h1 className="text-5xl font-bold text-white leading-[64px]">
                Seus projetos e redes sociais em um só lugar
            </h1>

            <h2 className="leading-6 text-xl">
                Crie sua própria página de projetos e compartilhe com a comunidade
                <br />
                Acompanhe o engajamento com Analytics de cliques
            </h2>
            <div className="flex items-center gap-2 w-full mt-[10vh]">
                <span>projectinbio.com</span>
                <TextInput placeholder="Insira seu domínio" />
                <Button variant="primary">Criar</Button>
            </div>
        </div>

          <div className="w-full mt-[15vh] flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
              <div className="relative">
                  <UserCard />
                  <div className="absolute -bottom-[7%] -right-[45%]">
                      <TotalVisits />
                  </div>
                  <div className="absolute top-[20%] -left-[50%] -z-10">
                      <ProjectCard />
                  </div>
                  <div className="absolute -top-[5%] -left-[65%] -z-10">
                      <ProjectCard />
                  </div>
              </div>
          </div>

    </div>
  )
}
