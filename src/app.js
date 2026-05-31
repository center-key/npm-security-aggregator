// npm Security Aggregator ~~ MIT License

const app = {

   reportInfo: [
      { name: 'Snyk',    url: 'https://security.snyk.io/package/npm/[PKG-NAME]' },
      { name: 'Socket',  url: 'https://socket.dev/npm/package/[PKG-NAME]' },
      { name: 'NPMScan', url: 'https://npmscan.com/package/[PKG-NAME]' },
      ],

   elem: null,

   createElemMap() {
      const component = globalThis.document.querySelector('main');
      app.elem = {
         nameInput:      component.querySelector('input[type=text]'),
         errorMessage:   component.querySelector('span.error-message'),
         lookUpButton:   component.querySelector('p >button'),
         registryFigure: component.querySelector('figure'),
         registryTitle:  component.querySelector('figure >figcaption'),
         registryData:   component.querySelector('figure >pre'),
         reportButtons:  component.querySelector('nav:has(>button)'),
         };
      },

   fetchPkg(name) {
      const pkgName =     libX.str.toKebab(name);
      const registryUrl = `https://registry.npmjs.org/${pkgName}/latest`;
      app.elem.nameInput.value = pkgName;
      const updateReportButton = (info, i) => {
         const reportButton = app.elem.reportButtons.children[i];
         const reportUrl =    info.url.replace('[PKG-NAME]', pkgName);
         reportButton.disabled =       false;
         reportButton.dataset.href =   reportUrl;
         reportButton.title =          reportUrl;
         };
      const showPkg = (data) => {
         app.elem.registryTitle.textContent = pkgName;
         app.elem.registryTitle.title =       registryUrl;
         app.elem.registryData.innerHTML =    prettyPrintJson.toHtml(data);
         dna.ui.slideFadeIn(app.elem.registryFigure);
         app.reportInfo.forEach(updateReportButton);
         };
      const handlePkgData = (data) => {
         globalThis.console.info(data);
         const invalidPkg =   data.status === 404;
         const success =      !data.error && data.name === pkgName;
         const errorMessage = invalidPkg ? 'Package not found!' : 'Error encountered!';
         if (success)
            showPkg(data);
         else if (app.elem.nameInput.value)
            dna.ui.pulse(app.elem.errorMessage, { text: errorMessage });
         };
      fetchJson.enableLogger();
      if (pkgName)
         fetchJson.get(registryUrl).then(handlePkgData);
      },

   enableLookUp() {
      app.elem.lookUpButton.disabled = !app.elem.nameInput.value;
      },

   lookUpPkg() {
      app.elem.lookUpButton.disabled = true;
      app.fetchPkg(app.elem.nameInput.value);
      },

   setup() {
      app.createElemMap();
      const paramValue = new URLSearchParams(globalThis.location.search).get('package');
      const folderName = libX.url.getFolderName(globalThis.document.referrer);
      const addIcon =    (info) => info.icon = `assets/icon-${info.name.toLowerCase()}.png`;
      dna.clone('report-button', app.reportInfo, { transform: addIcon });
      app.fetchPkg(paramValue ?? folderName);
      },
   };

app.setup();
