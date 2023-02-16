import {FooterLink} from '@app/common/components/footer-link/footer-link.component'

export const Footer = () => {
  return (
    <div className='bg-gray-900 pt-12 px-12 pb-8'>
        <div className="">
            <div className="mb-4">
                <span className='font-bold uppercase text-white'>Контакты</span>
            </div>
            <div className="mb-8">
                <ul className="list-none">
                    <FooterLink href='tel:89138053736'>89138053736</FooterLink>
                    <FooterLink href='mailto:selimkhanov_deni@list.ru'>selimkhanov_deni@list.ru</FooterLink>
                </ul>
            </div>
            <hr className='relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8' />
            <div>
                <span className='text-xl text-white font-semibold'>🍕 PizzaStack</span>
            </div>
        </div>
    </div>
  )
}
