export default class SwapiService {
    _apiBase = `https://swapi.co/api`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) throw new Error(`Could not fetch ${url}, 
                                server end with status ${res.status}`);

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this.transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this.transformPerson(person);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this.transformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this.transformStarship(starship);
    }

    async getAllPlanets() {
        const planets = await this.getResource(`/planets/`);
        return planets.results.map(this.transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this.transformPlanet(planet);
    }

    extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return  item.url.match(idRegExp)[1];
    }

    transformPlanet(planet) {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    transformPerson(person) {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    transformStarship(starship) {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity

        }
    }
}

