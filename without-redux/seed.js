const people = [
  {
    name: 'Mac',
    job: 'Instructor',
    favoriteFood: 'Drunken Noodle',
  },
  {
    name: 'Ben',
    job: 'Instructor',
    favoriteFood: 'Burgers',
  },
];

const { db, User } = require('./server/db');
const seed = async () => {
  await db.sync({ force: true });

  await Promise.all(
    people.map(async (person) => {
      await User.create(person);
    })
  );
  db.close();
  console.log('Seeding successful!');
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
