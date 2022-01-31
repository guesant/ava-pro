export class MoodleClient {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public readonly endpointURL: string,
    public httpService: typeof fetch = fetch
  ) {}
}
