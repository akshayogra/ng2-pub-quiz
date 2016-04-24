
import {Observable} from 'rxjs/observable';
import {NgZone} from 'angular2/core';

declare var io;

export default function RxfromIO(eventName) {
    return Observable.create(observer => {
        io.on(eventName, (data) => {
            observer.next(data)
        });
        return {
            dispose: io.close
        }
    });
}
