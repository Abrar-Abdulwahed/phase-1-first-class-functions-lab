//should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

//should return an array of the last two drivers
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

// 1) has the `returnFirstTwoDrivers` function to as its first element
// 2) has the `returnLastTwoDrivers` function to as its last element
// 3) allows us to invoke either function from the array
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

// returns a function
// should multiply a given value using the created multiplier
function createFareMultiplier(fare){
    return (factor) => fare * factor;
}

// 1) is a function
// 2) doubles/triples fares
// ex. fareDoubler(10) == 20 =(equivalent to)= createFareMultiplier(10)(2) =(equivalent to)= createFareMultiplier(2)(10)
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}