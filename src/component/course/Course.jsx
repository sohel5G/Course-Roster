import PropTypes from 'prop-types';
import dollar from '../../assets/icons/dollar.png'
import frame from '../../assets/icons/frame.png'

function Course({ course, handleSelectItem }) {

    const { cover, title, description, price, credit } = course;

    return (
        <>
            <div className="bg-white p-4 rounded-xl">
                <img className="w-full" src={cover} alt="" />
                <h2 className="text-lg font-semibold py-3"> {title} </h2>
                <p className="leading-7"> {description} </p>
                <div className='flex justify-between py-6'>
                    <div className='flex justify-between gap-1 items-center'>
                        <img className="h-5" src={dollar} alt="" />
                        <p className='text-base'>Price : <span>{price}</span> </p>
                    </div>
                    <div className='flex justify-between gap-1 items-center'>
                        <img className='h-5' src={frame} alt="" />
                        <p className='text-base'>Credit : <span>{credit}</span>hr </p>
                    </div>
                </div>
                <button onClick={() => handleSelectItem(course)} className='bg-blue-500 w-full text-white py-[7px] text-lg font-semibold rounded-xl'>Select</button>
            </div>
        </>
    )
}

Course.propTypes = {
    course:PropTypes.object.isRequired,
    handleSelectItem:PropTypes.func.isRequired
}

export default Course;