import { BehaviorSubject } from "rxjs";

const subject$ = new BehaviorSubject( 1 );
// Initial value
subject$.next( 0 );

/**
 * This service emits all the values
 */
export default {
    /**
     * In order to receive stream values, we need to frst subscribe
     * @param {Function} setState Reference to the state changing function in the vue
     */
    subscribe( setState )
    {
        return subject$.subscribe( setState )
    }
    /**
     * Increment the counter and
     * publish the value to the stream
     * 
     * @param {String} message 
     */
    ,increment()
    {
        const v = subject$.value;
        subject$.next( v +1 );
    }
    /**
     * Decrement the counter and
     * publish the value to the stream
     * 
     * @param {String} message 
     */
    ,decrement()
    {
        const v = subject$.value;
        subject$.next( v -1 );
    }
};