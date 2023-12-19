import useInstructor from '../../../../hooks/useInstructor';
import PopInstructors from '../PopInstructors/PopInstructors';
import './Instructors.css';


const Instructors = () => {
    const [instructors] = useInstructor();
    const filteredData = instructors.filter((item) => item.number_of_students !== '');
    const sortedData = filteredData.sort((a, b) => b.number_of_students - a.number_of_students);


    return (
        <div className='intructor-main-div  rounded-lg bg-cover'>
           <div className='bg-indigo-950 bg-opacity-80 py-16'>
           <div className='text-center'>
                <h1 className='text-6xl text-white my-4 font-bold'>Our Popular Instructors</h1>
                <p className='text-1xl text-orange-500 my-4 font-bold'>Choose your Instructor</p>
            </div>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>
            
            {
               sortedData.slice(0, 6)?.map(item => 
               <PopInstructors
               key={item._id}
               item={item}
               ></PopInstructors>) 
            }
        </div>
           </div>
        </div>
    );
};

export default Instructors;