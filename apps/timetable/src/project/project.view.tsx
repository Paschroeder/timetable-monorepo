import { ChangeEventHandler, Component, FocusEvent } from "react";
import { ProjectProps } from "./project.model";
import { ProjectController } from "./project.controller";
import { Operation } from '@timetable-monorepo/shared'
import { ProjectList } from "../project-list/project-list.view";

export class ProjectView extends Component<ProjectProps> {
    projectController = new ProjectController();
    state = {
        projectId: "",
        result: "",
        projects: this.projectController.getAllProjects()
    }

    constructor(props: ProjectProps) {
        super(props);
        this.setState({projectId: props.id})
    }

    handleOperation = (operation:Operation): void => {
        if (operation === Operation.add) {
            this.setState({result: this.projectController.addProject(this.state.projectId)});
        }
    }

    updateInputValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({projectId: e.target.value});
    }

    handleFocus = (e: any) => {
        e.target.select();
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <p>The result is: {this.state.result}</p>
                    </div>
                    <form>
                        <input id="projectId" type="text" name="projectId" value={this.state.projectId} onChange={this.updateInputValue} onFocus={this.handleFocus} />
                        <button type='button' onClick={() => this.handleOperation(Operation.add)}>Add Project</button>
                    </form>
                </div>
                <div>
                    <ProjectList projects={this.state.projects} />
                </div>
            </div>
        )
    }
}