System.register(['rxjs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var rxjs_1;
    function RxfromIO(eventName) {
        return rxjs_1.Observable.create(function (observer) {
            io.on(eventName, function (data) {
                observer.onNext(data);
            });
            return {
                dispose: io.close
            };
        });
    }
    exports_1("default", RxfromIO);
    return {
        setters:[
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=RxFromIO.js.map