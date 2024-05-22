"use strict";
// Abstract class cannot make object because it is class but more like a blueprint like interfaces
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// const myObj = new TakePhoto("test", "test"); // Will give me error
class Mobile2 extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
const myObj = new Mobile2("test", "test"); //Would not give me error
