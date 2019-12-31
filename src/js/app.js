function Character(name, type) {
  if (name.length < 3 || name.length > 10) {
    throw new Error('Имя персонажа должно быть от 2 до 10 символов');
  }

  this.type = type;
  this.name = name;
  this.health = 100;
  this.level = 1;

  if (type === 'Bowman') {
    this.attack = 25;
    this.defence = 25;
  } else if (type === 'Swordsman') {
    this.attack = 40;
    this.defence = 10;
  } else if (type === 'Magician') {
    this.attack = 10;
    this.defence = 40;
  } else if (type === 'Undead') {
    this.attack = 25;
    this.defence = 25;
  } else if (type === 'Zombie') {
    this.attack = 40;
    this.defence = 10;
  } else if (type === 'Daemon') {
    this.attack = 10;
    this.defence = 40;
  } else {
    throw new Error('Кто ты?');
  }
}

class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error('Такой персонаж уже существует');
    }
    this.members.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => this.members.add(hero));
  }

  toArray() {
    return [...this.members];
  }
}

export { Character, Team };
