https://app.100xdevs.com/courses/3/242/261
https://projects.100xdevs.com/tracks/Auth/auth-1
https://app.100xdevs.com/courses/3/242/262
`Mono Repos`
https://projects.100xdevs.com/tracks/monorepo/monorepo-1
https://app.100xdevs.com/courses/3/239/259

## Some details about Mono repos

1. Lerna - https://lerna.js.org/
2. nx - https://github.com/nrwl/nx
3. **Turborepo** - https://turbo.build/ — Not exactly a monorepo framework
4. Yarn/npm workspaces - https://classic.yarnpkg.com/lang/en/docs/workspaces/
   Here other than the turborepo all are monorepo framework

## Why monorepos?

1. **Shared Code Reuse**
2. **Enhanced Collaboration**
3. **Optimized Builds and CI/CD**: Tools like TurboRepo offer smart caching and task execution strategies that can significantly reduce build and testing times.
4. **Centralized Tooling and Configuration**: Managing build tools, linters, formatters, and other configurations is simpler in a monorepo because you can have a single set of tools for the entire project.

## Build system vs Build system orchestrator vs Monorepo framework

- **Build System**
  A build system automates the process of transforming source code written by developers into binary code that can be executed by a computer. For JavaScript and TypeScript projects, this process can include transpilation (converting TS to JS), bundling (combining multiple files into fewer files), minification (reducing file size), and more. A build system might also handle running tests, linting, and deploying applications.

- **Build System Orchestrator**
  TurboRepo acts more like a build system orchestrator rather than a direct build system itself. It doesn't directly perform tasks like transpilation, bundling, minification, or running tests. Instead, TurboRepo allows you to define tasks in your monorepo that call other tools (which are the actual build systems) to perform these actions.
  These tools can include anything from tsc, vite etc.

- **Monorepo Framework**
  A monorepo framework provides tools and conventions for managing projects that contain multiple packages or applications within a single repository (monorepo). This includes dependency management between packages, workspace configuration.

In easy words Build systems are like tsc where they tend to build something and Monorepo framework is just the single repo where you can share resources and build system Orchestrator is like turboRepo

## Turborepo as a build system orchestrator

`Turborepo is a build system orchestrator . `

The key feature of TurboRepo is its ability to manage and optimize the execution of these tasks across your monorepo. It does this through:

1. **Caching**: TurboRepo caches the outputs of tasks, so if you run a task and then run it again without changing any of the inputs (source files, dependencies, configuration), TurboRepo can skip the actual execution and provide the output from the cache. This can significantly speed up build times, especially in continuous integration environments.
2. **Parallelization**: It can run independent tasks in parallel, making efficient use of your machine's resources. This reduces the overall time needed to complete all tasks in your project.
3. **Dependency Graph Awareness**: TurboRepo understands the dependency graph of your monorepo. This means it knows which packages depend on each other and can ensure tasks are run in the correct order.
   `In turborepo when we run turbo build it builds the common forlder first and than the backend and frontend together because frontend and backend depends on the common folder and it caches the builds as well this is the reason turborepo is a build system orchestrator (to arrange, organize, or build up for special or maximum effect. Derived forms)`
