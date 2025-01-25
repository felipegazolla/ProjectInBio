import { ProjectCard } from '../commons/ProjectCard'
import { TotalVisits } from '../commons/TotalVisits'
import UserCard from '../commons/userCard/UserCard'
import CreateNow from '../ui/CreateNow'

export default function Hero({
  texts,
}: {
  texts?: {
    title: string
    description: string
  }
}) {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
      {/* Texto e Botão */}
      <div className="w-full flex flex-col gap-4 mt-16 lg:mt-[35vh] px-6 lg:px-12 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight lg:leading-[64px]">
          {texts?.title || 'Seus projetos e redes sociais em um único link'}
        </h1>
        <h2 className="text-lg lg:text-xl text-gray-200 leading-6">
          {texts?.description ||
            'Crie sua própria página de projetos e compartilhe eles com o mundo.'}
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>
        <div className="mt-4">
          <CreateNow />
        </div>
      </div>

      {/* Imagem e Cartões */}
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)] py-12 lg:py-0">
        <div className="relative max-w-sm lg:max-w-none">
          <UserCard isOwner={false} />
          {/* TotalVisits */}
          <div className="absolute -bottom-12 lg:-bottom-[23%] right-4 lg:-right-[45%]">
            <TotalVisits totalVisits={4923} />
          </div>
          {/* Cartões de Projetos */}
          <div className="absolute top-10 left-4 lg:top-[20%] lg:-left-[45%] -z-10">
            <ProjectCard
              name="Petshop"
              description="A platform to buy and sell pet products."
              img={'/1.svg'}
            />
          </div>
          <div className="absolute -top-10 left-10 lg:-top-[5%] lg:-left-[55%] -z-10">
            <ProjectCard
              name="Drink Marketplace"
              description="A platform to buy and sell beverages."
              isOwner={true}
              img={'/2.svg'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
