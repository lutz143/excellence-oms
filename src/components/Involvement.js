import EventManager from '../containers/EventManager';
import ActivityLocation from '../containers/ActivityLocations';
import Beneficiaries from '../containers/Beneficiaries';

const Involvement = () => {
    return (
        <>
            <Beneficiaries />
            <ActivityLocation />
            <EventManager />
        </>
    );
};

export default Involvement;
