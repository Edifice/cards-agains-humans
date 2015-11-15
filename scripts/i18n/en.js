app.config(function($translateProvider) {
    $translateProvider.translations('en', {
        languages: {
            en: 'English',
            hu: 'Hungarian'
        },
        save: 'Save',
        cancel: 'Cancel',
        print: 'Print',
        card: {
            createNew: 'Create new card',
            printOrSave: 'Print or Save cards',
            filterHeader: 'Filter cards',
            all: 'All',
            black: 'Black',
            white: 'White',
            tags: {
                mature: 'Mature',
                children: 'Children',
                political: 'Political',
                sexual: 'Sexual',
                disgusting: 'Disgusting',
                nerd: 'Nerd',
                geek: 'Geek'
            },
            print: {
                header: 'Printing {{count}} cards',
                printingOptions: 'Printing options',
                comment: 'This is not so user friendly now. The default options are for printing 4 by 5 cards onto an A4 page. Feel free to play with these settings!',
                pageWidth: 'Page width (mm)',
                pageHeight: 'Page height (mm)',
                pageMargin: 'Page margin (mm)',
                roundedCorners: 'Rounded corners (mm)',
                cardSize: 'Card size (mm)',
                outline: 'Draw card outline',
                saveAsPdf: 'Save as PDF file'
            }
        },
        title: 'Cards Against Humans',
        toggleNavigation: 'Toggle navigation',
        menu: {
            home: 'Home',
            cards: 'Cards',
            login: 'Login',
            logout: 'Logout',
            account: 'Account',
        },
        footer: {
            beforeHearth: 'Made with',
            afterHearth: 'in Budapest'
        },
        user: {
            email: 'E-mail',
            password: 'Password',
            name: 'Name',
            confirmPassword: 'Confirm password',
            register: 'Register',
            createAccount: 'Create Account',
            changePassword: 'Change password',
            oldPassword: 'Old password',
            newPassword: 'New password',
            newPasswordRepeat: 'Confirm new password',
            changeEmail: 'Change e-mail',
            newEmail: 'New e-mail',
        }
    });
});
