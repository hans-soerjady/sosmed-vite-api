'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("tweets", [
      {
        userId: "2",
        content: "whatsupp",
        img: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "3",
        content: "woo",
        img: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "4",
        content: "tuing",
        img: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
