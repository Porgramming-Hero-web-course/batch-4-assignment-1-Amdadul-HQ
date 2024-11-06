// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// // Sample Output 1:
// 78.54;

// // Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// // Sample Output 2:
// 24;

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

const calculateShapeArea=(shape:IShape)=>{
    if(shape.shape === "circle"){
        const area:number = Math.PI * shape.radius * shape.radius
        return area;
    }
    else if(shape.shape === "rectangle"){
        const area:number = shape.width * shape.height
        return area;
    }
}
