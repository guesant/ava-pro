export type ILicenses = Record<
  string,
  {
    url: string;
    path: string;
    licenses: string;
    publisher: string;
    repository: string;
    licenseFile: string;
  }
>;
