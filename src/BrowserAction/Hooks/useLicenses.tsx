import { useEffect, useState } from "react";
import { ILicenses } from "../../typings/ILicenses";

const licensesPromise = import("../../licenses.json") as unknown as Promise<{
  default: ILicenses;
}>;

export const useLicenses = () => {
  const [licenses, setLicenses] = useState<ILicenses>({});

  const syncLicenses = async () => {
    const { default: licenses } = await Promise.resolve(licensesPromise);
    setLicenses(licenses);
  };

  useEffect(() => {
    syncLicenses();
  }, []);

  return licenses;
};
