export default [
    {
        text: "Aides mémoires",
        link: "/pages/categories/aide-memoires.md",
    },

    {
        collapsed: true, text: "Veille & Ressources",
        items: [
            { text: "La veille de développeur", link: "/cours/veille.md" },
            { text: "Ressources veille & développement", link: "/tp/veille/ressources.md" }
        ]
    },

    {
        text: "Programmation Orientée Objet",
        collapsed: true,
        items: [
            { text: "Introduction", link: "/pages/categories/les-concepts.md" },
            {
                text: "Le cours", collapsed: true, items: [
                    { text: "La CICD", link: "/cours/cicd" }
                ]
            }

        ]
    }
]
