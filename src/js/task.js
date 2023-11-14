export default class ErrorRepository {
  constructor() {
    this.errCollection = new Map([
      [404, 'Страница не найдена'],
      [401, 'Ошибка авторизации'],
      [403, 'Ошибка доступа'],
      [500, 'Ошибка сервера'],
    ]);
  }

  translate(code) {
    if (this.errCollection.has(code)) {
      return this.errCollection.get(code);
    }
    return 'Unknown error';
  }
}
