export interface ProjectLink{
    name?: string,
    link: string,
    icon: "github" | "gitlab"
}

export interface IProject{
    projectName: string,
    tech: string[],
    sourceCode: ProjectLink[]
}