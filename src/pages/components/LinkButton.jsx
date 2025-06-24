
import { Link } from 'react-router-dom';

const LinkButton = ({title,to,design}) => {
    return (
      <Link
        to="/approach"
        className=
        {`btn hover:text-green bg-green px-6 py-2 rounded-full text-[#121212] dark:text-white font-bold block text-center w-52 border-2 border-gray-700 dark:border-gray-300 ${design}`}
      >
        {title}
      </Link>
    );
};

export default LinkButton;