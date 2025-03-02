import { Project } from "../project/project.model"

export class ProjectController {

    private projects: Project[];

    constructor() {
        this.projects = [];
    }

    public addProject(id: string): string {
        this.projects.push(new Project(id));
        return `Project(${id}) added!`
    }

    public getAllProjects(): Project[] {
        return this.projects;
    }
}