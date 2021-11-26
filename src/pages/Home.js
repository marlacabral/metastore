import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Search from '../Components/Search/Search';
import Card from '../Components/Card/Card';
import Footer from '../Components/Footer/Footer';
import Container from '../Components/Container/Container';

export default function Home(){

    return(
        <>
            <Navbar />
            <Slider 
            imageLink='https://cdn.builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/ATmap%20v3.jpg'
            alt='Metaverso'
            />
            <Search />
            <Container title='Mais vendidos'>
                <Card 
                image='https://cdn.builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/In%20The%20Heights%20on%20Roblox%206.png'
                title='Metaverso'
                preco='299,00'
                />
            </Container>
            <Footer />
        </>
    )
}