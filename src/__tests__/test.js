import ErrorRepository from '../js/task';

let mistake;
beforeEach(() => {
  mistake = new ErrorRepository();
});
it('returns mistake', () => {
  expect(mistake.translate(404)).toEqual('Страница не найдена');
});

it('throws an error', () => {
  expect(mistake.translate(304)).toEqual('Unknown error');
});
