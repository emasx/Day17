function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));









// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);

    const description =  `${country} has ${population} million people, which is about ${percentage} of the world`;
    
    console.log(description);
};


describePopulation('Portugal', 10);
describePopulation('Romania', 19);
describePopulation('USA', 332);