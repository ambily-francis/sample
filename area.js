function findCircle(...args)
{
    circleArea = 3.14 * (args[0]) * (args[0]) ;
    console.log("Area of Circle is: ", circleArea);
}

function findRectangle(...args)
{
    rectangleArea = (args[0]) * (args[1]) ;
    console.log("Area of Rectangle is: ", rectangleArea);
}

function findSquare(...args)
{
    squareArea = (args[0] * args[0]);
    console.log("Area of Square is: ", squareArea);
}

function findTriangle(...args)
{
    triangleArea = (args[0] * args[1]) / 2;
    console.log("Area of Triangle is: ", triangleArea);
}

findSquare(10);
findRectangle(9,3);
findCircle(8);
findTriangle(8, 12);