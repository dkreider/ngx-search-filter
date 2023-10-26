import { NgxFilterPipe } from './ngx-filter.pipe';

describe('NgxFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new NgxFilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should filter an array of strings', () => {
    const pipe = new NgxFilterPipe();
    const strings = ['Alice', 'John', 'Jack', 'Bob ', 'Jane'];
    const expected = ['John', 'Jack', 'Jane'];
    const result = pipe.transform(strings, 'J');
    expect(result).toEqual(expected);
  });
  it('should filter an array of objects', () => {
    const pipe = new NgxFilterPipe();
    const alice = { 'name': 'Alice', 'email': 'alice@gmail.com'};
    const bob = { 'name': 'Bob', 'email': 'bob@gmail.com'};
    const dug = { 'name': 'Dug', 'email': 'dug@gmail.com'};
    const people = [alice, bob, dug];
    const expected = [alice];
    const result = pipe.transform(people, 'Ali');
    expect(result).toEqual(expected);
  });
});
