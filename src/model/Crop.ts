export class Crop {
    code: string;
    commonName: string;
    scientificName: string;
    cropImage: string;
    category: string;
    season: string;
    fieldCode: string;

    constructor(code: string, commonName: string, scientificName: string, cropImage: string, category: string, season: string, fieldCode: string) {
        this.code = code;
        this.commonName = commonName;
        this.scientificName = scientificName
        this.cropImage = cropImage;
        this.category = category;
        this.season = season;
        this.fieldCode = fieldCode;

    }
}


