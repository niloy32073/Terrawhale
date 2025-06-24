
import './Title.css'

const Title = ({title,design}) => {
    return (
        <div>
            <p className={` sideTitle text-green font-bold text-3xl dark:text-white ${design}`}>{title}</p>
        </div>
    );
};

export default Title;