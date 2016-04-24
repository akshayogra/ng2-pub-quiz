
import {Observable} from 'rxjs/observable';
import {NgZone} from 'angular2/core';

// socket.io is globally set at window.io
declare var io;


// subscriber.next()
// subscriber.error()
// subscriber.completed()

export default function RxfromIO(eventName) {
    return Observable.create(subscriber => {
        io.on(eventName, (data) => {
            subscriber.next(data)
        });
        return {
            dispose: io.close
        }
    });
}
