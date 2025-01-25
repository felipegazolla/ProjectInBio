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
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          {texts?.title || 'Seus projetos e redes sociais em um único link'}
        </h1>
        <h2 className="text-xl leading-6">
          {texts?.description ||
            'Crie sua própria página de projetos e compartilhe eles com mundo.'}
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>
        <CreateNow />
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative">
          <UserCard isOwner={false} />
          <div className="absolute -bottom-[23%] -right-[45%]">
            <TotalVisits totalVisits={4923} />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard
              name="Petshop"
              description="A platform to buy and sell pet products."
              img={'/1.svg'}
            />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
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
