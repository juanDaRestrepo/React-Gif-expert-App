import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");
describe('Pruebas en el componente GifGrid', () => {
    const category = 'One Punch';

    test('debe mostrarse el componente correctamente', () => { 
        useFetchGifs.mockReturnValue({
            data: [],
            loading:true
        })
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostar items cuando se cargan imagenes useFetchGifs', () => {
          const gifs = [{
            id: 'abc',
            url: 'https//localhost/cualquier/cosa.jpg',
            title:'cualquier cosa'
          }];

          useFetchGifs.mockReturnValue({
              data:gifs,
              loading:false
          });

          const wrapper = shallow(<GifGrid category={category}/>)
          expect(wrapper).toMatchSnapshot();
          expect(wrapper.find('p').exists()).toBe(false);
          expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    


    
})