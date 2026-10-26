import { useEffect, useRef } from 'react';

function App() {
  const sidenavRef = useRef(null);

  useEffect(() => {
    if (!window.M || !sidenavRef.current) return;

    const sidenav = window.M.Sidenav.init(sidenavRef.current);

    return () => {
      sidenav.destroy();
    };
  }, []);

  return (
    <>
      <header>
        <nav className="astriflores-nav">
          <div className="nav-wrapper site-container">
            <a href="#inicio" className="brand-logo">
              <img src="/assets/logo.svg" alt="Logo Astriflores" />
              <span>Astriflores</span>
            </a>

            <a
              href="#"
              data-target="mobile-menu"
              className="sidenav-trigger"
              aria-label="Abrir menu"
            >
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down nav-links">
              <li>
                <a href="#sobre">Sobre nós</a>
              </li>
              <li>
                <a href="#historia">Nossa História</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                <a href="/doacoes.html" className="doe-nav">
                  Doe
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul
          className="sidenav"
          id="mobile-menu"
          ref={sidenavRef}
        >
          <li>
            <a href="#sobre">Sobre nós</a>
          </li>
          <li>
            <a href="#historia">Nossa História</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="/doacoes.html">Doe</a>
          </li>
        </ul>
      </header>

      <main id="inicio">
        <section
          id="sobre"
          className="section-block site-container"
        >
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
                <a
                  className="btn astri-btn"
                  href="#historia"
                >
                  Nossa História
                </a>

                <a
                  className="btn astri-btn"
                  href="/doacoes.html"
                >
                  Ajude a nossa associação
                </a>
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
                  <i className="material-icons">
                    play_arrow
                  </i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="historia"
          className="history-section site-container"
        >
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
                  <i className="material-icons">
                    play_arrow
                  </i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contato"
        className="page-footer astriflores-footer"
      >
        <div className="site-container footer-content">
          <h3>Contato</h3>

          <p>
            <i className="material-icons">mail_outline</i>
            <a href="mailto:associacao.astriflores@gmail.com">
              associacao.astriflores@gmail.com
            </a>
          </p>

          <p>
            <i className="material-icons">phone_iphone</i>
            <a href="tel:+5531999174714">
              (31) 99917-4714
            </a>
          </p>

          <p>
            <i className="material-icons">location_on</i>
            R. Chicó Alves - Bairro Pernambuco, Florestal - MG,
            35690-000
          </p>

          <p>
            <i className="material-icons">photo_camera</i>
            @aastriflores
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;