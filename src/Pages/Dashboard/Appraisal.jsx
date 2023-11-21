import Greetings from '../../Components/Dashboard-Layout/Greetings';
import bg from '../../assets/Icons/appraisal-bg.svg';

const Appraisal = () => {
  return (
    <>
        <Greetings />

        {/* <div> */}
            <img src={bg} alt="coming soon" className='md:ml-36 mx-auto sm:mx-0 w-96 sm:w-[31rem]' />
        {/* </div> */}
    </>
  )
}

export default Appraisal