importScripts( '/cache-polyfill.js' );

var filesToCache = [
  // root
  '/',
  '/index.html',
  // css
  '/assets/css/main.css',
  '/assets/css/normalize.css',
  '/assets/css/syntax.css',
  // images
  '/assets/img/octocat.png',
  // pages
  '/Head-of-Partnerships/','/Senior-Product-Manager/','/design-researcher/','/quantitative-design-researcher/','/google-drive/','/trello/','/gc-docs/','/protected-files/','/team-meetings/','/about-us/','/vision-objectives/','/home/','/onboarding/','/a-propos-de-nous/','/reunions-d-equipe/','/vision-et-objectifs/','/accueil/','/onboarding-fr/','/gc-docs-fr/','/google-drive-fr/','/protected-files-fr/','/trello-fr/','/trello-fr/','/Head-of-Partnerships-FR/','/Senior-Product-Manager-FR/','/fr/%C3%89chantillons%20d'offres%20d'emploi/TechWriter-FR-md/','/chercheur-en-conception/','/chercheur-quantitatif-en-conception/','',
  // posts
  
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
