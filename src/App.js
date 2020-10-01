import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Spinner from './components/Spinner';
import api from './api/api';
import './App.css';

function App() {
    const [searchText, setSearchText] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        api.search(searchText).then((data) => {
            const items = data.results.map((el) => ({
                id: el.id,
                title: el.description,
                subtitle: el.user.name,
                alt: el.alt_description,
                src: el.urls.regular,
            }));
            setIsLoading(false);
            setCards(items);
        });
    }, [searchText]);

    return (
        <div className="App">
            <div className="App-content">
                <div className="App-search">
                    <Input placeholder="Поиск картинок" />
                    <Button title="Search" handleClick={() => setSearchText('cats')} />
                </div>
                <div className="App-cards">
                    {isLoading ? <Spinner /> : cards.map(({ id, ...item }) => <Card key={id} {...item} />)}
                </div>
            </div>
        </div>
    );
}

export default App;
