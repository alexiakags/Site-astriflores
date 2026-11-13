import { useEffect, useRef } from 'react';

export default function SiteHeader({ onNavigate }) {
  const sidenavRef = useRef(null);
  const sectionHref = (section) => (
    window.location.pathname === '/' ? `#${section}` : `/#${section}`
  );

  useEffect(() => {
    if (!window.M || !sidenavRef.current) return;

    const sidenav = window.M.Sidenav.init(sidenavRef.current);
    return () => sidenav.destroy();
  }, []);

  return (
    <header>
      <nav className="astriflores-nav">
        <div className="nav-wrapper site-container">
          <button
            type="button"
            className="brand-logo"
            onClick={() => onNavigate('/')}
            aria-label="Voltar para a página inicial"
          >
            <img src="/assets/logo.svg" alt="Logo Astriflores" />
            <span>Astriflores</span>
          </button>

          <a
            href="#"
            data-target="mobile-menu"
            className="sidenav-trigger"
            aria-label="Abrir menu"
          >
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down nav-links">
            <li><a href={sectionHref('sobre')}>Sobre nós</a></li>
            <li><a href={sectionHref('historia')}>Nossa História</a></li>
            <li><a href={sectionHref('contato')}>Contato</a></li>
            <li>
              <button type="button" className="doe-nav" onClick={() => onNavigate('/doacoes')}>
                Doe
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-menu" ref={sidenavRef}>
        <li><a href={sectionHref('sobre')}>Sobre nós</a></li>
        <li><a href={sectionHref('historia')}>Nossa História</a></li>
        <li><a href={sectionHref('contato')}>Contato</a></li>
        <li>
          <button type="button" className="side-doe-btn" onClick={() => onNavigate('/doacoes')}>
            Doe
          </button>
        </li>
      </ul>
    </header>
  );
}
