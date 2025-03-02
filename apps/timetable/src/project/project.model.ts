import { Ticket } from "../ticket/ticket.model";

export interface ProjectProps {
    id: string;
    tickets?: Ticket[];
}

export class Project implements ProjectProps {
    public id: string;
    public tickets: Ticket[];

    constructor(id: string) {
        this.id = id;
        this.tickets = [];
    }

    addTicket(ticket: Ticket) {
        this.tickets.push(ticket);
    }
}