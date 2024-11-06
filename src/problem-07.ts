class Car {
    make:string;
    model:string;
    year:number;
    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    getCarAge():number{
        const currentYear:number = new Date().getFullYear();
        const carAge = currentYear - this.year
        return carAge
    }
}
