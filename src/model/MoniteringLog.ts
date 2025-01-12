export class MoniteringLog{
    logCode:string;
    logDate:Date;
    observation:string;
    fieldCode:string;
    observedImage:string;

    constructor(logCode: string, logDate: Date, observation: string, fieldCode: string, observedImage: string) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.observation = observation;
        this.fieldCode = fieldCode;
        this.observedImage = observedImage;
    }
}