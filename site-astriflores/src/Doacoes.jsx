import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import CardDoacao from './CardDoacao.jsx';
import itensDoacao from './itensDoacao.js';
import './Doacoes.css';

export default function Doacoes({ onNavigate }) {
  return (
    <div className="pagina-doacoes">
      <SiteHeader onNavigate={onNavigate} />

      <main className="container secao-doacoes">
        <h4 className="titulo-doacoes">Doações</h4>

        <div className="doacoes-grid" role="list" aria-label="Lista de itens para doação">
          {itensDoacao.map((item) => (
            <div key={item.id} className="doacoes-grid-item" role="listitem">
              <CardDoacao item={item} onVerDetalhes={(id) => onNavigate(`/doacoes/${id}`)} />
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}