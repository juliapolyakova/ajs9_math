import Daemon from '../src/Daemon';

test('Атака персонажа Daemon', () => {
  const player = new Daemon('Fro');
  player.distance = 2;
  const expected = 90;
  const received = player.attack;

  expect(received).toBe(expected);
});

test('Атака персонажа Daemon, stoned = true', () => {
  const player = new Daemon('Fro');
  player.distance = 2;
  player.stoned = true;
  const expected = 85;
  const received = player.attack;

  expect(received).toBe(expected);
});
