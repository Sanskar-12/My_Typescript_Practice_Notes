// Abstract class cannot make object because it is class but more like a blueprint like interfaces
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
}

// const myObj = new TakePhoto("test", "test"); // Will give me error

class Mobile2 extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
}

const myObj = new Mobile2("test", "test"); //Would not give me error
