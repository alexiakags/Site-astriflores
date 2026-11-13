import './PopupDoacao.css';

export default function PopupEmail({ onClose, onContinue }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onContinue();
  };

  return (
    <div className="popup-doacao-overlay" onMouseDown={onClose}>
      <section
        className="popup-doacao popup-email"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-email-titulo"
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

        <h2 id="popup-email-titulo">Digite o seu email:</h2>
        <form onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="email-doacao">Seu e-mail</label>
          <input
            id="email-doacao"
            name="email"
            type="email"
            placeholder="Digite o seu e-mail..."
            autoComplete="email"
            autoFocus
            required
          />
          <button type="submit" className="popup-avancar">
            Avançar
          </button>
        </form>
      </section>
    </div>
  );
}
