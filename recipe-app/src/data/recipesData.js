export const recipesData = [
  // BREAKFAST
  {
    id: 1, title: "Classic Pancakes", category: "breakfast", cuisine: "American", difficulty: "easy", prepTime: "10 mins", cookTime: 15, servings: 2,
    image: "/assets/images/classic-pancakes.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["1 cup flour", "1 cup milk", "1 egg", "Butter"], instructions: ["Mix ingredients in a bowl", "Pour batter onto a hot skillet", "Flip when bubbly, serve hot"]
  },
  {
    id: 2, title: "French Omelette", category: "breakfast", cuisine: "French", difficulty: "medium", prepTime: "5 mins", cookTime: 10, servings: 1,
    image: "/assets/images/french-omelette.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["3 eggs", "Butter", "Chives", "Salt"], instructions: ["Whisk eggs until smooth", "Cook in butter on medium-low heat", "Roll gently and garnish"]
  },
  {
    id: 3, title: "Avocado Toast", category: "breakfast", cuisine: "American", difficulty: "easy", prepTime: "5 mins", cookTime: 5, servings: 1,
    image: "/assets/images/avocado-toast.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["2 slices sourdough", "1 avocado", "Chili flakes", "Lemon"], instructions: ["Toast the bread", "Mash avocado and spread", "Top with seasoning"]
  },
  {
    id: 4, title: "Shakshuka", category: "breakfast", cuisine: "Middle Eastern", difficulty: "medium", prepTime: "15 mins", cookTime: 25, servings: 3,
    image: "/assets/images/shakshuka.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["4 eggs", "Canned tomatoes", "Onions", "Cumin"], instructions: ["Sauté onions and tomatoes", "Make wells and crack eggs into them", "Cover and simmer until eggs set"]
  },
  {
    id: 5, title: "Acai Bowl", category: "breakfast", cuisine: "Brazilian", difficulty: "easy", prepTime: "10 mins", cookTime: 0, servings: 1,
    image: "/assets/images/acai-bowl.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Acai puree", "Banana", "Granola", "Berries"], instructions: ["Blend acai and banana", "Pour into a bowl", "Top with granola and fresh fruit"]
  },

  // LUNCH
  {
    id: 6, title: "Chicken Caesar Wrap", category: "lunch", cuisine: "American", difficulty: "easy", prepTime: "10 mins", cookTime: 15, servings: 2,
    image: "/assets/images/chicken-caesar-wrap.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Grilled chicken", "Romaine lettuce", "Caesar dressing", "Tortilla"], instructions: ["Chop chicken and lettuce", "Toss with dressing", "Wrap tightly in tortilla"]
  },
  {
    id: 7, title: "Caprese Sandwich", category: "lunch", cuisine: "Italian", difficulty: "easy", prepTime: "10 mins", cookTime: 5, servings: 1,
    image: "/assets/images/caprese-sandwich.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Ciabatta", "Mozzarella", "Tomato", "Basil pesto"], instructions: ["Slice bread and cheese", "Layer ingredients", "Press in a panini grill"]
  },
  {
    id: 8, title: "Spicy Tuna Bowl", category: "lunch", cuisine: "Asian", difficulty: "medium", prepTime: "15 mins", cookTime: 20, servings: 2,
    image: "/assets/images/spicy-tuna-bowl.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Sushi-grade tuna", "Rice", "Spicy mayo", "Cucumber"], instructions: ["Cook rice", "Cube tuna and mix with mayo", "Assemble bowl with veggies"]
  },
  {
    id: 9, title: "Mushroom Quesadilla", category: "lunch", cuisine: "Mexican", difficulty: "easy", prepTime: "10 mins", cookTime: 15, servings: 2,
    image: "/assets/images/mushroom-quesadilla.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Tortillas", "Mixed mushrooms", "Monterey Jack cheese"], instructions: ["Sauté mushrooms", "Place cheese and mushrooms in tortilla", "Toast in pan until golden"]
  },
  {
    id: 10, title: "Greek Quinoa Salad", category: "lunch", cuisine: "Mediterranean", difficulty: "easy", prepTime: "15 mins", cookTime: 20, servings: 3,
    image: "/assets/images/greek-quinoa-salad.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Quinoa", "Feta cheese", "Olives", "Cucumber"], instructions: ["Boil quinoa and let cool", "Chop vegetables", "Toss together with olive oil"]
  },

  // DINNER
  {
    id: 11, title: "Spaghetti Bolognese", category: "dinner", cuisine: "Italian", difficulty: "medium", prepTime: "15 mins", cookTime: 45, servings: 4,
    image: "/assets/images/spaghetti-bolognese.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Garlic"], instructions: ["Brown the beef", "Simmer with tomato sauce for 30 mins", "Serve over cooked pasta"]
  },
  {
    id: 12, title: "Beef Tacos", category: "dinner", cuisine: "Mexican", difficulty: "easy", prepTime: "10 mins", cookTime: 20, servings: 4,
    image: "/assets/images/beef-tacos.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Taco shells", "Ground beef", "Taco seasoning", "Lettuce"], instructions: ["Cook beef with seasoning", "Warm taco shells", "Assemble with toppings"]
  },
  {
    id: 13, title: "Chicken Tikka Masala", category: "dinner", cuisine: "Indian", difficulty: "hard", prepTime: "20 mins", cookTime: 50, servings: 4,
    image: "/assets/images/chicken-tikka-masala.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Chicken breast", "Yogurt", "Garam masala", "Tomato puree"], instructions: ["Marinate chicken in yogurt and spices", "Grill chicken pieces", "Simmer in spiced tomato sauce"]
  },
  {
    id: 14, title: "Pan-Seared Salmon", category: "dinner", cuisine: "American", difficulty: "medium", prepTime: "10 mins", cookTime: 20, servings: 2,
    image: "/assets/images/pan-seared-salmon.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Salmon fillets", "Olive oil", "Lemon", "Asparagus"], instructions: ["Season salmon", "Sear skin-side down for 4 mins", "Flip and finish with lemon juice"]
  },
  {
    id: 15, title: "Vegetable Stir Fry", category: "dinner", cuisine: "Asian", difficulty: "easy", prepTime: "15 mins", cookTime: 15, servings: 3,
    image: "/assets/images/vegetable-stir-fry.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Broccoli", "Bell peppers", "Soy sauce", "Noodles"], instructions: ["Boil noodles", "Stir fry vegetables on high heat", "Toss together with soy sauce"]
  },

  // DESSERT
  {
    id: 16, title: "Fudge Brownies", category: "dessert", cuisine: "American", difficulty: "medium", prepTime: "15 mins", cookTime: 35, servings: 8,
    image: "/assets/images/fudge-brownies.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Chocolate", "Butter", "Sugar", "Flour"], instructions: ["Melt chocolate and butter", "Mix in sugar and flour", "Bake at 350F for 25 mins"]
  },
  {
    id: 17, title: "Classic Tiramisu", category: "dessert", cuisine: "Italian", difficulty: "hard", prepTime: "30 mins", cookTime: 0, servings: 6,
    image: "/assets/images/classic-tiramisu.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Ladyfingers", "Espresso", "Mascarpone", "Cocoa powder"], instructions: ["Dip ladyfingers in espresso", "Layer with mascarpone cream", "Chill overnight and dust with cocoa"]
  },
  {
    id: 18, title: "Churros", category: "dessert", cuisine: "Mexican", difficulty: "medium", prepTime: "15 mins", cookTime: 30, servings: 4,
    image: "/assets/images/churros.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Water", "Flour", "Cinnamon sugar", "Oil"], instructions: ["Make dough on stovetop", "Pipe into hot oil and fry", "Roll in cinnamon sugar"]
  },
  {
    id: 19, title: "Matcha Mochi", category: "dessert", cuisine: "Asian", difficulty: "hard", prepTime: "20 mins", cookTime: 40, servings: 4,
    image: "/assets/images/matcha-mochi.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Glutinous rice flour", "Matcha powder", "Red bean paste"], instructions: ["Steam rice dough until sticky", "Dust with matcha", "Wrap dough around red bean paste"]
  },
  {
    id: 20, title: "Cheesecake", category: "dessert", cuisine: "American", difficulty: "medium", prepTime: "25 mins", cookTime: 60, servings: 8,
    image: "/assets/images/cheesecake.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Cream cheese", "Graham crackers", "Sugar", "Eggs"], instructions: ["Press crust into pan", "Blend filling until smooth", "Bake in water bath and chill"]
  },

  // SNACKS
  {
    id: 21, title: "Loaded Nachos", category: "snacks", cuisine: "Mexican", difficulty: "easy", prepTime: "5 mins", cookTime: 10, servings: 4,
    image: "/assets/images/loaded-nachos.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Tortilla chips", "Cheddar cheese", "Jalapenos"], instructions: ["Layer chips and cheese on a tray", "Bake until melted", "Top with jalapenos and salsa"]
  },
  {
    id: 22, title: "Garlic Bruschetta", category: "snacks", cuisine: "Italian", difficulty: "easy", prepTime: "10 mins", cookTime: 15, servings: 4,
    image: "/assets/images/garlic-bruschetta.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Baguette", "Tomatoes", "Garlic", "Olive oil"], instructions: ["Toast bread slices", "Rub with raw garlic", "Top with diced tomatoes and oil"]
  },
  {
    id: 23, title: "Spicy Edamame", category: "snacks", cuisine: "Asian", difficulty: "easy", prepTime: "5 mins", cookTime: 10, servings: 2,
    image: "/assets/images/spicy-edamame.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Frozen edamame", "Chili oil", "Sea salt"], instructions: ["Boil edamame until tender", "Drain water", "Toss in chili oil and sea salt"]
  },
  {
    id: 24, title: "Classic Hummus", category: "snacks", cuisine: "Middle Eastern", difficulty: "medium", prepTime: "15 mins", cookTime: 0, servings: 4,
    image: "/assets/images/classic-hummus.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Chickpeas", "Tahini", "Garlic", "Lemon"], instructions: ["Drain chickpeas", "Blend all ingredients until smooth", "Serve with pita bread"]
  },
  {
    id: 25, title: "Trail Mix", category: "snacks", cuisine: "American", difficulty: "easy", prepTime: "5 mins", cookTime: 0, servings: 6,
    image: "/assets/images/trail-mix.jpg", videoUrl: "/assets/videos/cooking-tutorial.mp4",
    ingredients: ["Almonds", "Dark chocolate", "Dried cranberries"], instructions: ["Gather ingredients", "Toss together in a large bowl", "Store in an airtight container"]
  }
];