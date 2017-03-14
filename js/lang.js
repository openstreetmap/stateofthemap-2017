var language = (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage).substr(0,2);

if (language == "ja" ) {
   var uri = window.location.href;
   if ( !uri.match(/ja/) ) {
      window.location.href = './ja/'
   }
}