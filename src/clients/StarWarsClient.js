export class StarWarsClient {
    async getStarWarsData() {
        const rawResponse = await fetch("https://swapi.dev/api/people");
        const parsedResponse = await rawResponse.json();
        return parsedResponse.results;
    }
}