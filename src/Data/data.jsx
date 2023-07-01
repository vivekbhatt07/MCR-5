import { v4 as uuidv4 } from "uuid";

export const recipeList = [
  {
    id: uuidv4(),
    recipeName: "Chicken Alfredo",
    cuisine: "Italian",
    image:
      "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21-1100x1650.jpg",
    ingredients: [
      "chicken breast",
      "fettuccine pasta",
      "heavy cream",
      "parmesan cheese",
      "butter",
      "garlic cloves",
      "salt",
      "black pepper",
    ],
    instructions: [
      "Cook the fettuccine pasta according to the package instructions. Drain and set aside.",
      "In a large pan, melt the butter over medium heat.",
      "Add minced garlic and cook until fragrant, about 1 minute.",
      "Add the chicken breast and cook until it is no longer pink in the center.",
      "Remove the chicken from the pan and slice it into strips.",
      "In the same pan, pour in the heavy cream and bring it to a simmer.",
      "Whisk in the grated parmesan cheese until it melts and the sauce is smooth.",
      "Add the cooked fettuccine pasta and sliced chicken to the pan. Toss well to coat everything with the sauce.",
      "Season with salt and black pepper to taste.",
      "Serve hot, garnished with additional grated parmesan cheese and black pepper.",
      "Enjoy your creamy and delicious Chicken Alfredo!",
    ],
  },
  {
    id: uuidv4(),
    recipeName: "Taco Salad",
    cuisine: "Mexican",
    image:
      "https://iwashyoudry.com/wp-content/uploads/2020/06/Simple-Taco-Salad-Recipe-4.jpg",
    ingredients: [
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomatoes",
      "red onion",
      "cheddar cheese",
      "tortilla chips",
      "sour cream",
      "salsa",
      "guacamole",
    ],
    instructions: [
      "In a large pan, cook the ground beef over medium heat until browned.",
      "Add the taco seasoning and cook according to the packet instructions.",
      "In a large serving bowl, layer the shredded lettuce, diced tomatoes, diced red onion, and shredded cheddar cheese.",
      "Top the salad with the cooked ground beef.",
      "Crush the tortilla chips and sprinkle them over the top of the salad.",
      "Drizzle the sour cream, salsa, and guacamole over the salad as desired.",
      "Toss the salad well before serving to mix all the ingredients together.",
      "Serve immediately and enjoy your flavorful Taco Salad!",
    ],
  },
  {
    id: uuidv4(),
    recipeName: "Teriyaki Salmon",
    cuisine: "Japanese",
    image:
      "https://iwashyoudry.com/wp-content/uploads/2021/06/Teriyaki-Chicken-13-of-13-667x1000.jpg",
    ingredients: [
      "salmon fillets",
      "soy sauce",
      "mirin",
      "brown sugar",
      "sesame oil",
      "garlic cloves",
      "ginger",
      "green onions",
      "sesame seeds",
      "salt",
      "black pepper",
    ],
    instructions: [
      "In a small bowl, whisk together the soy sauce, mirin, brown sugar, sesame oil, minced garlic, and minced ginger to make the teriyaki sauce.",
      "Place the salmon fillets in a shallow dish and pour the teriyaki sauce over them. Marinate for 15-30 minutes.",
      "Preheat the oven to 400°F (200°C).",
      "Heat an oven-safe skillet over medium-high heat.",
      "Remove the salmon fillets from the marinade, reserving the marinade.",
      "Place the salmon fillets in the skillet, skin side down, and sear for 2-3 minutes until browned.",
      "Flip the salmon fillets and pour the reserved marinade into the skillet.",
      "Transfer the skillet to the preheated oven and bake for 10-12 minutes or until the salmon is cooked to your desired doneness.",
      "While the salmon is baking, heat the remaining marinade in a small saucepan over medium heat. Simmer for 5 minutes until slightly thickened.",
      "Remove the salmon from the oven and brush it with the thickened teriyaki sauce.",
      "Garnish with chopped green onions and toasted sesame seeds.",
      "Season with salt and black pepper to taste.",
      "Serve hot with steamed rice or vegetables.",
      "Enjoy your delicious Teriyaki Salmon!",
    ],
  },
  {
    id: uuidv4(),
    recipeName: "Caprese Salad",
    cuisine: "Italian",
    image:
      "https://iwashyoudry.com/wp-content/uploads/2016/05/Avocado-Caprese-Pasta-Salad-5-copy-675x916.jpg",
    ingredients: [
      "tomatoes",
      "mozzarella cheese",
      "fresh basil leaves",
      "balsamic vinegar",
      "extra-virgin olive oil",
      "salt",
      "black pepper",
    ],
    instructions: [
      "Alternate slices of tomatoes and mozzarella cheese on a serving platter.",
      "Tuck fresh basil leaves in between the tomato and mozzarella slices.",
      "Drizzle balsamic vinegar and extra-virgin olive oil over the salad.",
      "Season with salt and black pepper to taste.",
      "Let the salad sit for a few minutes to allow the flavors to meld together.",
      "Serve at room temperature and enjoy your refreshing Caprese Salad!",
    ],
  },
  {
    id: uuidv4(),
    recipeName: "Chicken Curry",
    cuisine: "Indian",
    image:
      "https://iwashyoudry.com/wp-content/uploads/2014/12/Curry-Roasted-Chicken.jpg",
    ingredients: [
      "chicken pieces",

      "onion",

      "garlic cloves",

      "ginger",

      "tomatoes",

      "curry powder",

      "turmeric",

      "cumin",

      "coriander",

      "coconut milk",
    ],
    instructions: [
      "In a large pan, heat vegetable oil over medium heat.",
      "Add chopped onion, minced garlic, and minced ginger. Sauté until the onions are translucent.",
      "Add the chicken pieces to the pan and cook until they are browned on all sides.",
      "Add the chopped tomatoes, curry powder, turmeric, cumin, and coriander to the pan. Stir well to coat the chicken with the spices.",
      "Pour in the coconut milk and bring the mixture to a simmer.",
      "Cover the pan and let the chicken simmer for 20-25 minutes or until it is cooked through and tender.",
      "Season with salt and black pepper to taste.",
      "Garnish with chopped fresh cilantro.",
      "Serve hot with steamed rice or naan bread.",
      "Enjoy your aromatic and flavorful Chicken Curry!",
    ],
  },
  {
    id: uuidv4(),
    recipeName: "Mediterranean Pasta",
    cuisine: "Mediterranean",
    image:
      "https://iwashyoudry.com/wp-content/uploads/2016/02/Pasta-Salad-Web-7-1100x1650.jpg",
    ingredients: [
      "penne pasta",
      "cherry tomatoes",
      "kalamata olives",
      "cucumber",
      "red onion",
    ],
    instructions: [
      "Cook the penne pasta according to the package instructions. Drain and set aside.",
      "In a large mixing bowl, combine the cooked pasta, halved cherry tomatoes, halved kalamata olives, diced cucumber, thinly sliced red onion, crumbled feta cheese, and chopped fresh parsley.",
      "In a small bowl, whisk together the lemon juice, extra-virgin olive oil, minced garlic, dried oregano, salt, and black pepper to make the dressing.",
      "Pour the dressing over the pasta mixture and toss well to combine.",
      "Let the flavors meld together for at least 15 minutes.",
      "Serve at room temperature or chilled.",
      "Enjoy your refreshing and vibrant Mediterranean Pasta!",
    ],
  },
];
