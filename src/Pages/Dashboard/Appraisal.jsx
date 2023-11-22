import Greetings from '../../Components/Dashboard-Layout/Greetings';
import bg from '../../assets/Icons/appraisal-bg.svg';

const Appraisal = () => {
  return (
    <>
        <Greetings />

        {/* <div> */}
            <img src={bg} alt="coming soon" className='mx-auto w-full sm:w-[40rem]' />
        {/* </div> */}
    </>
  )
}

export default Appraisal