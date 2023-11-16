import image from '../../assets/Images/book-img.png';

const EbookCard = () => {
  return (
    <article className="p-1.5 flex gap-3 rounded-lg border border-[#8F8FB7] bg-white">
        <img src={image} height={120} alt="" />
        <div className='flex flex-col gap-1'>
            <h3 className='font-plus-jakarta-sans font-medium'>Human Resource Management</h3>
            <p className='text-xs'>A Transformative Approach</p>
            <p>
                Author: 
                <span> Cam Caldwell + Verl Anderson</span>
            </p>
            <p className='text-xs'>This chapter introduces the concept of Transformative Human Resource Management and identifies the need to raise the bar of performance for Human Resource Professionals in today's world -- which we call the Transformative Era</p>
        </div>
    </article>
  )
}

export default EbookCard