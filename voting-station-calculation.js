// Challenge

/* Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre. 

The chooseStations function should return the array:
['Bright Lights Elementary', 'Moose Mountain Community Centre']

*/

const stations = [
  ["Big Bear Donair", 10, "resaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (stations) {
  const appropriateStations = [];

  for (const station of stations) {
    const capacity = station[1];
    const venueType = station[2];

    if (capacity >= 20) {
      if (venueType === "school" || venueType === "community centre") {
        appropriateStations.push(station[0]);
      }
    }
  }

  return appropriateStations;
};

chooseStations(stations);
