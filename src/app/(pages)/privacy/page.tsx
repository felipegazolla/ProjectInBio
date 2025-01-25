import { Header } from '@/components/ui/Header'

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <div className="w-[80%] mt-32 mx-auto p-6 bg-background-tertiary text-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>

        <h2 className="text-xl font-semibold mb-2">Introdução</h2>
        <p className="mb-4">
          Sua privacidade é importante para nós. Esta Política de Privacidade
          explica como coletamos, usamos e protegemos suas informações quando
          você utiliza o <strong>Project In Bio</strong>.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Informações que Coletamos
        </h2>
        <p className="mb-4">
          Ao usar o <strong>Project In Bio</strong>, podemos coletar as
          seguintes informações:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Informações pessoais, como nome, e-mail e foto de perfil.</li>
          <li>
            Informações fornecidas por você ao personalizar sua página (ex.:
            links e projetos).
          </li>
          <li>Dados de navegação, como endereço IP e tipo de dispositivo.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          Como Usamos Suas Informações
        </h2>
        <p className="mb-4">Utilizamos suas informações para:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Personalizar sua experiência no <strong>Project In Bio</strong>.
          </li>
          <li>Gerenciar e melhorar o funcionamento do serviço.</li>
          <li>Entrar em contato com você sobre atualizações ou problemas.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          Compartilhamento de Informações
        </h2>
        <p className="mb-4">
          Nós não compartilhamos suas informações pessoais com terceiros, exceto
          quando necessário para:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Cumprir obrigações legais.</li>
          <li>Proteger nossos direitos ou segurança.</li>
          <li>Fornecer o serviço por meio de provedores confiáveis.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Segurança</h2>
        <p className="mb-4">
          Implementamos medidas de segurança adequadas para proteger suas
          informações contra acesso, uso ou divulgação não autorizados. No
          entanto, nenhum sistema é completamente seguro, e não podemos garantir
          a segurança absoluta dos dados.
        </p>

        <h2 className="text-xl font-semibold mb-2">Seus Direitos</h2>
        <p className="mb-4">
          Você tem o direito de acessar, corrigir ou excluir suas informações
          pessoais armazenadas no <strong>Project In Bio</strong>. Para exercer
          esses direitos, entre em contato conosco.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Alterações nesta Política
        </h2>
        <p className="mb-4">
          Podemos atualizar esta Política de Privacidade periodicamente. As
          alterações serão publicadas nesta página, e você será notificado, se
          necessário.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contato</h2>
        <p>
          Se tiver dúvidas sobre esta Política de Privacidade, entre em contato
          conosco pelo e-mail:
          <a href="mailto:enggazolla@gmail.com" className="text-blue-400">
            enggazolla@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
