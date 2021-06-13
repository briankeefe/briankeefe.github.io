export default {
	xaddress: "528 Main St, Winchester, MA 01890",
	xDisclaimer: `*These items are served raw or undercooked to order. Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. Before placing your order, please inform your server if a person in your party has a food allergy.`,
	xname: "First House Pub",
	xnumber: "(781) 369-1381",
	xhours: "Saturday	11AM–12AM\n\nSunday	11AM–11PM\nMonday	4–11PM\nTuesday	4–11PM\nWednesday	4–11PM\nThursday	11AM–12AM\nFriday	11AM–12AM",
	Starters: [
		{
			name: "Wings",
			price: 10.95,
			desc: "Buffalo, Teriyaki, BBQ, Goldrush, Honey Hot"
		},
		{
			name: "Chicken Fingers",
			price: 9.95,
			desc: "Buffalo, Teriyaki, BBQ, Goldrush, Honey Hot"
		},
		{
			name: "Cheeseburger Sliders",
			price: 9.95,
			desc: "Served with Lettuce, Tomato, and Pickles",
			addon: {
				name: "Add Bacon",
				price: 1.50
			}
		},
		{
			name: "Potato Skins",
			price: 8.95,
			desc: "Cheddar Cheese, Bacon Bits, Scallions, and Sour Cream"
		},
		{
			name: "Cheese Quesadilla",
			price: 6.95,
		},
		{
			name: "Chicken Quesadilla",
			price: 9.95,
			desc: "Served with Lettuce, Sour Cream, and Pico de Gallo",
			addon: {
				name: "Guacamole",
				price: 1.50
			}
		},
		{
			name: "Basket of French Fries",
			price: 6.95,
		},
		{
			name: "Basket of Onion Rings",
			price: "7.95",
		},
		{
			name: "Basket of Sweet Potato Fries",
			price: 7.95,
		},
		{
			name: "Salsa, Guacamole and Chips",
			price: 5.95,
		},
		{
			name: "Tot Basket",
			price: 7.95,
		},
	],
	Soups: [
		{
			name: "New England Clam Chowder",
			options: [
				{
					name: "Bowl",
					price: 8.95,
				}, {
					name: "Cup",
					price: 5.95,
				}
			]
		},
		{
			name: "French Onion Soup",
			price: 6.5,
			desc: "with croutons and melted Swiss cheese",
		},
	],
	Salads: [
		{
			name: "Garden Salad",
			price: 7.95,
			desc: "Spring mix, cherry tomatoes, cucumbers, and red onion",
		},
		{
			name: "Caesar Salad",
			price: 8.95,
			desc: "Romaine lettuce, croutons, parmesan cheese, Caesar dressing, and pita bread",
		},
		{
			name: "Greek Salad",
			price: 9.95,
			desc: "Our garden salad, feta cheese, Kalamata olives, and pita bread",
		},
		{
			name: "Cobb Salad",
			price: 14.5,
			desc: "Mixed greens with hard-boiled eggs, bacon, crumbled bleu cheese, fresh avocado, cherry tomatoes, red onion, cucumbers, and honey mustard",
		},
		{
			name: "Cape Cod Salad",
			price: 10.95,
			desc: "Spring mix, dried cranberries, chopped bacon, crumbled bleu cheese, red onion, cucumbers, cherry tomatoes, and raspberry vinaigrette",
		},
		{
			name: "Wedge Salad",
			price: 8.95,
			desc: "A wedge of iceberg lettuce with cherry tomatoes, chopped bacon, chopped red onion, and ranch dressing",
		},
		{
			name: "Black N' Bleu Salad",
			desc: "Sliced steak tips topped with melted crumbled bleu cheese, served on a garden salad",
		},
		{
			name: "House Side Salad",
			price: 4.95,
		},
		{
			name: "House Side Caesar Salad",
			price: 5.95,
		},
		{
			name: "House Side Greek Salad",
			price: 5.95,
		},
	],
	Salad_Addons: [
		{
			name: "Grilled Chicken Breast",
			price: 4.95
		},
		{
			name: "Sliced steak tips*",
			price: 6.95
		},
		{
			name: "Grilled Shrimp",
			price: 6.95
		}
	],
	Burgers: [
		{
			name: "The House Burger (1/2 lb.)",
			price: 10.95,
		},
		{
			name: "Turkey Burger*",
			price: 9.95,
		},
		{
			name: "Black Bean Burger",
			price: 8.95,
		},
		{
			name: "The Bourbon Burger",
			price: 13.95,
			desc: "Topped with caramelized onions, bacon, bourbon glaze, and cheddar cheese.",
		},
	],
	Burger_Addons: [
		{
			name: "Bacon",
			price: 1.50
		},
		{
			name: "Cheese",
			price: 1.50,
			desc: "American, Swiss, Cheddar, Crumbled Bleu"
		}
	],
	Sandwiches: [
		{
			name: "Grilled Chicken Sandwich/Wrap",
			price: 10.95,
			desc: "Plain, Buffalo, BBQ, or Teriyaki, served with lettuce and tomato on a brioche roll or in a wrap",
		},
		{
			name: "Baked Haddock Sandwich*",
			price: 12.95,
			desc: "Baked haddock with buttered bread crumbs, and lemon butter on a brioche roll with lettuce and tartar sauce.",
		},
		{
			name: "Garlic Steak Sandwich*",
			price: 12.95,
			desc: "Sliced steak served with garlic butter and American cheese on a brioche roll.",
		},
		{
			name: "Cajun Chicken Sandwich*",
			price: 12.95,
			desc: "Lettuce, tomato with a tomato jalapeno mayo on a brioche roll.",
		},
		{
			name: "Buffalo Chicken Wrap",
			price: 10.95,
			desc: "Served with lettuce and blue cheese.",
		},
		{
			name: "Chicken Caesar Wrap*",
			price: 10.95,
			desc: "Chicken, romaine lettuce, parmesan cheese, and Caesar dressing.",
		},
		{
			name: "Steak and Cheese Wrap*",
			price: 12.95,
			desc: "American cheese, Pico de Gallo, sour cream, and lettuce.",
		},
		{
			name: "Gloucester Reuben",
			price: 12.95,
			desc: "Baked haddock on grilled rye bread with Russian dressing, Swiss cheese, and coleslaw.",
		}
	],
	Flatbreads: [
		{
			name: "Cheese & Tomato Sauce Flatbread",
			price: 11.95,
			desc: "House version of Cheese pizza",
		},
		{
			name: "Buffalo Chicken Flatbread",
			price: 14.95,
			desc: "Flatbread topped with Ranch dressing, Buffalo chicken, mozzarella cheese, pickled Jalapenos, and chopped lettuce",
		},
	],
	Entrees: [
		{
			name: "Original House Steak Tips*",
			price: 21.95,
			desc: "12 ounces of our House cut marinated tips",
		},
		{
			name: "Teriyaki Turkey Tips*",
			price: 18.95,
			desc: "12 ounces of Teriyaki marinated Turkey Tips",
		},
		{
			name: "Baked Haddock*",
			price: 18.95,
			desc: "10 ounces of fresh skinless fillets, topped with bread crumbs and wine butter.",
		},
		{
			name: "Fish Tacos",
			price: 16.95,
			desc: "2 Tortillas with lime-marinated haddock, Pico de Gallo, Shredded cabbage, Avocado, Sour cream, and fresh cilantro.",
		},
		{
			name: "First House Mac & Cheese",
			price: 11.95,
			desc: "Cavatappi pasta in our creamy four-cheese sauce topped with bread crumbs.",
			addon: {
				name: "Add Buffalo Chicken",
				price: 4.50
			}
		},
	],
	Sides: [
		{
			name: "French Fries",
		},
		{
			name: "Sweet Potato Fries",
		},
		{
			name: "Onion Rings",
			addon: {
				name: "As an additional side",
				price: 1.50
			}
		},
		{
			name: "Tater Tots",
		},
		{
			name: "Side House Salad",
		},
		{
			name: "Rice Pilaf",
		},
		{
			name: "Vegetable of the day",
		},
		{
			name: "Baked Potato",
		},
		{
			name: "Add a side Greek or Ceasar Salad",
			price: 1.5,
		},
		{
			name: "Salad Dressings",
			desc: "Italian, Creamy Italian, Balsamic Vinaigrette, Ranch, Greek, Peppercorn, Russian, Honey Mustard, Raspberry Vinaigrette",
		}
	],
};
