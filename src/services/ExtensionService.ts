class ExtensionService {
  openUrl = (url: string) => {
    browser.tabs.create({ url });
  };
}

export default new ExtensionService();
