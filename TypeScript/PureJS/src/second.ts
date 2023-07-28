interface TakePhoto {

    cameraMode: string
    filter: string
    burst: Number

}

interface Story {

    createStory(): void

}


class Instragram implements TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: Number
    ) { }

}

class Youtube implements TakePhoto, Story {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: Number,
        public short: string
    ) { }

    createStory(): void {

    }

}