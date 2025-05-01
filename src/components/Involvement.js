import EventManager from '../containers/EventManager';
import ActivityLocation from '../containers/ActivityLocations';

const Involvement = () => {
    return (
        <>
            <section>
                <ActivityLocation />
            </section>
            <section>
                <EventManager />
            </section>
        </>
    );
};

export default Involvement;
