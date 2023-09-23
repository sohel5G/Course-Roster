import PropTypes from 'prop-types';

function Sidebar({ selectedItem, totalHours, totalPrice, remaningHours  }) {
    let counter = 0;
    return (
        <div className='bg-white p-5 rounded-xl '>
            <h1 className="text-[#2F80ED] font-bold text-lg mb-4">Credit Hour Remaining <span>{remaningHours}</span> hr</h1>
            <hr />
            <h1 className="font-bold text-lg mt-5">Course Name</h1>
            <div className="py-4">
                {
                    selectedItem.map(element => {
                        return(
                            <p key={element.id} className="py-[6px]"> 
                                {counter += 1} {element.title} 
                            </p>
                        )
                    })
                }
            </div>
            <hr className="mt-2" />
            <h2 className="font-medium py-4">Total Credit Hour : {totalHours}</h2>
            <hr />
            <h2 className="py-4 font-semibold">Total Price : {totalPrice} USD</h2>
        </div>
    )
}

Sidebar.propTypes = {
    selectedItem:PropTypes.array.isRequired,
    totalHours:PropTypes.number.isRequired,
    totalPrice:PropTypes.number.isRequired,
    remaningHours:PropTypes.number.isRequired
}

export default Sidebar;