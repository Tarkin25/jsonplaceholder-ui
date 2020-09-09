import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
import AlbumsPage from "./pages/AlbumsPage";
import AlbumPage from "./pages/AlbumPage";
import TodosPage from "./pages/TodosPage";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Navbar />
            <Switch>
                <Route exact path={["", "/users"]} component={UsersPage} />
                <Route exact path="/albums" component={AlbumsPage} />
                <Route exact path="/albums/:id" component={AlbumPage} />
                <Route exact path="/todos" component={TodosPage} />
            </Switch>
        </Provider>
    </BrowserRouter>
);

export default App;
