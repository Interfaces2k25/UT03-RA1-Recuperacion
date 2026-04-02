function Footer() {
    return (
      <footer className="w-full bg-[var(--color-secondary)] py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 px-6">
  
          {/* Sección de enlaces */}
          <div className="flex flex-col md:flex-row gap-50 text-center md:text-left text-sm font-medium">
            <a href="#" className="hover:underline font-bold text-[var(--color-primary)]">Sobre nosotros</a>
            <a href="#" className="hover:underline font-bold text-[var(--color-primary)]">Contacto</a>
            <a href="#" className="hover:underline font-bold text-[var(--color-primary)]">Preguntas frecuentes</a>
            <a href="#" className="hover:underline font-bold text-[var(--color-primary)]">Ayuda</a>
          </div>
  
          {/* Logo */}
          <img
            src="imagenes/LogoSinFondoHogarVerde.png"
            alt="Logo Hogar Verde"
            className="w-20"
          />
        </div>
      </footer>
    );
  }
  
  export default Footer;
  