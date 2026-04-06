// Burn the Belly — Recipe Database

var recipeDB = {

    breakfast: [
      {id:'b01',name:'Savory Egg & Spinach Scramble',cal:420,protein:35,fat:14,fiber:8,time:15,note:'Quick',cholesterol:'medium',tags:['quick','eggs'],
       ing:[['3','egg','eggs'],['2','cup','spinach, fresh'],['0.5','cup','black beans, cooked'],['0.25','cup','avocado, sliced'],['1','t','turmeric'],['0.5','t','black pepper']],
       method:['Heat oil in pan. Add spinach, wilt 90 sec.','Add black beans, warm 1 min.','Whisk eggs with turmeric and pepper. Scramble gently until just set.','Sprinkle with oat bran and avocado.']},

      {id:'b02',name:'Tempeh & Pepper Hash',cal:410,protein:32,fat:16,fiber:9,time:20,note:'Vegan',cholesterol:'zero',tags:['quick','vegan','tempeh'],
       ing:[['4','oz','tempeh, cubed'],['1','cup','bell peppers, diced'],['0.5','cup','onion, diced'],['1','cup','zucchini, diced'],['1','T','olive oil'],['1','t','smoked paprika'],['2','T','nutritional yeast']],
       method:['Heat oil in cast iron over medium-high.','Cook tempeh 4-5 min until golden.','Add peppers, onion, zucchini. Cook 6-7 min.','Season with paprika. Finish with nutritional yeast.']},

      {id:'b03',name:'Egg White & Veggie Frittata',cal:320,protein:38,fat:8,fiber:5,time:25,note:'Batch cook',cholesterol:'low',tags:['low-cholesterol','eggs','batch-cook'],
       ing:[['6','egg','egg whites'],['1','cup','broccoli florets, small'],['0.5','cup','cherry tomatoes, halved'],['0.25','cup','feta cheese, crumbled'],['0.5','cup','onion, diced'],['1','t','Italian seasoning']],
       method:['Preheat oven to 375°F.','Sauté onion and broccoli in oven-safe skillet 4 min.','Whisk egg whites with seasoning, pour over veg.','Add tomatoes and feta. Cook 3 min then bake 12-14 min until set.']},

      {id:'b04',name:'Turkey & Veggie Breakfast Bowl',cal:440,protein:42,fat:12,fiber:7,time:20,note:'High protein',cholesterol:'medium',tags:['quick','turkey','high-protein'],
       ing:[['4','oz','ground turkey, lean'],['2','egg','eggs'],['1','cup','spinach, chopped'],['0.5','cup','mushrooms, sliced'],['0.25','cup','salsa'],['1','t','chili powder']],
       method:['Brown turkey with chili powder, 5-6 min.','Push aside, scramble eggs in same pan.','Add spinach and mushrooms, cook until wilted.','Combine everything, top with salsa.']},

      {id:'b05',name:'Savory Oat Bran Bowl with Egg',cal:380,protein:28,fat:12,fiber:10,time:12,note:'Quick',cholesterol:'medium',tags:['quick','high-fiber','eggs'],
       ing:[['0.33','cup','oat bran, dry'],['2','egg','eggs, poached'],['1','cup','spinach, wilted'],['1','T','nutritional yeast'],['0.25','t','red pepper flakes']],
       method:['Cook oat bran per package. Season with nutritional yeast and pepper flakes.','Poach eggs 3-4 min.','Wilt spinach in pan with splash of water.','Layer oat bran, spinach, top with poached eggs and oat bran.']},

      {id:'b06',name:'Cottage Cheese & Veggie Scramble',cal:360,protein:40,fat:10,fiber:5,time:12,note:'Quick',cholesterol:'low',tags:['quick','high-protein','low-cholesterol'],
       ing:[['0.75','cup','cottage cheese, 1% fat'],['3','egg','egg whites'],['1','cup','cherry tomatoes, halved'],['0.5','cup','cucumber, diced'],['2','T','fresh chives or dill'],['1','slice','Ezekiel sprouted bread, toasted']],
       method:['Scramble egg whites with salt and pepper until just set.','Mix cottage cheese with herbs.','Serve egg whites alongside cottage cheese, tomatoes, cucumber.','Toast Ezekiel bread. Top with thin spread of avocado if desired.']},

      {id:'b07',name:'Black Bean & Egg Breakfast Skillet',cal:430,protein:33,fat:15,fiber:11,time:18,note:'High fiber',cholesterol:'medium',tags:['high-fiber','eggs','savory'],
       ing:[['0.5','cup','black beans, cooked'],['2','egg','eggs'],['2','egg','egg whites'],['0.5','cup','salsa verde'],['1','cup','spinach, chopped'],['0.25','cup','avocado, diced'],['1','t','cumin']],
       method:['Warm beans in skillet with cumin and salsa verde.','Add spinach and wilt 1-2 min.','Make wells, crack in whole eggs, add egg whites around.','Cover and cook 4-5 min until whites set. Top with avocado.']},

      {id:'b08',name:'Chicken & Vegetable Breakfast Stir-Fry',cal:420,protein:44,fat:11,fiber:7,time:20,note:'High protein',cholesterol:'medium',tags:['chicken','high-protein','savory'],
       ing:[['4','oz','chicken breast, diced small'],['1','cup','bok choy, chopped'],['0.5','cup','snap peas'],['0.5','cup','mushrooms, sliced'],['1','T','low-sodium tamari'],['1','t','ginger, grated'],['1','egg','egg']],
       method:['Cook chicken in hot pan until golden, 5-6 min.','Add vegetables and ginger, stir-fry 4 min.','Push to side, scramble egg in pan.','Combine, drizzle with tamari.']},

      {id:'b09',name:'Mediterranean Egg Bake',cal:400,protein:36,fat:18,fiber:6,time:30,note:'Weekend',cholesterol:'medium',tags:['batch-cook','eggs','weekend'],
       ing:[['3','egg','eggs'],['0.5','cup','chickpeas, cooked'],['1','cup','cherry tomatoes'],['0.5','cup','spinach'],['0.25','cup','olives, kalamata, halved'],['2','T','feta cheese'],['1','t','oregano, dried']],
       method:['Preheat oven to 400°F.','Combine chickpeas, tomatoes, spinach, olives in baking dish.','Make wells, crack eggs in. Season with oregano and pepper.','Scatter feta over top. Bake 15-18 min until whites set.']},

      {id:'b10',name:'Weekend Veggie Frittata',cal:490,protein:38,fat:22,fiber:8,time:35,note:'Makes leftovers',cholesterol:'medium',tags:['batch-cook','eggs','weekend'],
       ing:[['4','egg','eggs'],['3','egg','egg whites'],['1','cup','broccoli florets'],['0.5','cup','roasted red peppers'],['0.5','cup','onion, diced'],['2','T','feta cheese'],['1','T','olive oil'],['1','t','Italian seasoning']],
       method:['Preheat oven to 375°F.','Sauté onion and broccoli in oven-safe skillet 5 min.','Whisk eggs and whites with seasoning, pour over veg.','Add peppers and feta. Cook 3 min then bake 18-20 min until puffed and set.']},

      {id:'b11',name:'Tempeh Breakfast Hash',cal:400,protein:30,fat:14,fiber:8,time:22,note:'Vegan',cholesterol:'zero',tags:['vegan','tempeh','batch-cook'],
       ing:[['4','oz','tempeh, cubed'],['1','cup','sweet potato, small cubed'],['0.5','cup','spinach'],['0.5','cup','onion, diced'],['1','T','olive oil'],['1','t','smoked paprika'],['1','T','nutritional yeast']],
       method:['Boil sweet potato 8 min until just tender. Drain.','Brown tempeh in oil 4 min. Add sweet potato, cook until crispy.','Add onion and spinach, cook until softened.','Season with paprika and nutritional yeast.']},

      {id:'b12',name:'Egg & Lentil Power Bowl',cal:410,protein:34,fat:11,fiber:13,time:15,note:'High fiber',cholesterol:'medium',tags:['high-fiber','eggs','quick'],
       ing:[['0.5','cup','lentils, cooked'],['2','egg','eggs, poached or soft boiled'],['1','cup','arugula'],['0.25','cup','roasted tomatoes'],['1','T','olive oil'],['1','t','za\'atar'],['1','T','lemon juice']],
       method:['Warm lentils with a splash of water and za\'atar.','Poach or soft boil eggs.','Plate lentils on arugula, add tomatoes.','Top with eggs, drizzle olive oil and lemon.']},

      {id:'b13',name:'Turkey Sausage & Kale Scramble',cal:430,protein:44,fat:14,fiber:6,time:18,note:'High protein',cholesterol:'medium',tags:['turkey','high-protein','quick'],
       ing:[['4','oz','turkey sausage, lean, casings removed'],['2','egg','eggs'],['2','egg','egg whites'],['1.5','cup','spinach, chopped'],['0.5','cup','onion, diced'],['1','t','fennel seeds'],['2','clove','garlic, minced']],
       method:['Brown turkey sausage with fennel seeds, breaking apart, 5-6 min.','Add onion and garlic, cook 2 min.','Add spinach, wilt 1-2 min.','Push aside, scramble eggs and whites. Combine everything.']},

      {id:'b14',name:'Cod & Egg White Breakfast Skillet',cal:370,protein:45,fat:8,fiber:4,time:18,note:'Very high protein',cholesterol:'low',tags:['cod','high-protein','low-cholesterol'],
       ing:[['3','oz','cod fillet, flaked'],['4','egg','egg whites'],['1','cup','cherry tomatoes, halved'],['1','cup','spinach'],['1','clove','garlic, minced'],['1','t','capers'],['0.5','t','smoked paprika']],
       method:['Cook cod in pan with garlic 4-5 min, flake into pieces.','Add tomatoes, spinach, capers, paprika. Cook 2 min.','Pour in egg whites, scramble gently until just set.','Season and serve immediately.']},
    ],

    lunch: [
      {id:'l01',name:'Lentil & Roasted Veg Bowl',cal:380,protein:22,fat:13,fiber:14,time:10,note:'Batch cook',cholesterol:'zero',tags:['vegan','batch-cook','high-fiber'],
       ing:[['0.75','cup','lentils, cooked'],['1','cup','roasted broccoli'],['0.5','cup','roasted sweet potato, cubed'],['2','T','tahini'],['1','T','lemon juice'],['2','T','pumpkin seeds'],['1','t','cumin']],
       method:['Warm lentils and roasted veg.','Whisk tahini, lemon juice, cumin with 2T water.','Bowl up lentils and veg, drizzle dressing, top with pumpkin seeds.']},

      {id:'l02',name:'Turkey Lettuce Wrap Platter',cal:360,protein:38,fat:14,fiber:6,time:12,note:'Quick',cholesterol:'medium',tags:['turkey','quick','low-carb'],
       ing:[['5','oz','ground turkey, cooked and seasoned'],['4','leaf','butter lettuce leaves'],['0.5','cup','cucumber, diced'],['0.5','cup','shredded carrots'],['0.25','cup','edamame, shelled'],['2','T','low-sodium tamari'],['1','t','sesame oil']],
       method:['Season cooked turkey with tamari, sesame oil, ginger.','Lay out lettuce leaves.','Fill each with turkey, cucumber, carrots, edamame.','Serve with extra tamari for dipping.']},

      {id:'l03',name:'Chickpea & Kale Power Salad',cal:400,protein:24,fat:16,fiber:12,time:10,note:'Vegan',cholesterol:'zero',tags:['vegan','high-fiber','quick'],
       ing:[['0.75','cup','chickpeas, cooked'],['2','cup','arugula'],['0.5','cup','roasted beets, diced'],['0.25','cup','walnuts, roughly chopped'],['1','T','olive oil'],['1','T','apple cider vinegar']],
       method:['Massage arugula gently with a pinch of salt.','Whisk olive oil, vinegar, mustard for dressing.','Combine kale, chickpeas, beets, walnuts.','Drizzle dressing, sprinkle with oat bran.']},

      {id:'l04',name:'Cod Taco Bowl',cal:390,protein:36,fat:12,fiber:8,time:18,note:'Quick',cholesterol:'medium',tags:['cod','quick','high-protein'],
       ing:[['4','oz','cod fillet'],['0.5','cup','black beans, cooked'],['1','cup','shredded cabbage'],['0.25','cup','salsa'],['0.25','cup','Greek yogurt 0%'],['1','t','chili powder'],['2','T','cilantro, chopped']],
       method:['Season cod with chili powder. Cook 3-4 min per side.','Flake fish into bowl.','Layer beans, cabbage, fish.','Top with salsa, yogurt, cilantro.']},

      {id:'l05',name:'Big Batch Quinoa Power Salad',cal:420,protein:24,fat:15,fiber:9,time:10,note:'Excellent batch meal',cholesterol:'zero',tags:['vegan','batch-cook'],
       ing:[['0.75','cup','quinoa, cooked'],['0.5','cup','edamame, shelled'],['0.5','cup','cucumber, diced'],['0.25','cup','sun-dried tomatoes'],['2','T','pumpkin seeds'],['1','T','olive oil'],['1','T','lemon juice']],
       method:['Combine quinoa, edamame, cucumber, sun-dried tomatoes.','Dress with olive oil and lemon juice.','Top with pumpkin seeds and oat bran.','Keeps refrigerated 3 days.']},

      {id:'l06',name:'Lentil & Roasted Tomato Soup',cal:360,protein:24,fat:8,fiber:16,time:45,note:'Excellent batch meal',cholesterol:'zero',tags:['vegan','batch-cook','high-fiber'],
       ing:[['0.75','cup','red lentils, dry'],['2','cup','cherry tomatoes'],['1','cup','carrots, diced'],['0.5','cup','onion, diced'],['3','cup','vegetable broth, low-sodium'],['1','t','cumin'],['1','t','turmeric'],['2','clove','garlic, minced']],
       method:['Roast tomatoes at 400°F for 20 min.','Sauté onion, carrot, garlic 5 min.','Add lentils, broth, spices, roasted tomatoes.','Simmer 20 min until lentils soft. Partially blend for texture.']},

      {id:'l07',name:'Tuna & White Bean Salad',cal:370,protein:40,fat:10,fiber:9,time:8,note:'No cook',cholesterol:'medium',tags:['quick','high-protein','no-cook'],
       ing:[['5','oz','canned tuna in water, drained'],['0.5','cup','white beans, cooked'],['0.5','cup','celery, diced'],['0.25','cup','red onion, diced'],['1','T','olive oil'],['1','T','lemon juice'],['2','cup','arugula'],['1','t','Dijon mustard']],
       method:['Whisk olive oil, lemon juice, mustard.','Combine tuna, beans, celery, red onion.','Dress and toss with arugula.','Season with black pepper.']},

      {id:'l08',name:'Black Bean Shakshuka',cal:400,protein:28,fat:14,fiber:13,time:22,note:'High fiber',cholesterol:'medium',tags:['high-fiber','eggs'],
       ing:[['0.75','cup','black beans, cooked'],['1','cup','crushed tomatoes'],['2','egg','eggs'],['0.5','cup','bell pepper, diced'],['0.5','cup','onion, diced'],['1','t','cumin'],['1','t','smoked paprika'],['2','T','feta cheese']],
       method:['Sauté onion and pepper 5 min.','Add tomatoes, beans, cumin, paprika. Simmer 8 min.','Make wells, crack in eggs. Cover, cook 5-6 min.','Crumble feta over top.']},

      {id:'l09',name:'Turkey & Lentil Stuffed Peppers',cal:430,protein:38,fat:12,fiber:10,time:40,note:'Batch cook',cholesterol:'medium',tags:['turkey','batch-cook','weekend'],
       ing:[['2','unit','bell peppers, halved'],['3','oz','ground turkey, cooked'],['0.33','cup','lentils, cooked'],['0.25','cup','diced tomatoes'],['1','t','Italian seasoning'],['2','T','nutritional yeast'],['0.25','cup','onion, diced']],
       method:['Preheat oven to 375°F.','Mix turkey, lentils, tomatoes, onion, seasoning.','Fill pepper halves, top with nutritional yeast.','Bake 25-28 min until peppers tender.']},

      {id:'l10',name:'Edamame & Tempeh Stir-Fry Bowl',cal:440,protein:34,fat:16,fiber:11,time:18,note:'Vegan',cholesterol:'zero',tags:['vegan','tempeh','high-protein'],
       ing:[['3','oz','tempeh, sliced'],['0.5','cup','edamame, shelled'],['1','cup','broccoli florets'],['0.5','cup','snap peas'],['1','T','low-sodium tamari'],['1','T','sesame oil'],['1','T','sesame seeds']],
       method:['Pan-fry tempeh in sesame oil 4-5 min per side.','Add broccoli and snap peas, stir-fry 4 min.','Add edamame and tamari. Toss well.','Serve topped with sesame seeds.']},

      {id:'l11',name:'Chicken & Roasted Tomato Soup',cal:360,protein:38,fat:10,fiber:7,time:35,note:'Batch cook',cholesterol:'medium',tags:['chicken','batch-cook'],
       ing:[['5','oz','chicken breast, shredded'],['2','cup','cherry tomatoes, roasted'],['0.5','cup','white beans, cooked'],['2','cup','chicken broth, low-sodium'],['1','cup','spinach, chopped'],['2','clove','garlic, minced'],['1','t','Italian seasoning']],
       method:['Roast tomatoes at 400°F for 20 min.','Simmer broth with garlic and Italian seasoning.','Add tomatoes, beans, chicken. Simmer 10 min.','Stir in spinach just before serving.']},

      {id:'l12',name:'Salmon & Arugula Salad',cal:410,protein:36,fat:20,fiber:5,time:15,note:'Quick',cholesterol:'medium',tags:['quick','high-protein'],
       ing:[['4','oz','salmon fillet, cooked and flaked'],['2','cup','arugula'],['0.5','cup','cucumber, sliced'],['0.25','cup','red onion, thin'],['2','T','capers'],['1','T','olive oil'],['1','T','lemon juice']],
       method:['Cook or use leftover salmon, flake into pieces.','Combine arugula, cucumber, red onion, capers.','Dress with olive oil and lemon juice.','Top with salmon.']},

      {id:'l13',name:'White Bean & Herb Soup',cal:350,protein:20,fat:8,fiber:12,time:30,note:'Batch cook',cholesterol:'zero',tags:['vegan','batch-cook','high-fiber'],
       ing:[['1','cup','white beans, cooked'],['1','cup','carrots, diced'],['1','cup','celery, diced'],['3','cup','vegetable broth'],['2','clove','garlic, minced'],['1','t','rosemary, dried'],['1','cup','spinach, chopped']],
       method:['Sauté carrots, celery, garlic 5 min.','Add beans, broth, rosemary. Simmer 18 min.','Stir in spinach, cook 3 more min.','Season and serve.']},

      {id:'l14',name:'Cod & Chickpea Bowl',cal:400,protein:40,fat:10,fiber:10,time:20,note:'High protein',cholesterol:'medium',tags:['cod','high-protein','high-fiber'],
       ing:[['4','oz','cod fillet'],['0.75','cup','chickpeas, cooked'],['1','cup','roasted zucchini'],['2','T','tahini'],['1','T','lemon juice'],['1','t','cumin'],['2','T','fresh parsley']],
       method:['Bake cod at 400°F for 14 min.','Warm chickpeas and roasted zucchini.','Whisk tahini, lemon, cumin with 2T water for dressing.','Flake cod over bowl, drizzle dressing, top with parsley.']},
    ],

    dinner: [
      {id:'d01',name:'Herb Chicken Thighs + Garlicky Broccoli',cal:480,protein:42,fat:16,fiber:6,time:30,note:'One pan',cholesterol:'medium',tags:['chicken','one-pan','high-protein'],
       ing:[['5','oz','chicken thighs, boneless skinless'],['3','cup','broccoli florets'],['4','clove','garlic, minced'],['1','T','olive oil'],['1','t','oregano, dried'],['1','t','smoked paprika'],['0.5','unit','lemon, juiced']],
       method:['Preheat oven to 425°F.','Season chicken with oregano, paprika, salt, pepper, olive oil.','Toss broccoli with garlic, olive oil, salt. Spread on sheet pan with chicken.','Roast 22-25 min. Squeeze lemon over everything.']},

      {id:'d02',name:'Turkey & Vegetable Sheet Pan',cal:460,protein:44,fat:14,fiber:9,time:35,note:'One pan',cholesterol:'medium',tags:['turkey','one-pan','batch-cook'],
       ing:[['5','oz','turkey breast, sliced'],['1','cup','Brussels sprouts, halved'],['1','cup','cauliflower florets'],['0.5','cup','red onion, wedges'],['1','T','olive oil'],['1','t','garlic powder'],['1','t','thyme, dried']],
       method:['Preheat oven 400°F.','Toss vegetables with olive oil, garlic powder, thyme.','Spread on sheet pan, nestle turkey between veg.','Roast 28-32 min until turkey cooked through.']},

      {id:'d03',name:'Baked Cod with Herb Crust',cal:420,protein:46,fat:12,fiber:5,time:25,note:'Quick',cholesterol:'medium',tags:['cod','quick','high-protein'],
       ing:[['6','oz','cod fillet'],['2','T','oat bran'],['1','T','fresh parsley, chopped'],['1','T','olive oil'],['1','clove','garlic, minced'],['2','cup','asparagus spears'],['0.5','unit','lemon, zested and juiced']],
       method:['Preheat oven to 400°F.','Mix oat bran, parsley, garlic, lemon zest, olive oil.','Press crust onto cod. Place on baking sheet with asparagus.','Bake 14-16 min. Finish with lemon juice.']},

      {id:'d04',name:'Chicken & Chickpea Stew',cal:480,protein:45,fat:12,fiber:11,time:35,note:'Batch cook',cholesterol:'medium',tags:['chicken','batch-cook','high-fiber'],
       ing:[['5','oz','chicken breast, cubed'],['0.75','cup','chickpeas, cooked'],['1','cup','diced tomatoes'],['1','cup','spinach'],['0.5','cup','onion, diced'],['1','t','cumin'],['1','t','smoked paprika'],['1','cup','chicken broth, low-sodium']],
       method:['Brown chicken in pot 4-5 min.','Add onion, cook 3 min.','Add tomatoes, chickpeas, broth, spices. Simmer 18 min.','Stir in spinach until wilted.']},

      {id:'d05',name:'Tempeh Bolognese with Zucchini Noodles',cal:440,protein:36,fat:18,fiber:12,time:28,note:'Vegan',cholesterol:'zero',tags:['vegan','tempeh','low-carb'],
       ing:[['4','oz','tempeh, crumbled'],['2','unit','zucchini, spiralized'],['1','cup','crushed tomatoes'],['0.5','cup','mushrooms, finely diced'],['0.25','cup','onion, minced'],['2','clove','garlic, minced'],['2','T','nutritional yeast'],['1','t','Italian seasoning']],
       method:['Sauté onion, garlic, mushrooms 5 min.','Add crumbled tempeh, cook until browned 5 min.','Add tomatoes and seasoning. Simmer 12 min.','Serve over zucchini noodles. Top with nutritional yeast.']},

      {id:'d06',name:'Turkey Meatballs with White Bean Ragù',cal:500,protein:46,fat:14,fiber:10,time:35,note:'Batch cook',cholesterol:'medium',tags:['turkey','batch-cook','high-protein'],
       ing:[['5','oz','ground turkey'],['0.75','cup','white beans, cooked'],['1','cup','crushed tomatoes'],['1','cup','spinach, chopped'],['1','egg','egg white'],['2','T','oat bran'],['1','t','Italian seasoning'],['2','clove','garlic, minced']],
       method:['Mix turkey, egg white, oat bran, half the seasoning. Form into 8 meatballs.','Brown meatballs 6-7 min.','Add tomatoes, beans, garlic, remaining seasoning. Simmer 12 min.','Stir in spinach until wilted.']},

      {id:'d07',name:'Baked Chicken with Roasted Root Veg',cal:490,protein:48,fat:14,fiber:8,time:45,note:'Weekend',cholesterol:'medium',tags:['chicken','batch-cook','weekend'],
       ing:[['6','oz','chicken breast'],['1','cup','parsnips, cubed'],['1','cup','carrots, cubed'],['0.5','cup','turnip, cubed'],['1','T','olive oil'],['1','t','rosemary, dried'],['1','t','thyme, dried'],['3','clove','garlic, smashed']],
       method:['Preheat oven 400°F.','Toss root veg with garlic, oil, rosemary, thyme.','Place in roasting pan. Nestle chicken on top.','Roast 35-38 min until chicken reaches 165°F.']},

      {id:'d08',name:'Cod & Lentil Curry',cal:440,protein:44,fat:10,fiber:12,time:28,note:'High fiber',cholesterol:'medium',tags:['cod','high-fiber','high-protein'],
       ing:[['5','oz','cod fillet, cubed'],['0.5','cup','red lentils, cooked'],['1','cup','spinach'],['0.5','cup','crushed tomatoes'],['0.25','cup','coconut milk, light'],['1','t','curry powder'],['1','t','turmeric'],['1','clove','garlic, minced']],
       method:['Sauté garlic with curry powder and turmeric 1 min.','Add tomatoes, lentils, coconut milk. Simmer 8 min.','Add cod pieces. Cook 6-7 min until fish flakes.','Stir in spinach until wilted.']},

      {id:'d09',name:'Chicken Thigh Cacciatore',cal:470,protein:44,fat:16,fiber:8,time:40,note:'Batch cook',cholesterol:'medium',tags:['chicken','batch-cook','weekend'],
       ing:[['5','oz','chicken thigh, boneless skinless'],['1','cup','mushrooms, sliced'],['0.5','cup','bell pepper, sliced'],['1','cup','crushed tomatoes'],['0.25','cup','olives, kalamata'],['0.5','cup','onion, sliced'],['1','t','Italian seasoning'],['2','clove','garlic, minced']],
       method:['Brown chicken in oven-safe pan 5 min per side.','Remove chicken. Sauté onion, pepper, mushrooms, garlic 5 min.','Add tomatoes, olives, seasoning. Return chicken.','Simmer covered 20 min or bake at 375°F for 20 min.']},

      {id:'d10',name:'Black Bean & Tempeh Power Bowl',cal:450,protein:34,fat:16,fiber:14,time:18,note:'Vegan',cholesterol:'zero',tags:['vegan','tempeh','high-fiber'],
       ing:[['3','oz','tempeh, sliced and pan-fried'],['0.5','cup','black beans, cooked'],['1','cup','roasted broccoli'],['0.5','cup','roasted sweet potato'],['2','T','tahini'],['1','T','lime juice'],['1','t','cumin']],
       method:['Pan-fry tempeh until golden.','Warm beans and roasted veg.','Whisk tahini, lime juice, cumin with water for dressing.','Build bowl, drizzle dressing over top.']},

      {id:'d11',name:'Lemon Herb Salmon with Asparagus',cal:460,protein:42,fat:22,fiber:6,time:22,note:'Quick',cholesterol:'medium',tags:['quick','high-protein'],
       ing:[['5','oz','salmon fillet'],['1.5','cup','asparagus spears'],['1','T','olive oil'],['1','unit','lemon, zested and juiced'],['2','clove','garlic, minced'],['1','T','fresh dill or parsley'],['0.5','t','black pepper']],
       method:['Preheat oven to 400°F.','Place salmon and asparagus on sheet pan.','Drizzle with olive oil, lemon juice, garlic, herbs.','Roast 16-18 min. Finish with lemon zest.']},

      {id:'d12',name:'Turkey & Spinach Stuffed Zucchini',cal:420,protein:40,fat:14,fiber:7,time:38,note:'Weekend',cholesterol:'medium',tags:['turkey','weekend'],
       ing:[['2','unit','zucchini, halved lengthwise'],['4','oz','ground turkey'],['0.5','cup','crushed tomatoes'],['1','cup','spinach, chopped'],['2','T','feta cheese'],['1','clove','garlic, minced'],['1','t','Italian seasoning']],
       method:['Scoop out zucchini centers, chop and reserve.','Brown turkey with garlic 5 min. Add zucchini flesh, tomatoes, spinach, seasoning.','Fill zucchini shells with turkey mixture. Top with feta.','Bake at 375°F for 22-25 min.']},

      {id:'d13',name:'Chicken & Lentil Soup',cal:400,protein:42,fat:8,fiber:12,time:40,note:'Excellent batch meal',cholesterol:'medium',tags:['chicken','batch-cook','high-fiber'],
       ing:[['5','oz','chicken breast, cubed'],['0.5','cup','green lentils, dry'],['1','cup','carrots, diced'],['1','cup','celery, diced'],['3','cup','chicken broth, low-sodium'],['2','clove','garlic, minced'],['1','t','cumin'],['1','cup','spinach, chopped']],
       method:['Simmer lentils in broth 15 min.','Add chicken, carrots, celery, garlic, cumin.','Cook 15 more min until chicken done.','Stir in kale. Season and serve.']},

      {id:'d14',name:'Cod with White Beans & Kale',cal:430,protein:48,fat:10,fiber:10,time:22,note:'Quick',cholesterol:'medium',tags:['cod','quick','high-protein'],
       ing:[['6','oz','cod fillet'],['0.75','cup','white beans, cooked'],['2','cup','spinach, chopped'],['2','clove','garlic, minced'],['1','T','olive oil'],['0.5','unit','lemon, juiced'],['0.25','t','red pepper flakes']],
       method:['Sauté garlic in oil 1 min. Add spinach, cook 3 min.','Add white beans, warm through.','Pan-sear cod 3-4 min per side until golden.','Serve cod over bean-kale mixture. Squeeze lemon over top.']},
    ],

    snack: [
      {id:'s01',name:'Hard Boiled Eggs',cal:140,protein:12,fat:10,fiber:0,time:12,note:'Simple',cholesterol:'medium',tags:['quick','eggs','no-cook'],
       ing:[['2','egg','eggs, hard boiled'],['1','t','everything bagel seasoning']],
       method:['Boil eggs 10-12 min. Cool in ice water. Season and serve.']},

      {id:'s02',name:'Greek Yogurt with Berries',cal:130,protein:17,fat:0,fiber:3,time:2,note:'Simple',cholesterol:'low',tags:['quick','no-cook','dessert-friendly'],
       ing:[['0.75','cup','Greek yogurt, 0% fat'],['0.5','cup','mixed berries'],],
       method:['Layer yogurt and berries. Serve cold.']},

      {id:'s03',name:'Apple with Almond Butter',cal:185,protein:4,fat:9,fiber:5,time:2,note:'Simple',cholesterol:'zero',tags:['quick','no-cook','vegan'],
       ing:[['1','medium','apple, sliced'],['1','T','almond butter, natural'],['0.5','t','cinnamon']],
       method:['Slice apple. Serve with almond butter. Dust with cinnamon.']},

      {id:'s04',name:'Cottage Cheese & Cucumber',cal:110,protein:14,fat:1,fiber:1,time:3,note:'Simple',cholesterol:'low',tags:['quick','no-cook','low-calorie'],
       ing:[['0.5','cup','cottage cheese, 1% fat'],['1','cup','cucumber, sliced'],['0.25','t','everything bagel seasoning']],
       method:['Serve cottage cheese alongside cucumber slices. Season.']},

      {id:'s05',name:'Edamame with Sea Salt',cal:125,protein:11,fat:5,fiber:5,time:5,note:'Simple',cholesterol:'zero',tags:['vegan','high-fiber','quick'],
       ing:[['0.75','cup','edamame, shelled'],['0.25','t','sea salt, flaked'],['0.25','t','red pepper flakes']],
       method:['Steam or microwave edamame 3-4 min. Season with salt and pepper flakes.']},

      {id:'s06',name:'Hummus with Veggie Dippers',cal:160,protein:8,fat:7,fiber:6,time:3,note:'Simple',cholesterol:'zero',tags:['vegan','no-cook','quick'],
       ing:[['0.25','cup','hummus'],['1','cup','celery, cut into sticks'],['0.5','cup','bell pepper strips'],['0.5','cup','cucumber slices']],
       method:['Portion hummus. Arrange veggies around it for dipping.']},

      {id:'s07',name:'Tuna on Sprouted Toast',cal:190,protein:20,fat:3,fiber:3,time:5,note:'Quick protein',cholesterol:'medium',tags:['quick','high-protein'],
       ing:[['2','oz','canned tuna in water, drained'],['1','slice','Ezekiel sprouted bread, toasted'],['1','t','Dijon mustard'],['1','T','red onion, minced']],
       method:['Mix tuna with mustard and red onion. Spread on toast.']},

      {id:'s08',name:'Savory Yogurt Bowl',cal:140,protein:18,fat:2,fiber:2,time:3,note:'Quick',cholesterol:'low',tags:['quick','no-cook','savory'],
       ing:[['0.75','cup','Greek yogurt, 0% fat'],['2','T','cucumber, diced'],['1','t','za\'atar seasoning'],['0.25','t','olive oil']],
       method:['Top yogurt with cucumber, za\'atar, drizzle of olive oil.']},

      {id:'s09',name:'Oat Bran with Berries',cal:180,protein:7,fat:3,fiber:6,time:5,note:'Dessert-friendly',cholesterol:'zero',tags:['dessert-friendly','vegan','high-fiber'],
       ing:[['0.33','cup','oat bran, dry'],['0.5','cup','mixed berries'],['0.5','t','cinnamon']],
       method:['Cook oat bran per package. Top with berries, chia, cinnamon.']},

      {id:'s10',name:'Walnut-Berry Yogurt Cup',cal:170,protein:15,fat:7,fiber:4,time:2,note:'Dessert-friendly',cholesterol:'low',tags:['quick','no-cook','dessert-friendly'],
       ing:[['0.5','cup','Greek yogurt, 0% fat'],['0.25','cup','mixed berries'],['1','T','walnuts, chopped'],],
       method:['Layer yogurt, berries, and walnuts.']},

      {id:'s11',name:'Pumpkin Seeds & String Cheese',cal:165,protein:12,fat:10,fiber:1,time:1,note:'No prep',cholesterol:'low',tags:['quick','no-cook'],
       ing:[['2','T','pumpkin seeds'],['1','unit','string cheese, part-skim']],
       method:['Portion pumpkin seeds. Serve with string cheese.']},

      {id:'s12',name:'Cottage Cheese with Berries',cal:150,protein:16,fat:3,fiber:4,time:2,note:'Dessert-friendly',cholesterol:'low',tags:['quick','no-cook','dessert-friendly'],
       ing:[['0.5','cup','cottage cheese, 1% fat'],['0.5','cup','blueberries'],],
       method:['Combine all. Serve cold.']},

      {id:'s13',name:'Turkey Roll-Ups',cal:140,protein:18,fat:4,fiber:1,time:3,note:'Quick protein',cholesterol:'medium',tags:['quick','high-protein','turkey'],
       ing:[['3','oz','turkey breast, deli sliced'],['2','T','hummus'],['0.5','cup','cucumber strips']],
       method:['Spread hummus on turkey slices. Add cucumber strip. Roll up and serve.']},

      {id:'s14',name:'Celery with Peanut Butter & Hemp',cal:155,protein:7,fat:10,fiber:3,time:2,note:'Simple',cholesterol:'zero',tags:['quick','vegan','no-cook'],
       ing:[['3','stalk','celery, cut into sticks'],['1','T','peanut butter, natural'],],
       method:['Spread peanut butter in celery grooves.']},
    ]
  };
