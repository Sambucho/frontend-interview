import React from 'react';
import ReactDOM from 'react-dom';
import { Store, Reducer, Middleware } from 'redux';
import App from './App';
import Core from '../Core/Core';

class Application {
  private static instance: Application | null = null;
  private readonly core: Core;

  private constructor() {
    this.core = new Core();
  }

  public static createStore = (reducer: Reducer, middleware: Middleware): Store => {
    const app = Application.getApp();

    return app.core.createStore(reducer, middleware);
  };

  private static getApp = (): Application | never => {
    if (Application.instance === null) {
      throw new Error('Вначале инициализируйте приложение');
    }

    return Application.instance;
  };

  public static init = (): void => {
    if (Application.instance !== null) {
      throw new Error('Приложение уже инициализировано');
    }

    Application.instance = new Application();

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };
}

export default Application;
