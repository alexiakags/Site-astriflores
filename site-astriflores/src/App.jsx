import { useEffect, useState } from 'react';
import Doacoes from './Doacoes.jsx';
import DetalheDoacao from './DetalheDoacao.jsx';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

function HomePage({ onNavigate }) {
  return (
    <>
      <SiteHeader onNavigate={onNavigate} />

      <main id="inicio">
        <section id="sobre" className="section-block site-container">
          <div className="row hero-row">
            <div className="col s12 l7 hero-copy">
              <div className="eyebrow">
                <span></span>
                <strong>SOBRE NÓS</strong>
              </div>

              <h1>Associação Astriflores</h1>

              <p>
                A Associação de Catadores e Triadores de Materiais
                Recicláveis de Florestal/MG (Astriflores), fundada
                em 2008, é um empreendimento de economia solidária
                que ocupa papel central na rede de gestão
                socioambiental de resíduos do município de
                Florestal/MG. Composta por catadoras e catadores e
                marcada por um forte protagonismo feminino, a
                associação é responsável pela recepção, triagem,
                processamento e comercialização dos resíduos
                sólidos recicláveis gerados por residências e
                estabelecimentos comerciais locais. Muito além da
                reciclagem, a Astriflores atua na promoção da
                inclusão socioprodutiva e na geração de trabalho e
                renda para pessoas em situação de vulnerabilidade
                social, prestando um serviço ambiental essencial
                para a sustentabilidade da cidade e para o
                prolongamento da vida útil do aterro municipal.
              </p>

              <div className="hero-actions">
                <button type="button" className="btn astri-btn" onClick={() => onNavigate('/doacoes')}>
                  Ajude nossa associação
                </button>
              </div>
            </div>

            <div className="col s12 l5">
              <div
                className="media-placeholder"
                aria-label="Espaço reservado para vídeo ou imagem da Astriflores"
              >
                <div className="placeholder-copy">
                  Imagem / vídeo da Astriflores
                </div>

                <button
                  className="play-button"
                  type="button"
                  aria-label="Reproduzir vídeo"
                >
                  <i className="material-icons">play_arrow</i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="historia" className="history-section site-container">
          <div className="section-title">
            <h2>Nossa História</h2>
            <span></span>
          </div>

          <div className="row history-row">
            <div className="col s12 l7 history-copy">
              <article>
                <h3>Criação</h3>

                <p>
                  A Astriflores (Associação dos Catadores e
                  Triadores de Materiais Recicláveis de Florestal)
                  foi fundada oficialmente em 13 de outubro de
                  2007, iniciando sua atuação efetiva no galpão em
                  2008.
                </p>
              </article>

              <article>
                <h3>Como funcionava</h3>

                <ul className="history-list">
                  <li>
                    <strong>
                      Primeiros anos (2008–2013):
                    </strong>{' '}
                    Funcionava sob gestão compartilhada entre
                    trabalhadores associados e funcionários
                    públicos cedidos pela prefeitura. A usina
                    recebia cerca de 7 toneladas diárias de
                    resíduos sem separação prévia.
                  </li>

                  <li>
                    <strong>Após 2014/2015:</strong> Em parceria
                    com a Universidade Federal de Viçosa (UFV) e
                    articulação com a prefeitura, rejeitos e lixo
                    orgânico passaram a ir direto para o aterro
                    municipal. A usina passou a receber apenas
                    materiais recicláveis nas terças e
                    quintas-feiras.
                  </li>
                </ul>
              </article>

              <article>
                <h3>Criação do CNPJ</h3>

                <p>
                  O CNPJ da entidade (09.636.570/0001-47) foi
                  formalmente registrado e aberto em 05 de março
                  de 2008.
                </p>
              </article>
            </div>

            <div className="col s12 l5">
              <div
                className="media-placeholder history-media"
                aria-label="Espaço reservado para vídeo ou imagem da história da Astriflores"
              >
                <div className="placeholder-copy">
                  Imagem / vídeo da história
                </div>

                <button
                  className="play-button"
                  type="button"
                  aria-label="Reproduzir vídeo"
                >
                  <i className="material-icons">play_arrow</i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname || '/');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  if (currentPath.startsWith('/doacoes/')) {
    const itemId = currentPath.split('/')[2];
    return <DetalheDoacao itemId={itemId} onNavigate={navigateTo} />;
  }

  if (currentPath === '/doacoes') {
    return <Doacoes onNavigate={navigateTo} />;
  }

  return <HomePage onNavigate={navigateTo} />;
}

export default App;