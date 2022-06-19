module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    wallet: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.BOOLEAN,
    }
  });
  return User;
};
