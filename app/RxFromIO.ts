
import {Observable} from 'rxjs/observable';

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
