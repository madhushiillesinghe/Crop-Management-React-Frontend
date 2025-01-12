export class Equipment {
    id:string;
    name:string;
    type:string;
    status:string;
    fieldCode:string;
    staffId:string;

    constructor(id: string, name: string, type: string, status: string, fieldCode: string, staffId: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
        this.fieldCode = fieldCode;
        this.staffId = staffId;
    }
}