'use strict';
/**
 * @ngdoc function
 * @name cardsAgainstHumansApp.controller:CardCtrl
 * @description
 * # CardCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('cardsAgainstHumansApp')
    .controller('CardCtrl', function($scope, $rootScope, Ref, Auth, $firebaseArray, $timeout, $uibModal) {
        $scope.cards = $firebaseArray(Ref.child('cards'));
        $scope.tags = ['mature', 'children', 'political', 'sexual', 'disgusting', 'nerd', 'geek'];
        $scope.card = {};
        $scope.filterTags = [];
        
        $scope.tags.forEach(function(tag) {
            $scope.filterTags.push({
                tag: tag,
                checked: true
            });
        });

        $scope.filterCard = {
            text: '',
            type: null,
            tags: []
        }

        $scope.authData = Auth.$getAuth();

        // display any errors
        $scope.cards.$loaded().catch(alert);

        $scope.filter = function(cards) {
            return cards.filter(function(card) {
                var visible = true;
                if ($scope.filterCard.type !== null) {
                    if ($scope.filterCard.type !== card.type) {
                        visible = false;
                    }
                }

                var matchTag = false;
                $scope.filterTags.forEach(function(tag) {
                    if (card.tags) {
                        if (tag.checked && card.tags.indexOf(tag.tag) > -1) {
                            matchTag = true;
                        }
                    }
                });
                if (!matchTag) {
                    visible = false;
                }

                if ($rootScope.language !== card.language) {
                    visible = false;
                }

                return visible;
            });
        }

        function alert(msg) {
            $scope.err = msg;
            $timeout(function() {
                $scope.err = null;
            }, 5000);
        }

        $scope.ucfirst = function(str) {
            str += '';
            var f = str.charAt(0).toUpperCase();
            return f + str.substr(1);
        }

        $scope.openModal = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'addCard.html',
                controller: 'CardModalCtrl',
                resolve: {
                    tags: function() {
                        return $scope.tags;
                    },
                    ucfirst: function() {
                        return $scope.ucfirst;
                    }
                }
            });

            modalInstance.result.then(function(card) {
                if (_.isString(card.text) && $scope.authData) {
                    // push a message to the end of the array
                    $scope.cards.$add({
                            text: card.text,
                            type: card.type,
                            tags: card.tags,
                            creation: (new Date).toISOString(),
                            language: $rootScope.language,
                            creator: $scope.authData.uid
                        })
                        // display any errors
                        .catch(alert);
                }
                $scope.card = {
                    text: '',
                    type: 'black',
                    tags: []
                }
            });
        };

        $scope.openPrintModal = function() {
            var cards = $scope.filter($scope.cards);
            if (cards.length < 1) {
                return 0;
            }
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'printCards.html',
                controller: 'CardPrintModalCtrl',
                resolve: {
                    cards: function() {
                        return cards;
                    }
                }
            });
        }
    })
    .controller('CardModalCtrl', function($scope, $uibModalInstance, tags, ucfirst) {
        $scope.tags = tags;
        $scope.ucfirst = ucfirst;
        $scope.card = {
            text: '',
            type: 'black',
            tags: {}
        };
        tags.forEach(function(tag) {
            $scope.card.tags[tag.$value] = false;
        });


        $scope.addCard = function() {
            var card = angular.copy($scope.card);

            card.tags = Object.keys($scope.card.tags).filter(function(tag) {
                return $scope.card.tags[tag];
            });

            $uibModalInstance.close(card);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    })
    .controller('CardPrintModalCtrl', function($scope, $uibModalInstance, cards) {
        $scope.cards = _.sortByAll(cards, ['type', 'text']);
        $scope.opt = {
            page: {
                format: [210, 297]
            },
            margin: 10,
            cardPadding: 5,
            roundedCorner: 0,
            cardSize: 47.5,
            outline: true
        };

        $scope.print = function(save) {
            var opt = $scope.opt;

            opt.page.rowCount = Math.floor((opt.page.format[0] - (2 * opt.margin)) / opt.cardSize);
            opt.page.colCount = Math.floor((opt.page.format[1] - (2 * opt.margin)) / opt.cardSize);

            var doc = new jsPDF(opt.page);
            doc.setProperties({
                title: 'Cards Agains Humans',
                subject: 'Your cards to play against humans',
                author: 'Daniel Salamon',
                creator: 'Daniel Salamon',
                keywords: '4,8,15,16,23,42'
            });

            doc.setFont("times");
            doc.setFontType("bold");

            var drawCard = function(type, col, row, text) {
                if (type === 'white') {
                    doc.setFillColor(255, 255, 255);
                    doc.setTextColor(0);
                } else {
                    doc.setFillColor(0);
                    doc.setTextColor(255, 255, 255);
                }
                doc.roundedRect(opt.margin + (col * opt.cardSize), opt.margin + (row * opt.cardSize), opt.cardSize, opt.cardSize, opt.roundedCorner, opt.roundedCorner, 'FD');

                doc.setFontSize(18);
                doc.text(text, opt.margin + opt.cardPadding + (col * opt.cardSize), opt.margin + (opt.cardPadding * 2) + (row * opt.cardSize));
            }

            var drawCutLines = function() {
                var length = (opt.margin / 2);

                for (var i = 0; i < opt.page.rowCount + 1; i++) {
                    var x = opt.margin + (i * opt.cardSize);
                    doc.line(x, 0, x, length);
                    doc.line(x, opt.page.format[1] - length, x, opt.page.format[1]);
                }

                for (var i = 0; i < opt.page.colCount + 1; i++) {
                    var y = opt.margin + (i * opt.cardSize);
                    doc.line(0, y, length, y);
                    doc.line(opt.page.format[0] - length, y, opt.page.format[0], y);
                }
            }

            if (opt.outline) {
                doc.setDrawColor(0);
            } else {
                doc.setDrawColor(0);
                drawCutLines();
                doc.setDrawColor(255, 255, 255);
            }

            for (var i = 0; i < $scope.cards.length; i++) {
                var row = i % opt.page.rowCount;
                var col = Math.floor(i / opt.page.rowCount) % opt.page.colCount;
                drawCard($scope.cards[i].type, row, col, $scope.cards[i].text);
                if (((row + 1) * (col + 1)) % (opt.page.rowCount * opt.page.colCount) === 0) {
                    doc.addPage();
                    if (!opt.outline) {
                        doc.setDrawColor(0);
                        drawCutLines();
                        doc.setDrawColor(255, 255, 255);
                    }
                }
            };

            if (save === true) {
                doc.save('Cards Against Humans - deck.pdf');
            } else {
                doc.autoPrint();
                doc.output('dataurlnewwindow');
            }
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });
