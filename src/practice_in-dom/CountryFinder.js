


const getCountryData = async () => {
    try {
        const response = await fetch('https://dummy-json.mock.beeceptor.com/continents');
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
};

function customSearchItem() {
    const search = document.getElementById('searchBtn').value
    return search
}

function getData() {
    getCountryData()
        .then((data) => {
            console.log(data)
            const container = document.querySelector('.country-container')
            if (container) {
                data.forEach((country) => {
                    const bodyTag = document.createElement('div')
                    bodyTag.classList.add('country-card')
                    const codeTag = document.createElement('div')
                    codeTag.classList.add('code')
                    codeTag.innerHTML = `${country.code}`

                    const areaSqKmTag = document.createElement('div')
                    areaSqKmTag.classList.add('areaSqKm')
                    areaSqKmTag.innerHTML = `Area : ${country.areaSqKm}`

                    const populationTag = document.createElement('div')
                    populationTag.innerHTML = `Population : ${country.population}`
                    populationTag.classList.add('population')

                    bodyTag.appendChild(codeTag);
                    bodyTag.appendChild(areaSqKmTag);
                    bodyTag.appendChild(populationTag);
                    container.appendChild(bodyTag);
                })
            }
        })
}
function filterData(search) {
    const container = document.querySelector('.country-container')
    getCountryData()
        .then((data) => {
            const filterDataArray = data.filter((item) => item.code.toLowerCase().includes(search.toLowerCase()));
            container.innerHTML = '';
            filterDataArray.forEach((items) => {
                const bodyTag = document.createElement('div')
                bodyTag.classList.add('country-card')
                const codeTag = document.createElement('div')
                codeTag.classList.add('code')
                codeTag.innerHTML = `${items.code}`

                const areaSqKmTag = document.createElement('div')
                areaSqKmTag.classList.add('areaSqKm')
                areaSqKmTag.innerHTML = `Area : ${items.areaSqKm}`

                const populationTag = document.createElement('div')
                populationTag.innerHTML = `Population : ${items.population}`
                populationTag.classList.add('population')

                bodyTag.appendChild(codeTag);
                bodyTag.appendChild(areaSqKmTag);
                bodyTag.appendChild(populationTag);
                container.appendChild(bodyTag);
            })
        })
}

function searchItems() {
    const search = customSearchItem();
    console.log('search', search);

    if (search) {
        filterData(search);
    } else {
        getData();
    }
}

document.getElementById('searchBtn').addEventListener('input', searchItems);

getData();
