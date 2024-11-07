import fs from "fs";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  vue: {
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes("-"),
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: ["mermaid", "dayjs", "@braintree/sanitize-url"],
    },
  },
  base: "/file-storage",
  title: "@darksoil-studio/file-storage-zome",
  description: "Roles zome for holochain apps",
  srcExclude: ["public/**/*"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "Setup",
        link: "/setup.md",
      },
      {
        text: "API Reference",
        items: [
          {
            text: "Integrity Zome",
            link: "/backend/doc/file_storage_integrity/index.html",
            target: "_blank",
          },
          {
            text: "Coordinator Zome",
            link: "/backend/doc/file_storage/index.html",
            target: "_blank",
          },
          {
            text: "Frontend",
            items: [
              {
                text: "FileStorageClient",
                link: "/file-storage-client.md",
              },
              {
                text: "Elements",
                items: fs
                  .readdirSync("./elements")
                  .filter((file) => file.endsWith(".md"))
                  .map((el) => ({
                    text: el.split(".md")[0],
                    link: `/elements/${el}`,
                  })),
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/darksoil-studio/file-storage",
      },
    ],
    search: {
      provider: "local",
    },
  },

  head: [
    [
      "script",
      {},
      // Synchronize the vitepress dark/light theme with the shoelace mode
      `
  function syncTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const isShoelaceDark = document.body.classList.contains('sl-theme-dark');
    if (isDark && !isShoelaceDark) {
      document.body.classList = "sl-theme-dark";
    }
    if (!isDark && isShoelaceDark) {
    	document.body.classList = "";
    }
  }
  const attrObserver = new MutationObserver((mutations) => {
    mutations.forEach(mu => {
      if (mu.type !== "attributes" && mu.attributeName !== "class") return;
      syncTheme();
    });
  });
  attrObserver.observe(document.documentElement, {attributes: true});
  syncTheme();
        `,
    ],
  ],
});
