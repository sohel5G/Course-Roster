import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useState } from 'react'
import './App.css'
import Courses from './component/courses/Courses'
import Header from './component/header/Header'
import Sidebar from './component/sidebar/Sidebar'

function App() {

  const [selectedItem, setSelectedItem] = useState([]);
  const [totalHours, setTotalHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remaningHours, setRemaingHours] = useState(20);

  const handleSelectItem = (course) => {

    if (selectedItem.find(element => course.id === element.id)) {
      return toast.warn(`"${course.title}"  Already In your cart`);
    }else{

      let newTotalHours = course.credit;
      for (let hours of selectedItem) {
        newTotalHours = hours.credit + newTotalHours;
      }
     
      const totalRemingHours = 20 - newTotalHours;

      if (newTotalHours > 20){
        return toast.warn(`Remaining Credit Hour is ${remaningHours} hr, Please select a course which credit is less then ${remaningHours} hr` );
      }

      setTotalHours(newTotalHours);
      setRemaingHours(totalRemingHours);

      const newSelectedItem = [...selectedItem, course];
      setSelectedItem(newSelectedItem);
    }
    
    let newTotalPrice = course.price;
    for (let hours of selectedItem) {
      newTotalPrice = hours.price + newTotalPrice;
    }
    setTotalPrice(newTotalPrice);

  }

  return (
    <>
      <header className='container mx-auto px-5'>
        <Header />
      </header>
      <main className='container mx-auto px-5 lg:flex gap-3'>
        <section className='lg:w-3/4 mb-7'>
          <Courses handleSelectItem={handleSelectItem} />
        </section>
        <aside className='lg:w-1/4 mb-7'>
          <Sidebar selectedItem={selectedItem} totalHours={totalHours} totalPrice={totalPrice} remaningHours={remaningHours} />
        </aside>
      </main>
      <ToastContainer/>
    </>
  )
}

export default App


