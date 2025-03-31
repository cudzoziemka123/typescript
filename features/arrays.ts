const carMakers = ['ford', 'toyota', 'chevy'];
const carProducents: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

//Help with inference when extracting valuesS
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incopatible values
carMakers.push('20');

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2022-10-20');
importantDates.push(new Date());
