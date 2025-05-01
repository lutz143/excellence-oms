import EventManager from '../containers/EventManager';
import ActivityLocation from '../containers/ActivityLocations';
import Beneficiaries from '../containers/Beneficiaries';

const Involvement = () => {
    return (
        <>
            <section>
                <Beneficiaries />
            </section>
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
