interface ICircle {
    shape:"circle",
    radius:number,
}

interface IRectangle {
    shape:"rectangle",
    width:number,
    height:number,
}

type IShape = ICircle | IRectangle

const calculateShapeArea=(shape:IShape):number=>{
    switch (shape.shape) {
        case "circle":
          return Math.PI * shape.radius * shape.radius; 
        case "rectangle":
          return shape.width * shape.height; 
        default:
          throw new Error("Unknown shape type");
      }
}
