import React from 'react';

import { render } from '@testing-library/react';

import { getRelativeMousePosition } from './domUtil';

describe('domUtil', () => {
  describe('getRelativeMousePosition', () => {
    it('should calculate mouse cursor position relative by other element.', () => {
      const relativeId = 'relativeElement';
      const { getByTestId } = render(
        <div
          data-testid={relativeId}
          style={{ position: 'absolute', left: '100px', top: '100px' }}
        ></div>
      );

      const relativeElement = getByTestId(relativeId);
      const bound = relativeElement.getBoundingClientRect();
      const mouseEvent = {
        clientY: 30,
        clientX: 30,
      } as React.MouseEvent<HTMLElement>;

      expect(getRelativeMousePosition(mouseEvent, relativeElement)).toEqual([
        30 - bound.left - relativeElement.clientLeft,
        30 - bound.top - relativeElement.clientTop,
      ]);
    });
  });
});

const sum = (a: number, b: number) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
