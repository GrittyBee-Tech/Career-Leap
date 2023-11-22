import Button from '../Button';
import DownloadIcon from '../Icons/DownloadIcon';
import { Card } from './Card';

const EbookCard = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 gap-x-2.5 gap-y-4 mt-5'>
      {Card.map((card) => {

        const { id, Image, author, title, content, href } = card;
        return (
          <article key={id} className="p-1.5 flex gap-3 rounded-lg border border-[#8F8FB7] bg-white">
            <img className="rounded" src={Image} width={120} height={90} alt="" />
            <div className='flex flex-col gap-1'>
              <h3 className='font-plus-jakarta-sans font-medium'>{title}</h3>
              <p className='text-xs font-plus-jakarta-sans'>{content}</p>
              <p className='font-bold'>
                Author:
                <span className='font-bold'>{author}</span>
              </p>

              <a className='' href={href} download=" "> <DownloadIcon />
                <Button text={'Download'} styles='text-[white]'> </Button></a>

            </div>
          </article>)

      })}
    </section>

  )
}

export default EbookCard