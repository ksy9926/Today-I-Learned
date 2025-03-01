function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    const n = phone_book[i];
    const m = phone_book[i + 1];
    if (m.startsWith(n)) return false;
  }

  return true;
}
