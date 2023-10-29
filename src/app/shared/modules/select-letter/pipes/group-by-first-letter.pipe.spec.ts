import { GroupByFirstLetterPipe } from './group-by-first-letter.pipe';

describe('GroupByFirstLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupByFirstLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
