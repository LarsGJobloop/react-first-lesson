// This is the basic building block of React
// A function that returns what we call JSX
// JavaScript Extended Syntax
// Files that contains JSX we use the *.jsx
// file extension rather then the normal *.js extension
// Notice how we wrap the JSX inside a set of braces
export function App() {
  return (
    <div>
      <header>
        <div>Logo</div>

        <nav>
          <ul>
            <li>
              <a href="#sectionTop">Top</a>
            </li>
            <li>
              <a href="sectionMid">Middle</a>
            </li>
            <li>
              <a href="sectionBot">Bottom</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sectionTop">
          <h1>Top Section</h1>

        </section>

        <section id="sectionMid">
          <h1>Middle Section</h1>

        </section>

        <section id="sectionBot">
          <h1>Bottom Section</h1>

        </section>
      </main>

      <footer>
        <h1>©Lars Gunnar</h1>
      </footer>
    </div>
  )
}