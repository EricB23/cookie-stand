'use strict';
const hoursOpen = [' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// how many cookies you sell per hour.
// provide data for each hour and how many hours each store is open. 14 hours per day.

const seattle = {
  location: 'Seattle',
  maxCust: 65,
  minCust 23,
  avgSale: 6.3

randomCust function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};

const tokyo = {
  location: 'Tokyo',
  maxCust: 24,
  minCust: 3,
  avgSale: 1.2

  randomCust function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};


const dubai = {
  location: 'Dubai',
  maxCust: 38,
  minCust: 11,
  avgSale: 3.7

 randomCust function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};


const paris = {
  location: 'Paris',
  maxCust: 38,
  minCust: 20,
  avgSale: 2.3

  randomCust function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};


const lima = {
  location: 'Lima',
  maxCust: 16,
  minCust: 2,
  avgSale: 4.6


 randomCust function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};


function cookieCount(city) {
  let h2 = document.createElement('h2');
  h2.innerText = city.name;
  let main = document.getElementById('cities')
  main.appendChild(ul);
  let totalSales = 0;
  for (let i = 0; i <= hoursOpen.length; i++) {
    let li = doucment.createElement('li');
    let hourlySales = math.floor(city.randomCust() * city.avgCookieSales);
    totalSales += hourlySales;
    li.innerText = `${hoursOpen[i]}: ${hourlySales} cookies`;
    ul.appendChild(li);
  }

let total = document.createElement('li')
total.innerText = `Total: ${totalSales} cookies`;
ul.appendChild(total);
}
const storeLocations = [seattle,tokyo,dubai, paris, lima];
for (let i = 0; i <= storelocations.length; i++){
cookieCount(storeLocations[i]);
console.log(i);
}
cookieCount(seattle);
cookieCount(tokyo);
cookieCount(dubai);
cookieCount(paris);
cookieCount(lima);