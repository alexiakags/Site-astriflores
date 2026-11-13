import { useEffect, useState } from 'react';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import PopupEmail from './PopupEmail.jsx';
import PopupQRCode from './PopupQRCode.jsx';
import itensDoacao from './itensDoacao.js';
import './DetalheDoacao.css';

export default function DetalheDoacao({ itemId, onNavigate }) {
  const [popupAtivo, setPopupAtivo] = useState(null);
  const item = itensDoacao.find((itemDoacao) => itemDoacao.id === Number(itemId));

  useEffect(() => {
    if (!popupAtivo) return undefined;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const fecharComEscape = (event) => {
      if (event.key === 'Escape') setPopupAtivo(null);
    };

    window.addEventListener('keydown', fecharComEscape);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', fecharComEscape);
    };
  }, [popupAtivo]);

  if (!item) {
    return (
      <div className="pagina-detalhe-doacao">
        <SiteHeader onNavigate={onNavigate} />
        <main className="site-container detalhe-nao-encontrado">
          <h1>Item não encontrado</h1>
          <button type="button" className="btn voltar-doacoes" onClick={() => onNavigate('/doacoes')}>
            Voltar para doações
          </button>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="pagina-detalhe-doacao">
      <SiteHeader onNavigate={onNavigate} />

      <main className="site-container detalhe-doacao">
        <div className="detalhe-doacao-imagem">
          <img src={item.imagem} alt={item.nome} />
        </div>

        <section className="detalhe-doacao-info" aria-labelledby="detalhe-doacao-titulo">
          <h1 id="detalhe-doacao-titulo">{item.nome}</h1>
          <p className="detalhe-doacao-descricao">{item.descricao}</p>

          {item.marca && (
            <div className="detalhe-doacao-especificacao">
              <p>Marca:</p>
              <ul><li>{item.marca}</li></ul>
            </div>
          )}

          {item.material && (
            <div className="detalhe-doacao-especificacao">
              <p>Material:</p>
              <ul><li>{item.material}</li></ul>
            </div>
          )}

          <p className="detalhe-doacao-valor">{item.valor}</p>
          <button
            type="button"
            className="btn gerar-qr-btn"
            onClick={() => setPopupAtivo('email')}
          >
            Gerar QR code
          </button>
        </section>
      </main>

      <SiteFooter />
      {popupAtivo === 'email' && (
        <PopupEmail
          onClose={() => setPopupAtivo(null)}
          onContinue={() => setPopupAtivo('qr')}
        />
      )}
      {popupAtivo === 'qr' && (
        <PopupQRCode onClose={() => setPopupAtivo(null)} />
      )}
    </div>
  );
}
