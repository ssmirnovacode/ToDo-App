import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';

const App = () => {

    const items = [
        {label: 'Have coffee', important: false, id: 1},
        {label: 'Eat lunch', important: false, id: 2},
        {label: 'Code', important: true, id: 3}
    ];

    return(
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList items={items} />
        </div>
    )
}

export default App;