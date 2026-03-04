import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const revealedElements = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealedElements.forEach((element) => revealOnScroll.observe(element));

    return () => {
      revealOnScroll.disconnect();
    };
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#inicio">
            Pedro Gutiérrez Vico
          </a>
          <nav className="nav">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#stack">Stack</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero reveal">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Backend Developer · Spring Boot · Seguridad API</p>
              <h1>
                Diseño APIs seguras y mantenibles en Java para productos reales, con visión full stack para integrar frontend y mobile sin fricción.
              </h1>
              <p className="hero-description">
                Soy desarrollador orientado a backend con especialización práctica en Spring Boot, Spring Security y JWT (access + refresh token). Trabajo con arquitectura
                por capas, Clean Architecture y despliegues dockerizados, priorizando seguridad, escalabilidad y claridad técnica.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">
                  Disponible para oportunidades
                </a>
                <a className="btn btn-ghost" href="#proyectos">
                  Ver proyectos técnicos
                </a>
              </div>
            </div>
            <aside className="hero-card">
              <h2>Perfil rápido</h2>
              <ul>
                <li>📍 España</li>
                <li>🎓 DAM en curso</li>
                <li>🔐 Foco: seguridad y arquitectura limpia</li>
                <li>⚙️ Stack principal: Java + Spring Boot + Docker</li>
                <li>
                  🌐 GitHub:{' '}
                  <a href="https://github.com/PedroGutVic" target="_blank" rel="noreferrer">
                    PedroGutVic
                  </a>
                </li>
                <li>
                  🦊 GitLab:{' '}
                  <a href="https://gitlab.iesvirgendelcarmen.com/PedroGV" target="_blank" rel="noreferrer">
                    PedroGV
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="sobre-mi" className="section reveal">
          <div className="container narrow">
            <h2>Sobre mí</h2>
            <p>
              Construyo backend robusto con criterio de producto: endpoints claros, control de acceso bien definido y decisiones de arquitectura orientadas al mantenimiento a
              medio y largo plazo. No me limito a “hacer que funcione”: diseño flujos de autenticación, separo responsabilidades por capas y preparo aplicaciones para
              despliegue real con Docker.
            </p>
            <p>
              Complemento ese enfoque con experiencia full stack integrando React y backend propio, además de desarrollo Android con MVVM y Hilt. Mi paso por soporte e
              infraestructura IT en Grecia me aporta una ventaja práctica: pienso el software también desde operación, incidencias y entornos reales.
            </p>
          </div>
        </section>

        <section id="stack" className="section reveal">
          <div className="container">
            <h2>Stack técnico</h2>
            <div className="stack-grid">
              <article className="card">
                <h3>Backend</h3>
                <ul>
                  <li>Java (POO, excepciones, arquitectura por capas)</li>
                  <li>Spring Boot · Spring Security</li>
                  <li>JWT con refresh token</li>
                  <li>Control de roles (ROLE_USER / ROLE_ADMIN)</li>
                  <li>DTOs, paginación y validación de inputs</li>
                  <li>Manejo global de excepciones</li>
                  <li>Clean Architecture</li>
                  <li>Kotlin + Ktor (APIs backend)</li>
                </ul>
              </article>
              <article className="card">
                <h3>Frontend</h3>
                <ul>
                  <li>React + JavaScript (ES6+)</li>
                  <li>Consumo de APIs REST propias</li>
                  <li>Gestión de autenticación por token</li>
                  <li>Protección de rutas en cliente</li>
                  <li>HTML5 · CSS3 · Tailwind · Bootstrap</li>
                </ul>
              </article>
              <article className="card">
                <h3>Bases de datos</h3>
                <ul>
                  <li>MySQL</li>
                  <li>MariaDB</li>
                  <li>MongoDB</li>
                  <li>MongoDB Atlas</li>
                </ul>
              </article>
              <article className="card">
                <h3>DevOps</h3>
                <ul>
                  <li>Docker + Docker Compose</li>
                  <li>Variables de entorno (.env)</li>
                  <li>Nginx y Ngrok para entornos de prueba</li>
                  <li>Git, GitHub y GitLab</li>
                  <li>Postman · Vercel</li>
                </ul>
              </article>
              <article className="card">
                <h3>Mobile</h3>
                <ul>
                  <li>Android</li>
                  <li>MVVM</li>
                  <li>Hilt (inyección de dependencias)</li>
                  <li>Integración con APIs backend</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="proyectos" className="section reveal">
          <div className="container">
            <h2>Proyectos destacados</h2>

            <article className="project">
              <div>
                <h3>1) API REST Segura con Spring Boot + JWT + Docker</h3>
                <p>
                  Backend orientado a producción con autenticación JWT (access + refresh), autorización por roles y protección de rutas. Implementa separación por capas
                  (Controller / Service / Repository), DTOs para contratos estables, paginación de endpoints y manejo global de excepciones para respuestas consistentes.
                </p>
                <p>
                  Seguridad aplicada en profundidad: hashing con BCrypt, validación estricta de entradas y diseño preparado para mitigación de fuerza bruta y abuso de
                  endpoints. Dockerización completa junto a base de datos para despliegue reproducible.
                </p>
              </div>
            </article>

            <article className="project">
              <div>
                <h3>2) Proyecto Full Stack: React + Backend + Android</h3>
                <p>
                  Ecosistema completo donde el backend en Spring Boot centraliza reglas de negocio, autenticación y autorización. React consume la API con gestión de sesión
                  basada en tokens y protección de rutas, mientras Android integra los mismos servicios para mantener coherencia funcional entre plataformas.
                </p>
                <p>
                  Este proyecto demuestra capacidad para diseñar una capa backend sólida y conectarla con clientes heterogéneos sin comprometer seguridad ni mantenibilidad.
                </p>
              </div>
            </article>

            <article className="project">
              <div>
                <h3>3) App Android con MVVM + Hilt</h3>
                <p>
                  Aplicación móvil estructurada con MVVM para separación clara entre UI y lógica, e inyección de dependencias con Hilt para escalabilidad y testabilidad.
                  Integración con servicios backend y gestión ordenada del estado de pantalla.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="arquitectura" className="section reveal">
          <div className="container">
            <h2>Arquitectura técnica (API Spring Boot)</h2>
            <p className="architecture-intro">
              El objetivo es mantener un backend evolutivo: bajo acoplamiento, seguridad transversal y contratos de entrada/salida explícitos.
            </p>
            <div className="architecture-grid">
              <div className="arch-box">
                <h3>Controller</h3>
                <p>Recibe requests, valida DTOs y delega lógica de negocio.</p>
              </div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">
                <h3>Service</h3>
                <p>Aplica reglas de dominio, políticas de seguridad y orquestación.</p>
              </div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">
                <h3>Repository</h3>
                <p>Acceso a datos con JPA/Hibernate y consultas paginadas.</p>
              </div>
            </div>
            <div className="architecture-notes">
              <span>JWT Filter + Spring Security Chain</span>
              <span>BCrypt Password Hashing</span>
              <span>Global Exception Handler</span>
              <span>Config por entorno con .env</span>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section reveal">
          <div className="container narrow">
            <h2>Experiencia profesional</h2>
            <h3>Técnico en Sistemas Microinformáticos y Redes (Grecia)</h3>
            <p>
              Experiencia internacional en instalación y mantenimiento de equipos, configuración básica de redes, resolución de incidencias y soporte técnico. Esta base
              refuerza mi perfil backend: desarrollo pensando en operabilidad, despliegues y estabilidad en entorno real.
            </p>
          </div>
        </section>

        <section id="contacto" className="section cta reveal">
          <div className="container cta-inner">
            <h2>Busco oportunidades como Backend Developer (Java/Spring)</h2>
            <p>Si necesitas un perfil con foco en APIs seguras, arquitectura limpia y capacidad real de integración full stack, hablemos.</p>
            <div className="cta-actions">
              <a className="btn btn-primary" href="mailto:tuemail@ejemplo.com">
                Contactar por email
              </a>
              <a className="btn btn-ghost" href="https://github.com/PedroGutVic" target="_blank" rel="noreferrer">
                Ver GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Pedro Gutiérrez Vico · Backend Developer</p>
          <div className="footer-links">
            <a href="https://github.com/PedroGutVic" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://gitlab.iesvirgendelcarmen.com/PedroGV" target="_blank" rel="noreferrer">
              GitLab
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
