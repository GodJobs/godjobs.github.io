WebFontConfig = {
    custom: {
        families: [
        "FFTisaWeb",
        "FFTisaWebBold",
        "FFTisaWebItalic",
        "FFTisaWebMediumSmallCaps",
        "FFTisaWebSmallCaps"
        ],
        urls: ['/fonts/embedded_fonts.css']
    }
};
   (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = '//cdn.bootcss.com/webfont/1.6.20/webfontloader.js';
      s.parentNode.insertBefore(wf, s);
   })(document);