
import {Observable} from 'rxjs';

declare var io;

export default function RxfromIO(eventName) {
    return Observable.create(observer => {
        io.on(eventName, (data) => {
            observer.onNext(data)
        });
        return {
            dispose: io.close
        }
    });
}
