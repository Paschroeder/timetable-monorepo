import { Time } from "../time/time.model";

export class Ticket {
    public id: string;
    public estimatedTime: Time;
    private spendTime: Time;

    constructor(id: string, estimatedTime: Time) {
        this.id = id;
        this.estimatedTime = estimatedTime;
        this.spendTime = new Time(0);
    }

    addSpendTime(hours: number) {
        this.spendTime.hours += hours;
    }
}