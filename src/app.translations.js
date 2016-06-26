'use strict';

workshopApp.config(
        function($translateProvider){
            $translateProvider.useStaticFilesLoader({
                prefix: 'translations/locale-',
                suffix: '.json'
            });
            
            /*$translateProvider.translations('en', {
                HOME: 'Home',
                LOGIN: 'Login',
                ABOUT: 'About',
                CHNG_LNG: 'Change language',
                LANG_EN: 'English',
                LANG_DE: 'German'
            });

            $translateProvider.translations('de', {
                HOME: 'Start',
                LOGIN: 'Einloggen',
                ABOUT: 'Über',
                CHNG_LNG: 'Ändere Sprache',
                LANG_EN: 'Englisch',
                LANG_DE: 'Deutsch'
            });*/

            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy('escape');
        }
);