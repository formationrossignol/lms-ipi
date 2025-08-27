export default [
    {
        text: "DevOps Foundation",
        collapsed: true,
        items: [
            { text: "Le cours", collapsed: true, link: "/cours/cicd" },
            { text: "Les TP", collapsed: true, link: "/cours/cicd" }
        ]
    },
    {
        text: "La CI/CD",
        collapsed: true,
        items: [
            { text: "Le cours", collapsed: true, link: "/cours/cicd" },
            { text: "Les TP", collapsed: true, items: [
                { text: "Installation et configuration de Git", collapsed: true, link: "/tp/cicd/installation-git.md" },
                { text: "Installation et configuration de GitLab", collapsed: true, link: "/tp/cicd/installation-gitlab.md" },
                { text: "Installation et configuration de Jenkins", collapsed: true, link: "/tp/cicd/installation-jenkins.md" },
                { text: "Déployer une application avec Gitlab", collapsed: true, link: "/tp/cicd/application-deployment-gitlab.md" },
                { text: "Déployer une application avec Jenkins", collapsed: true, link: "/tp/cicd/application-deployment-jenkins.md" },
                { text: "Installer des plugins avec Jenkins", collapsed: true, link: "/tp/cicd/installation-plugins-jenkins.md" }
            ]   
            }
        ]
    },
    {
        text: "Docker",
        collapsed: true,
        items: [
            { text: "Le cours", collapsed: true, link: "/cours/cicd" },
            { text: "Les TP", collapsed: true, link: "/cours/cicd" }
        ]
    },
    {
        text: "Terraform",
        collapsed: true,
        items: [
            { text: "Le cours", collapsed: true, link: "/cours/cicd" },
            { text: "Les TP", collapsed: true, link: "/cours/cicd" }
        ]
    },
    {
        text: "Ansible",
        collapsed: true,
        items: [
            { text: "Le cours", collapsed: true, link: "/cours/cicd" },
            { text: "Les TP", collapsed: true, link: "/cours/cicd" }
        ]
    }
]
