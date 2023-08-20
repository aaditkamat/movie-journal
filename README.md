# Astro Starter Kit: Basics

## 🚀 Project Structure

The important files and folders to take note of are as follows:

```
/
├── src/
│   ├── components/
│   │   └── MoviesList.tsx - Container for the movies displayed through the `WatchList` component
│   │   └── Search.tsx - Display the search box and handles the search requests to OMDB API
│   │   └── WatchButton.tsx - Renders the buttons titled 'Watched' and 'Want To Watch'
│   │   └── WatchList.tsx - Renders the movies rendered in Top 10 Movies Watched/Want To Watch based on the button clicked
│   │   └── SearchResult.tsx - Displays the movies returned from the OMDB API based on the query entered in the search box
│   ├── layouts/
│   │   └── Layout.astro - Contains the global styles and the overall structure of the index html page
│   └── pages/
│       └── index.astro - Contains the different React components embedded within it
└── package.json - Description of the project with its associated higher level yarn dependencies
└── astro.config.mjs - Configuration for Astro
└── renovate.json - Schema for Renovate Bot (creates automated pull requests to update the yarn ependencies)
└── tailwind.config.cjs - Configuration for Tailwind CSS
└── tsconfig.json - Configuration for TypeScript
└── yarn.lock - Dependency tree for Yarn
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn`                    | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:3000`      |
| `yarn build`              | Build your production site to `./dist/`          |
| `yarn preview`            | Preview your build locally, before deploying     |
| `yarn astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help`    | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check the [Astro documentation](https://docs.astro.build) or jump into the [Discord server](https://astro.build/chat).
