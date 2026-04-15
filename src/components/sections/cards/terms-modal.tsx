import { useEffect, useRef } from "react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8 animate-fadeIn"
      aria-modal="true"
      role="dialog"
      aria-labelledby="terms-modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 shrink-0">
          <h2
            id="terms-modal-title"
            className="text-lg font-bold tracking-wide text-slate-100"
          >
            Termos de Uso &amp; Política de Privacidade
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="text-slate-400 hover:text-slate-100 transition-colors p-1 rounded-md hover:bg-slate-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-6 py-5 text-slate-300 text-sm leading-relaxed space-y-6 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">1. Termos de Uso</h3>
            <p>
              Ao acessar e utilizar os serviços da <strong className="text-slate-100">Klyzium</strong>, você
              concorda em cumprir e estar vinculado aos presentes Termos de Uso. Se você não concordar com
              qualquer parte destes termos, pedimos que não utilize nossos serviços.
            </p>
            <p className="mt-3">
              A Klyzium reserva-se o direito de modificar estes termos a qualquer momento. As alterações
              entrarão em vigor imediatamente após a publicação no site. O uso continuado dos serviços após
              qualquer modificação constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">2. Uso dos Serviços</h3>
            <p>
              Você concorda em utilizar nossos serviços somente para fins lícitos e de maneira que não
              infrinja os direitos de terceiros. É expressamente proibido:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Utilizar os serviços para fins ilegais ou não autorizados;</li>
              <li>Transmitir qualquer conteúdo prejudicial, ofensivo ou difamatório;</li>
              <li>Tentar obter acesso não autorizado a sistemas ou redes;</li>
              <li>Reproduzir, duplicar ou vender qualquer parte dos serviços sem permissão expressa.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">3. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo disponibilizado pela Klyzium, incluindo textos, gráficos, logotipos, ícones,
              imagens e software, é de propriedade exclusiva da Klyzium e está protegido pelas leis de
              direitos autorais e propriedade intelectual vigentes no Brasil.
            </p>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">4. Política de Privacidade</h3>
            <p>
              A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como
              coletamos, usamos, armazenamos e protegemos as informações pessoais que você nos fornece ao
              utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">5. Coleta de Informações</h3>
            <p>Podemos coletar as seguintes informações pessoais:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Nome completo e informações de contato (e-mail, telefone);</li>
              <li>Informações de navegação e uso do site (cookies, endereço IP);</li>
              <li>Dados fornecidos voluntariamente por meio de formulários de contato;</li>
              <li>Informações necessárias para a prestação de serviços contratados.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">6. Uso das Informações</h3>
            <p>As informações coletadas são utilizadas para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Prestar, operar e melhorar nossos serviços;</li>
              <li>Entrar em contato com você em resposta a solicitações;</li>
              <li>Enviar comunicações relacionadas aos serviços, quando autorizado;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">7. Cookies</h3>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação,
              analisar o tráfego do site e personalizar o conteúdo. Você pode configurar seu navegador para
              recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">8. Compartilhamento de Dados</h3>
            <p>
              A Klyzium não vende, aluga ou compartilha suas informações pessoais com terceiros para fins
              comerciais, exceto quando necessário para a execução dos serviços contratados ou quando exigido
              por lei. Podemos compartilhar dados com parceiros de confiança que nos auxiliam na operação do
              site, desde que concordem em manter essas informações confidenciais.
            </p>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">9. Segurança dos Dados</h3>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais
              contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de
              transmissão pela internet ou armazenamento eletrônico é 100% seguro.
            </p>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">10. Seus Direitos (LGPD)</h3>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Confirmar a existência de tratamento de seus dados pessoais;</li>
              <li>Acessar, corrigir ou solicitar a exclusão de seus dados;</li>
              <li>Revogar o consentimento a qualquer momento;</li>
              <li>Solicitar a portabilidade dos dados a outro fornecedor.</li>
            </ul>
            <p className="mt-3">
              Para exercer seus direitos, entre em contato conosco pelo e-mail:{" "}
              <a href="mailto:klyzium@gmail.com" className="text-sky-400 hover:underline">
               klyzium@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">11. Limitação de Responsabilidade</h3>
            <p>
              A Klyzium não será responsável por quaisquer danos indiretos, incidentais ou consequentes
              decorrentes do uso ou impossibilidade de uso dos serviços, na máxima extensão permitida pela
              legislação aplicável.
            </p>
          </section>

          <section>
            <h3 className="text-slate-100 font-semibold text-base mb-2">12. Contato</h3>
            <p>
              Em caso de dúvidas sobre estes Termos de Uso ou nossa Política de Privacidade, entre em contato
              conosco:
            </p>
            <p className="mt-2 text-slate-400">
              <strong className="text-slate-300">Klyzium – Web Creation &amp; Software Development</strong>
              <br />
              E-mail:{" "}
              <a href="mailto:klyzium@gmail.com" className="text-sky-400 hover:underline">
                klyzium@gmail.com
              </a>
            </p>
            <p className="mt-3 text-slate-500 text-xs">
              Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-700 shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}