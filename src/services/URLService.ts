import normalizeUrl from "normalize-url";

class URLService {
  isValid = (url: string) => {
    try {
      new URL(url);
    } catch (error) {
      return false;
    }
    return true;
  };

  normalize = (url: string) =>
    normalizeUrl(url, {
      stripHash: true,
      stripProtocol: true,
      stripTextFragment: true,
      removeQueryParameters: false,
    });
}

export default new URLService();
