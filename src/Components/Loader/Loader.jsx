import './Loader.css';

const Loader = ({ text }) => {
    const loadArr = new Array(12).fill('a');

  return (
    <section className="grid text-center p-5 w-full min-w-full max-w-full h-full place-content-center place-items-center">
        <main className="flex flex-col items-center justify-center">
            <div className="mb-5 inline-block relative w-20 h-20 scale-125">
                {
                    loadArr.map((arr, i) => {
                        return (
                            <div key={i} className='load-div absolute w-2 h-2 bg-[#1678f3] rounded-[50%]' />
                        )
                    })
                }
            </div>
            <h2 className='text-xl text-[#1678f3]'>{text || 'Loading...'}</h2>
        </main>
    </section>
  )
}

export default Loader