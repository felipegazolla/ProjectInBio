import { TRIAL_DAYS } from '@/lib/config'
import { Button } from '../ui/Button'

export function Pricing() {
  return (
    <div className="my-[100px] flex flex-col items-center gap-10 px-6 lg:px-0">
      {/* Cabeçalho e Descrição */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-white">
          Um valor acessível para todos
        </h3>
        <p className="text-content-body text-base lg:text-xl">
          Junte-se à comunidade de criadores profissionais que já estão elevando
          sua <br className="hidden sm:block" />
          presença online. Teste gratuitamente por{' '}
          <strong className="text-accent-pink">{TRIAL_DAYS} dias</strong>, sem
          compromisso!
        </p>
      </div>

      {/* Planos de Preço */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-9">
        {/* Plano Mensal */}
        <div className="w-full max-w-[304px] p-6 lg:p-8 flex flex-col gap-6 rounded-2xl border border-[#1E1E1E]">
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl lg:text-2xl">
              Mensal
            </span>
            <span className="text-content-body">Apenas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-3xl lg:text-[48px]">
              R$9,90
            </span>
            <span className="text-content-headline text-lg lg:text-2xl">
              /mês
            </span>
          </div>
          <Button variant="secondary">Assinar</Button>
        </div>

        {/* Plano Vitalício */}
        <div className="flex flex-col w-full max-w-[304px]">
          <div className="flex justify-center items-center rounded-t-2xl p-2 bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
            <span className="uppercase text-xs font-bold">Recomendado</span>
          </div>
          <div className="p-[1.6px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] rounded-b-2xl">
            <div className="w-full bg-background-secondary p-6 lg:p-8 flex flex-col gap-6 rounded-b-2xl">
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl lg:text-2xl">
                  Vitalício
                </span>
                <span className="text-content-body">Economize com</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-3xl lg:text-[48px]">
                  R$99,90
                </span>
              </div>
              <Button variant="secondary">Assinar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
