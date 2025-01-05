

export default function Hero() {
  return (
    <div className="flex border">
        <div className="w-full flex flex-col gap-2 mt-[35vh] border">
            <h1 className="text-5xl font-bold text-white leading-[64px]">
                Seus projetos e redes sociais em um só lugar
            </h1>

            <h2 className="leading-6 text-xl">
                Crie sua própria página de projetos e compartilhe com a comunidade
                <br />
                Acompanhe o engajamento com Analytics de cliques
            </h2>
            <div className="flex items-center gap-2 w-full -mt-[10vh]">
                <span>projectinbio.com</span>
                <input type="text" />
                <button>Criar agora</button>
            </div>
        </div>

          <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB, transparent_55%)]">
              <div className="relative">
                  {/* <UserCard /> */}
                  <div className="absolute -bottom-[7%] -right-[45%]">
                      {/* <TotalVisits /> */}
                  </div>
                  <div className="absolute top-[20%] -left-[45%] -z-10">
                      {/* <ProjectCard /> */}
                  </div>
                  <div className="absolute -top-[5%] -left-[55%] -z-10">
                      {/* <ProjectCard /> */}
                  </div>
              </div>
          </div>

    </div>
  )
}
