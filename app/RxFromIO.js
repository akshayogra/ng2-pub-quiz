System.register(['rxjs/observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var observable_1;
    function RxfromIO(eventName) {
        return observable_1.Observable.create(function (observer) {
            io.on(eventName, function (data) {
                observer.next(data);
            });
            return {
                dispose: io.close
            };
        });
    }
    exports_1("default", RxfromIO);
    return {
        setters:[
            function (observable_1_1) {
                observable_1 = observable_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=RxFromIO.js.map