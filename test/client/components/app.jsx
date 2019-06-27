import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from '../../testutils';
import { App } from '../../../src/client/components/app';

test('Rendering the entire app', () => {
  const props = {
    color: 'green',
    dispatch: () => {},
  };

  const component = renderer.create(
    <Provider>
      <App {...props} />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rendering the yellow colored app', () => {
  const props = {
    color: 'yellow',
    dispatch: () => {},
  };

  const component = renderer.create(
    <Provider>
      <App {...props} />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rendering the red colored app', () => {
  const props = {
    color: 'red',
    dispatch: () => {},
  };

  const component = renderer.create(
    <Provider>
      <App {...props} />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
