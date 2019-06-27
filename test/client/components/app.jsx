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
