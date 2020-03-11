export default class SwapiService {
    _apiBase = `https://swapi.co/api`;
    _apiImageBase = `https://starwars-visualguide.com/assets/img`;

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) throw new Error(`Could not fetch ${url}, 
                                server end with status ${res.status}`);

        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this.transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this.transformPerson(person);
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this.transformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this.transformStarship(starship);
    };

    getAllPlanets = async () => {
        const planets = await this.getResource(`/planets/`);
        return planets.results.map(this.transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this.transformPlanet(planet);
    };

    getPersonImage = async ({id}) => {
        return `${this._apiImageBase}/characters/${id}.jpg`;
    };

    getPlanetImage = async ({id}) => {
        return `${this._apiImageBase}/planets/${id}.jpg`;
    };

    getStarhipImage = async ({id}) => {
        return `${this._apiImageBase}/starships/${id}.jpg`;
    };

    extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    transformPlanet = (planet) => {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    transformPerson = (person) => {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    transformStarship = (starship) => {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity

        }
    };
}

