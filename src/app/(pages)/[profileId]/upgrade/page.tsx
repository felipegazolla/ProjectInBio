import { Header } from '@/components/landing/Header'
import { Button } from '@/components/ui/Button'

export default async function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      <div className="flex mt-10 gap-4">
        <div className="flex items-end gap-9">
          <div className="w-[304px] p-8 flex flex-col gap-7 rounded-2xl border border-[#1E1E1E]">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">Mensal</span>
              <span className="text-content-body">Apenas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-[48px]">R$9,90</span>
              <span className="text-content-headline text-2xl">/mês</span>
            </div>
            <Button variant="secondary">Assinar</Button>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center rounded-t-2xl p-2 w-[304px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
              <span className="uppercase text-xs font-bold">Recomendado</span>
            </div>
            <div className="p-[1.6px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] rounded-b-2xl">
              <div className="w-full bg-background-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl">
                    Vitalício
                  </span>
                  <span className="text-content-body">Economize com</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold text-[48px]">
                    R$99,90
                  </span>
                </div>
                <Button variant="secondary">Assinar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
