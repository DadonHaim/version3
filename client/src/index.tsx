import { Provider, myStore ,ReactDOM, App} from './importAll';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={myStore}>
        <App/>
    </Provider>
);
