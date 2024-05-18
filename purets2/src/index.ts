// Interface with Classes

interface TakePhoto {
  burstMode: number;
  cameraMode: string;
  filter: string;
}

interface Stories {
  createStory: () => void;
}

class Mobile implements TakePhoto {
  constructor(
    public burstMode: number,
    public cameraMode: string,
    public filter: string
  ) {}
}

class Yt implements TakePhoto, Stories {
  constructor(
    public burstMode: number,
    public cameraMode: string,
    public filter: string,
    public shorts: string, // can add more properties,
    public createStory: () => {}
  ) {}
}
