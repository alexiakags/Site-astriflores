export default function CardDoacao({ item, onVerDetalhes }) {
  const irParaDetalhe = (event) => {
    event.preventDefault();
    onVerDetalhes(item.id);
  };

  return (
    <a
      className="card-doacao"
      href={`/doacoes/${item.id}`}
      onClick={irParaDetalhe}
      aria-label={`Ver detalhes de ${item.nome}`}
    >
      <div className="card-doacao-img-box" aria-hidden="true">
        <img
          src={item.imagem}
          alt={item.nome}
          className="responsive-img"
        />
      </div>

      <div className="card-doacao-info">
        <div className="card-doacao-textos">
          <span className="item-nome item-detalhe-link">{item.nome}</span>
          <span className="item-valor">{item.valor}</span>
        </div>

        <span className="btn-doar-card waves-effect" aria-hidden="true">Ver item</span>
      </div>
    </a>
  );
}
