import { shallow } from "enzyme";
import { GifGrid } from "../components/GifGrid";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en en el componente GifExpertApp' , () => {
    test('debe mostrarse el componente correctamente el componente', () => { 
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostar un determinado numero de categorias por defecto', () => {
        
        const categories = ['One Punch','Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);        
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
})