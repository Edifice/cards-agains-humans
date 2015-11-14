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
        }
    });
});
