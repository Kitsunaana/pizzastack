import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterLink } from './footer-link.component';

export default { title: 'Common/Footer Link', component: FooterLink } as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => <ul className='list-none'><FooterLink {...args} /></ul>;

export const Tel = Template.bind({})
export const Mail = Template.bind({})

Tel.args = {
    href: 'tel:89138053736',
    children: '89138053736'
}

Mail.args = {
    href: 'mailto:selimkhanov_deni@lsit.ru',
    children: 'selimkhanov_deni@lsit.ru'
}