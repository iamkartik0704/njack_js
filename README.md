```markdown
# NJACK JavaScript Session (`njack_js`)

A comprehensive repository containing hands-on projects, interactive DOM exercises, and structured theory modules for the **NJACK JavaScript Session**. Divided into dedicated `projects` and `theory` directories, this serves as a complete reference guide from foundational syntax to advanced JavaScript internals.

## Repository Structure

```text
njack_js/
├── projects/                  # Hands-on session mini-projects
│   ├── advJS/                 # Advanced JS concepts & async implementations
│   ├── colorSwitcher/         # Interactive DOM background color switcher
│   ├── eventListener/         # Event handling & listener practice
│   └── rating/                # Interactive star/rating component
├── theory/                    # Module-wise JavaScript curriculum
│   ├── 01_basics/             # Variables, data types, type conversion, memory
│   ├── 02_basics/             # Arrays, objects, destructuring, JSON
│   ├── 03_basics/             # Functions, lexical scope, arrow functions, IIFE
│   ├── 04_control_flow/       # Conditionals, switch, truthy/falsy values
│   ├── 05_iterations/         # Loops, for-of, for-in, map, filter, reduce
│   ├── 06_dom/                # DOM tree traversal, selectors, node creation
│   ├── 07_projects/           # Additional DOM practice exercises
│   ├── 08_events/             # Event bubbling, capturing, async timers
│   ├── 09_advance_one/        # XMLHttpRequest, Promises, Fetch API
│   ├── 10_classes_and_oop/    # Prototypes, ES6 classes, call/bind/apply, OOP
│   └── 11_fun_with_js/        # Closures, lexical scoping & V8 array internals
└── README.md

```

## What's Inside

### 1. Session Projects (`/projects`)

Practical browser-based implementations built during the session to solidify DOM manipulation and event-driven programming:

* **`colorSwitcher`**: Dynamic UI theme/background manipulation using DOM selectors and click events.
* **`eventListener`**: Deep dive into keyboard, mouse, and form event listeners.
* **`rating`**: Interactive rating widget demonstrating state management in vanilla JS.
* **`advJS`**: Practical exercises covering asynchronous behavior and advanced language features.

### 2. Core Curriculum (`/theory`)

Step-by-step code snippets covering the complete JavaScript execution model:

* **Foundations (`01_basics` – `05_iterations`)**: Variables, primitive vs. reference types, objects, execution context, Call Stack, and higher-order array methods (`map`, `filter`, `reduce`).
* **Browser & DOM (`06_dom` – `08_events`)**: Querying elements, modifying styles/attributes dynamically, and handling event propagation.
* **Async & Internals (`09_advance_one` – `11_fun_with_js`)**: Promises, `fetch()`, `async/await`, prototypal inheritance, ES6 classes, closures, and engine optimizations.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) installed locally to run standalone `.js` files in the terminal.
* **VS Code** with the **Live Server** extension (for previewing HTML/DOM projects).

### How to Run

1. **Clone the repository:**
```bash
git clone [https://github.com/iamkartik0704/njack_js.git](https://github.com/iamkartik0704/njack_js.git)
cd njack_js

```


2. **Run a theory script via Node.js:**
```bash
node theory/01_basics/01_variables.js

```


3. **Launch an interactive project:**
Navigate to any folder inside `projects/` (e.g., `projects/colorSwitcher/` or `projects/rating/`) and open the `.html` file using VS Code **Live Server** or directly in your browser.

## Credits

* Theory directory adapted from Hitesh Choudhary's *Chai aur Javascript* curriculum.
* Structured and maintained by [Kartik Chawla](https://github.com/iamkartik0704) for **NJACK DevOS**, IIT Patna.

---

*Crafted with π*

```

```