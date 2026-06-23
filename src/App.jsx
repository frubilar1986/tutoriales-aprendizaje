import './App.css'

const learningPaths = [
  {
    title: 'React desde cero',
    lessons: 12,
    level: 'Inicial',
    description: 'Componentes, props, estado y eventos explicados paso a paso.',
  },
  {
    title: 'JavaScript práctico',
    lessons: 9,
    level: 'Base',
    description: 'Ejercicios cortos para dominar funciones, arrays y objetos.',
  },
  {
    title: 'Interfaces modernas',
    lessons: 7,
    level: 'Proyecto',
    description: 'Diseño responsive, estilos reutilizables y buenas prácticas.',
  },
]

const tutorials = [
  'Crear tu primer componente',
  'Usar useState con formularios',
  'Organizar carpetas en React',
  'Preparar un proyecto para GitHub',
]

function App() {
  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio">
          Aula React
        </a>
        <div className="nav-links">
          <a href="#rutas">Rutas</a>
          <a href="#tutoriales">Tutoriales</a>
          <a href="#progreso">Progreso</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <p className="eyebrow">Aprendizaje guiado</p>
          <h1>Inicia tutoriales y construye proyectos React paso a paso.</h1>
          <p className="hero-copy">
            Una base simple para organizar clases, retos y seguimiento de avance
            mientras aprendes desarrollo frontend.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#rutas">
              Ver rutas
            </a>
            <a className="button secondary" href="#tutoriales">
              Explorar tutoriales
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Resumen de aprendizaje">
          <span className="panel-label">Ruta activa</span>
          <h2>React desde cero</h2>
          <p>Lección 1 de 12</p>
          <div className="progress-bar" aria-label="Progreso 8%">
            <span style={{ width: '8%' }} />
          </div>
          <ul>
            <li>Conceptos claros</li>
            <li>Ejercicios breves</li>
            <li>Proyecto final</li>
          </ul>
        </aside>
      </section>

      <section className="section" id="rutas">
        <div className="section-heading">
          <p className="eyebrow">Rutas</p>
          <h2>Elige por dónde empezar</h2>
        </div>
        <div className="path-grid">
          {learningPaths.map((path) => (
            <article className="path-card" key={path.title}>
              <span>{path.level}</span>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <strong>{path.lessons} lecciones</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="tutoriales">
        <div>
          <p className="eyebrow">Tutoriales</p>
          <h2>Primeros contenidos listos para completar</h2>
          <p>
            Esta sección puede crecer luego con videos, guías escritas,
            ejercicios descargables o evaluaciones.
          </p>
        </div>
        <ol className="tutorial-list">
          {tutorials.map((tutorial) => (
            <li key={tutorial}>
              <span>{tutorial}</span>
              <button type="button">Iniciar</button>
            </li>
          ))}
        </ol>
      </section>

      <section className="section progress-section" id="progreso">
        <div>
          <p className="eyebrow">Progreso</p>
          <h2>Aprende con continuidad</h2>
        </div>
        <div className="stats">
          <div>
            <strong>4</strong>
            <span>Tutoriales iniciales</span>
          </div>
          <div>
            <strong>28</strong>
            <span>Lecciones planeadas</span>
          </div>
          <div>
            <strong>1</strong>
            <span>Proyecto final</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
