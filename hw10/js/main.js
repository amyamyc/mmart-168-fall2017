const apiKey = 'MW9S-E7SL-26DU-VV8V'

// Building the url to ask the question you want to ask. Below give me a list
// of all the bart stations.
const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
// go out and get data associated with address above.
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            // Do something with the data you have retrieved.
            json = json.root

          /* FOR LOOP
            const stations = json.stations.station
            for(let i = 0; i < stations.length; i++) {
            // json station.station structure can be seen in the XML document from BART API
            console.log(stations[i].name)
          }*/

          const stations = json.stations.station
          stations.forEach((station) => {
              console.log(station.name)
              // 1. Create the element you want to add to the DOM.
              //   In this case, create an empty option element.
              //   We need to append a child each time we loop through the data.
              const option = document.createElement("option")
              // 2. Assign data to some part of the element. Properties to elements.
              //    In this case, we are setting option's innerHTML to the station name.
              //    Also, setting value to station abbreviation.
              option.innerHTML = station.name
              option.value = station.abbr
              // 3. Append the newly created element to the DOM somewhere.
              document.getElementById('station_list').appendChild(option)
          })


            // How do I use the data returned from BART to populate my drop down
            // menu?



            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            const option1 = document.createElement("option")
            option1.value = 'DBRK'
            option1.innerHTML = 'Downtown Berkeley'
            document.getElementById('station_list').appendChild(option1)
        })
        .catch((err) => {
            console.log(err)
        })
}

makeStationList()


const getArrivalTimes = () => {
    // Find id station list and store in variable called station list.
    const stationList = document.getElementById('station_list')

    // get the station list's selected value
    const bartStationCode = stationList.value

    // print it to the screen
    console.log(bartStationCode)

    // using the in bartStationCode
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=MW9S-E7SL-26DU-VV8V&cmd=etd&orig=' +
                bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root

            // 1. Clear out existing div.
            document.getElementById('results').innerHTML = ''

            // 2. Add header that shows the selected station names.
            const header = document.createElement("h2")
            header.innerHTML =  json.station[0].name
            document.getElementById('results').appendChild(header)

            // 3. Log the train destination. Ex: "Warm Springs, Milbrae"

            // Print name of train to p tag and append to dom.
            json.station[0].etd.forEach((line) => {
              console.log(line)
              const trainLine  = document.createElement("h3")
              trainLine.innerHTML = line.destination

              // Also add the platform
              trainLine.innerHTML +=  ': Platform # ' + line.estimate[0].platform

              // Also add the train direction
              trainLine.innerHTML += ' (' + line.estimate[0].direction + ')'

              // now append to the DOM
              document.getElementById('results').appendChild(trainLine)

              // now add color of the train
              const square  = document.createElement("span")
              square.style.background = line.estimate[0].hexcolor
              square.classList.add('train-square')
              document.getElementById('results').appendChild(square)

            //4. Log all of the estimates for each train line.
              const departureTimes = []
                line.estimate.forEach((estimate) => {
                  departureTimes.push(estimate.minutes)
                    console.log(estimate)
                })


              // encapsulate each time estimate in a span tag. Span is like
              // an empty box that holds information.
              const departureTime  = document.createElement("span")
              departureTime.innerHTML =  departureTimes.join(', ')
              departureTime.innerHTML += ' minutes '
              document.getElementById('results').appendChild(departureTime)

          })

        })

    }



    /*
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log(json)

            const results = document.getElementById('results')
            results.innerHTML = ''
            json.station = json.station[0]
            if (!Array.isArray(json.station.etd)) {
                json.station.etd = [ json.station.etd ]
            }
            json.station.etd.forEach(trainLine => {
                if (!Array.isArray(trainLine.estimate)) {
                    trainLine.estimate = [ trainLine.estimate ]
                }
                // PART III.B.2: Instead of printing this info to the console,
                // output it to the DOM
                console.log('------------------------------------------------------------------------')
                console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
                console.log('TO:', trainLine.destination.toUpperCase())
                console.log('------------------------------------------------------------------------')
                trainLine.estimate.forEach(estimate => {
                    // PART III.B.2. Instead of printing this info to the console,
                    // output it to the DOM
                    console.log(
                        ' * Direction:', estimate.direction,
                        ', Leaving: ', estimate.minutes,
                        ', Color: ', estimate.hexcolor,
                        ', Platform:', estimate.platform,
                        ', Delay?:', estimate.delay
                    )
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

makeStationList()

*/
