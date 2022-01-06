import { AddCategory } from "../../components/AddCategory"
import {shallow} from 'enzyme';
import react from "react";
import '@testing-library/jest-dom';
describe('Pruebas en <AddCategory />',() => {

    const setCategories = jest.fn();
    let wrapper;
    let value;
    let input;

    beforeEach(() => {
        jest.clearAllMocks();
         wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
         input = wrapper.find('input')
         value = 'Hola mundo';
        input.simulate('change',{target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('no debe de postear la informacion on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'hola mundo';
        //1.simular el inputChange
        wrapper.find('input').simulate('change',{target:{value}});
        //2.simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        //3.setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        //4.el calor input de estar ''
        expect(input.prop('value')).toBe('') 
    })
    
    
})