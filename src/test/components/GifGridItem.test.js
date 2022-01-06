import {shallow} from 'enzyme';
import React from 'react';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
        const url = "http://algo";
        const title = "algun titulo";
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    test('debe de mostrar el componente correctamente', () => {
        
        
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe contener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('div de la card debe tener las clases animate__animated animate__backInLeft', () => {
        const div = wrapper.find('div')
        console.log(div.prop('className'));
        const classN = div.prop('className')
        expect(classN.includes('animate__backInLeft')).toBe(true)
    })
    
})

