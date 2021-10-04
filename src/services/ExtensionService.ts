class ExtensionService {
  openUrl = (url: string) => {
    browser.tabs.create({ url });
    window.close();
  };
}

export default new ExtensionService();
