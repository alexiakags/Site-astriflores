export default function SiteFooter() {
  return (
    <footer id="contato" className="page-footer astriflores-footer">
      <div className="site-container footer-content">
        <h3>Contato</h3>

        <p>
          <i className="material-icons">mail_outline</i>
          <a href="mailto:associacao.astriflores@gmail.com" target="_blank" rel="noreferrer">
            associacao.astriflores@gmail.com
          </a>
        </p>

        <p>
          <i className="material-icons">phone_iphone</i>
          <a href="https://wa.me/5531999174714" target="_blank" rel="noreferrer">
            (31) 99917-4714
          </a>
        </p>

        <p>
          <i className="material-icons">location_on</i>
          <a
            href="https://www.google.com/maps/search/?api=1&query=R.+Chic%C3%B3+Alves+-+Bairro+Pernambuco,+Florestal+-+MG,+35690-000"
            target="_blank"
            rel="noreferrer"
          >
            R. Chicó Alves - Bairro Pernambuco, Florestal - MG, 35690-000
          </a>
        </p>

        <p>
          <i className="material-icons">photo_camera</i>
          <a href="https://www.instagram.com/aastriflores" target="_blank" rel="noreferrer">
            @aastriflores
          </a>
        </p>
      </div>
    </footer>
  );
}
