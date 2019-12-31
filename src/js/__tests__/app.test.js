import { Character, Team } from '../app';

// Character

const expected1 = {
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
  name: 'aaa',
  type: 'Bowman',
};
const expected2 = {
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
  name: 'bbb',
  type: 'Swordsman',
};
const expected3 = {
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
  name: 'ccc',
  type: 'Magician',
};
const expected4 = {
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
  name: 'ddd',
  type: 'Undead',
};
const expected5 = {
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
  name: 'eee',
  type: 'Zombie',
};
const expected6 = {
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
  name: 'fff',
  type: 'Daemon',
};

describe('Character', () => {
  test.each([
    ['aaa', 'Bowman', expected1],
    ['bbb', 'Swordsman', expected2],
    ['ccc', 'Magician', expected3],
    ['ddd', 'Undead', expected4],
    ['eee', 'Zombie', expected5],
    ['fff', 'Daemon', expected6],
  ])('lets hero rise up %s (%s)', (name, type, expected) => {
    const hero = new Character(name, type);
    expect(hero).toEqual(expected);
  });

  test.each([
    ['morethan10simbols', 'Bowman'],
    ['Z', 'Swordsman'],
  ])('should throw name Error - %s', (name, type) => {
    expect(() => new Character(name, type)).toThrowError(new Error('Имя персонажа должно быть от 2 до 10 символов'));
  });

  test('should throw type Error', () => {
    expect(() => new Character('uuu', 'Kraken')).toThrowError(new Error('Кто ты?'));
  });
});

// Team

const aaa = new Character('aaa', 'Bowman');
const bbb = new Character('bbb', 'Swordsman');
const ccc = new Character('ccc', 'Magician');

describe('Team', () => {
  it('should add one hero to team', () => {
    const expected = new Set([aaa]);

    const team = new Team();
    team.add(aaa);
    expect(team.members).toEqual(expected);
  });

  it('method add should throw an Error when someone trying make clones', () => {
    const result = () => {
      const team = new Team();
      team.add(aaa);
      team.add(aaa);
    };

    expect(result).toThrow(new Error('Такой персонаж уже существует'));
  });

  it('should add All heros to team', () => {
    const expected = new Set([aaa, bbb, ccc]);

    const team = new Team();
    team.addAll(aaa, bbb, ccc);
    expect(team.members).toEqual(expected);
  });

  it('should add All heros to team only once', () => {
    const team = new Team();

    team.add(bbb);
    team.addAll(aaa, bbb, ccc);
    expect(team.members.size).toBe(3);
  });

  it('should return an array', () => {
    const expected = [...(new Set([aaa, bbb, ccc]))];

    const team = new Team();
    team.addAll(aaa, bbb, ccc);
    const result = team.toArray();

    expect(result).toEqual(expected);
  });
});
