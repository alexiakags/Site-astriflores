import { useState } from 'react';
import './PopupDoacao.css';

const CHAVE_PIX_EXEMPLO = 'chavepixexemplo@astriflores.org';

export default function PopupQRCode({ onClose }) {
  const [mensagemCopia, setMensagemCopia] = useState('');

  const copiarChave = async () => {
    try {
      await navigator.clipboard.writeText(CHAVE_PIX_EXEMPLO);
      setMensagemCopia('Chave Pix copiada!');
    } catch {
      setMensagemCopia('Não foi possível copiar. Selecione e copie o texto manualmente.');
    }
  };

  return (
    <div className="popup-doacao-overlay" onMouseDown={onClose}>
      <section
        className="popup-doacao popup-qr"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-qr-titulo"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="popup-fechar"
          onClick={onClose}
          aria-label="Fechar"
        >
          &times;
        </button>

        <h2 id="popup-qr-titulo">Leia o QR code ou copie a chave Pix:</h2>
        <div className="qr-placeholder" role="img" aria-label="Espaço reservado para o QR code">
          <span className="material-icons" aria-hidden="true">qr_code_2</span>
          <span>QR code ilustrativo</span>
        </div>

        <div className="chave-pix-copiar">
          <input
            aria-label="Chave Pix de exemplo"
            value={CHAVE_PIX_EXEMPLO}
            readOnly
            onFocus={(event) => event.target.select()}
          />
          <button type="button" onClick={copiarChave} aria-label="Copiar chave Pix">
            <span className="material-icons" aria-hidden="true">content_copy</span>
          </button>
        </div>

        <p className="mensagem-copia" aria-live="polite">{mensagemCopia}</p>
        <p className="aviso-qr">Chave e QR code ilustrativos — substitua pelos dados reais.</p>
      </section>
    </div>
  );
}
