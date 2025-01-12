import {Staff} from './Staff';
import {Crop} from './Crop';
export class MoniteringLog{
    logCode:string;
    logDate:Date;
    observation:string;
    fieldCode:string;
    observedImage:string;
    staffList:Staff[];
    cropList:Crop[];


    constructor(logCode: string, logDate: Date, observation: string, fieldCode: string, observedImage: string, staffList: Staff[], cropList: Crop[]) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.observation = observation;
        this.fieldCode = fieldCode;
        this.observedImage = observedImage;
        this.staffList = staffList;
        this.cropList = cropList;
    }
}