import React from "react";
import { Project } from "../project/project.model";

interface ProjectListProps {
    projects: Project[];
}
export class ProjectList extends React.Component<ProjectListProps> {
    render() {
        return (
            <div>
                <h1>Project List</h1>
                <ul>{this.props.projects.map(p => (
                        <li key={p.id}>
                            <div>{p.id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}