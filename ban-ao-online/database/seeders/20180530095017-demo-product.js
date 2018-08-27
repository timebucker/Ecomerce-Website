'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	var products = [
		{
			productName: "Áo phông HA001",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-1.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA002",
			productStyleID: 2,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-2.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA003",
			productStyleID: 3,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-3.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA004",
			productStyleID: 4,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-4.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA005",
			productStyleID: 5,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-5.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA006",
			productStyleID: 6,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-6.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA007",
			productStyleID: 7,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-7.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA008",
			productStyleID: 8,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-8.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA009",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-9.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "AÁo phông HA010",
			productStyleID: 2,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-10.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA011",
			productStyleID: 3,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-11.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA012",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-12.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA013",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-13.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA014",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-14.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA015",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-15.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA016",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-16.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA017",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-17.png",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA018",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-18.jpg",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA019",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-19.png",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},
		{
			productName: "Áo phông HA020",
			productStyleID: 1,
			productPrice: 100000.0,
			pathToImg: "/img/products/shirt-20.png",
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()')
		},

	];
    return queryInterface.bulkInsert('Products', products, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
	return queryInterface.bulkDelete('Products', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
