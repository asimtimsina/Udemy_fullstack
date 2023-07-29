abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void
}


// const hc = new TakePhoto("test", "test");
// cannot do it


class Instragram extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number


    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }

}