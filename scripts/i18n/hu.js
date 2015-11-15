app.config(function($translateProvider) {
    $translateProvider.translations('hu', {
        languages: {
            en: 'Angol',
            hu: 'Magyar'
        },
        save: 'Mentés',
        cancel: 'Mégse',
        print: 'Nyomtatás',
        card: {
            createNew: 'Új kátya',
            printOrSave: 'Nyomtatás és mentés',
            filterHeader: 'Szűrő',
            all: 'Mind',
            black: 'Fekete',
            white: 'Fehér',
            tags: {
                mature: 'Felnőtt',
                children: 'Gyerek',
                political: 'Politika',
                sexual: 'Sex',
                disgusting: 'Undi',
                nerd: 'Kocka',
                geek: 'Geek'
            },
            print: {
                header: '{{count}} kártya nyomtatása',
                printingOptions: 'Nyomtatási beállítások',
                comment: 'Az alapbeállítások négyszer öt kártya nyomtatását jelentik A4-es oldalakra. Nyugostan állítgasd a beállításokat.',
                pageWidth: 'Oldal szélesség (mm)',
                pageHeight: 'Oldal magasság (mm)',
                pageMargin: 'Margó (mm)',
                roundedCorners: 'Kerekített sarkok (mm)',
                cardSize: 'Kártya mérete (mm)',
                outline: 'Körvonal rajzolása',
                saveAsPdf: 'Mentés PDF-ként'
            }
        },
        title: 'Emberiesség ellenes kártyák',
        toggleNavigation: 'Toggle navigation',
        menu: {
            home: 'Intro',
            cards: 'Kártyák',
            login: 'Belépés',
            logout: 'Kilépés',
            account: 'Profil',
        },
        footer: {
            beforeHearth: 'Sok-sok',
            afterHearth: '-el, Budapestről'
        },
        user: {
            email: 'E-mail',
            password: 'Jelszó',
            name: 'Név',
            confirmPassword: 'Jelszó ismét',
            register: 'Registráció',
            createAccount: 'Regisztráció',
            changePassword: 'Jelszó csere',
            oldPassword: 'Régi jelszó',
            newPassword: 'Új jelszó',
            newPasswordRepeat: 'Új jelszó újra',
            changeEmail: 'E-mail csere',
            newEmail: 'Új e-mail'
        }
    });
});
