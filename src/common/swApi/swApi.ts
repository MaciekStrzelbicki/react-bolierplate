import { RequestServiceDecorator } from "../services/http/RequestServiceDecorator";
import { SwApiPerson } from "./swApi.types";

export class SwApi {
  reqsrcDecorator: RequestServiceDecorator;
  static _instance: SwApi;
  constructor() {
    this.reqsrcDecorator = new RequestServiceDecorator("https://swapi.dev/api");
  }

  static getInstance(): SwApi {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new SwApi();
    return this._instance;
  }

  public async getPerson(personId: string) {
    return await this.reqsrcDecorator.get<SwApiPerson>(`/people/${personId}`);
  }
}
