import { Header } from '@/components/ui/Header'

export default function Terms() {
  return (
    <div>
      <Header />
      <div className=" w-[80%] mt-32 mx-auto p-6 bg-background-tertiary text-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>

        <h2 className="text-xl font-semibold mb-2">Aceitação dos Termos</h2>
        <p className="mb-4">
          Ao acessar ou usar o <strong>Project In Bio</strong>, você concorda em
          cumprir e respeitar estes Termos de Uso e nossa Política de
          Privacidade.
        </p>

        <h2 className="text-xl font-semibold mb-2">Sobre o ProjectInBio</h2>
        <p className="mb-4">
          O <strong>Project In Bio</strong> é um serviço que permite aos
          usuários criar uma página personalizada para compartilhar informações
          sobre si mesmos, incluindo links e projetos.
        </p>

        <h2 className="text-xl font-semibold mb-2">Elegibilidade</h2>
        <p className="mb-4">
          Para usar o serviço, você deve ser maior de idade em sua jurisdição
          (geralmente 18 anos) e fornecer informações verdadeiras, precisas e
          atualizadas.
        </p>

        <h2 className="text-xl font-semibold mb-2">Uso Permitido</h2>
        <p className="mb-4">
          Você concorda em usar o <strong>Project In Bio</strong> apenas para
          fins legais e em conformidade com estes Termos. É proibido usar o
          serviço para atividades fraudulentas, ilícitas ou abusivas.
        </p>

        <h2 className="text-xl font-semibold mb-2">Conteúdo do Usuário</h2>
        <p className="mb-4">
          Ao enviar conteúdo para o <strong>Project In Bio </strong>, você
          declara que é o proprietário ou tem os direitos necessários para
          compartilhar o conteúdo. O conteúdo não pode violar direitos de
          terceiros.
        </p>

        <h2 className="text-xl font-semibold mb-2">Privacidade</h2>
        <p className="mb-4">
          Respeitamos sua privacidade. Para mais informações, consulte nossa
          Política de Privacidade.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Limitação de Responsabilidade
        </h2>
        <p className="mb-4">
          O <strong>Project In Bio </strong> é fornecido "como está". Não
          garantimos que o serviço estará disponível de forma ininterrupta ou
          livre de erros. Não nos responsabilizamos por danos diretos ou
          indiretos decorrentes do uso do serviço.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contato</h2>
        <p>
          Se tiver dúvidas sobre estes Termos, entre em contato conosco pelo
          e-mail:
          <a href="mailto:enggazolla@gmail.com" className="text-blue-400">
            enggazolla@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
