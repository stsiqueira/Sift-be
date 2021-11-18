const names = [
	{
		"id": "ac_adapter",
		"name": "AC Adapter"
	},
	{
		"id": "acetone",
		"name": "Acetone"
	},
	{
		"id": "acorn",
		"name": "Acorn"
	},
	{
		"id": "active_ironing_board",
		"name": "Active Ironing Board"
	},
	{
		"id": "aerosol_can_non_paint",
		"name": "Aerosol can (non-paint)"
	},
	{
		"id": "aerosol_deodorant_container",
		"name": "Aerosol deodorant container"
	},
	{
		"id": "aerosol_paint",
		"name": "Aerosol paint"
	},
	{
		"id": "aerosol_paint_container_empty",
		"name": "Aerosol paint container - empty"
	},
	{
		"id": "airbrushing_tools",
		"name": "Airbrushing tools"
	},
	{
		"id": "air_exchanger_metal",
		"name": "Air exchanger (metal)"
	},
	{
		"id": "air_exchanger_plastic",
		"name": "Air exchanger (plastic)"
	},
	{
		"id": "air_freshener_aerosol_can",
		"name": "Air freshener (aerosol can)"
	},
	{
		"id": "air_purifiers",
		"name": "Air purifiers"
	},
	{
		"id": "alarm_clock_electric_or_battery",
		"name": "Alarm clock (electric or battery)"
	},
	{
		"id": "alcohol_bottles_glass",
		"name": "Alcohol bottles (glass)"
	},
	{
		"id": "aluminum_cans_pop_or_beer",
		"name": "Aluminum cans - pop or beer"
	},
	{
		"id": "aluminum_foil",
		"name": "Aluminum foil"
	},
	{
		"id": "aluminum_foil_baking_trays",
		"name": "Aluminum foil baking trays"
	},
	{
		"id": "aluminum_foil_take_out_container",
		"name": "Aluminum foil - take-out container"
	},
	{
		"id": "aluminum_pie_plates",
		"name": "Aluminum pie plates"
	},
	{
		"id": "aluminum_scrap",
		"name": "Aluminum - scrap"
	},
	{
		"id": "aluminum_siding",
		"name": "Aluminum siding"
	},
	{
		"id": "aluminum_windows",
		"name": "Aluminum windows"
	},
	{
		"id": "amplifier",
		"name": "Amplifier"
	},
	{
		"id": "antenna",
		"name": "Antenna"
	},
	{
		"id": "antifreeze_and_antifreeze_containers",
		"name": "Antifreeze and Antifreeze containers"
	},
	{
		"id": "applesauce_cups_single_serving",
		"name": "Applesauce cups (single serving)"
	},
	{
		"id": "asphalt_roofing_shingles",
		"name": "Asphalt roofing shingles"
	},
	{
		"id": "automobile_battery",
		"name": "Automobile battery"
	},
	{
		"id": "avocado_net_bag",
		"name": "Avocado net bag"
	},
	{
		"id": "awning_cloth",
		"name": "Awning (cloth)"
	},
	{
		"id": "awning_metal",
		"name": "Awning (metal)"
	},
	{
		"id": "baby_food_pouch",
		"name": "Baby food - pouch"
	},
	{
		"id": "baby_formula_cannister",
		"name": "Baby Formula (cannister)"
	},
	{
		"id": "baby_wipes",
		"name": "Baby wipes"
	},
	{
		"id": "baby_wipes_dispenser_bag",
		"name": "Baby wipes dispenser bag"
	},
	{
		"id": "bacon_packaging_clear_laminate",
		"name": "Bacon packaging (clear laminate)"
	},
	{
		"id": "baked_goods",
		"name": "Baked goods"
	},
	{
		"id": "baked_goods_plastic_clamshell",
		"name": "Baked goods plastic clamshell"
	},
	{
		"id": "baking_ingredients",
		"name": "Baking ingredients"
	},
	{
		"id": "balloons_foil",
		"name": "Balloons (foil)"
	},
	{
		"id": "balloons_latex_or_rubber",
		"name": "Balloons (latex or rubber)"
	},
	{
		"id": "bamboo",
		"name": "Bamboo"
	},
	{
		"id": "bandages_and_gauze",
		"name": "Bandages and gauze"
	},
	{
		"id": "banner",
		"name": "Banner"
	},
	{
		"id": "barbeque_without_propane_tanks",
		"name": "Barbeque (without propane tanks)"
	},
	{
		"id": "bar_soap",
		"name": "Bar soap"
	},
	{
		"id": "batteries_household_alkaline",
		"name": "Batteries (household - alkaline)"
	},
	{
		"id": "batteries_household_rechargeable",
		"name": "Batteries (household-rechargeable)"
	},
	{
		"id": "bbq_briquettes_ash",
		"name": "BBQ briquettes (ash)"
	},
	{
		"id": "bbq_lighter_fluid",
		"name": "BBQ lighter fluid"
	},
	{
		"id": "beard_trimmer",
		"name": "Beard trimmer"
	},
	{
		"id": "bedding",
		"name": "Bedding"
	},
	{
		"id": "beer_bottles",
		"name": "Beer bottles"
	},
	{
		"id": "beer_cans",
		"name": "Beer cans"
	},
	{
		"id": "beverage_containers_with_deposit",
		"name": "Beverage containers (with deposit)"
	},
	{
		"id": "bicycle",
		"name": "Bicycle"
	},
	{
		"id": "bike_frame",
		"name": "Bike Frame"
	},
	{
		"id": "bike_light",
		"name": "Bike light"
	},
	{
		"id": "binoculars_electronic",
		"name": "Binoculars (electronic)"
	},
	{
		"id": "biodegradable_plastic_containers",
		"name": "Biodegradable plastic containers"
	},
	{
		"id": "bird_seed",
		"name": "Bird seed"
	},
	{
		"id": "biscuit_joiner",
		"name": "Biscuit joiner"
	},
	{
		"id": "bleach_container",
		"name": "Bleach container"
	},
	{
		"id": "blenders",
		"name": "Blenders"
	},
	{
		"id": "blinds_aluminum",
		"name": "Blinds (aluminum)"
	},
	{
		"id": "blister_packaging_gum,_lozenges_and_pills",
		"name": "Blister packaging (gum, lozenges and pills)"
	},
	{
		"id": "block_cheese_plastic_packaging",
		"name": "Block cheese - plastic packaging"
	},
	{
		"id": "blue_box_broken",
		"name": "Blue Box (broken)"
	},
	{
		"id": "blueprints",
		"name": "Blueprints"
	},
	{
		"id": "boat_hull",
		"name": "Boat hull"
	},
	{
		"id": "boiler",
		"name": "Boiler"
	},
	{
		"id": "bones_chicken,_beef,_fish",
		"name": "Bones (chicken, beef, fish)"
	},
	{
		"id": "book_light",
		"name": "Book light"
	},
	{
		"id": "bottle_cap_metal",
		"name": "Bottle cap (metal)"
	},
	{
		"id": "bottle_cap_plastic",
		"name": "Bottle cap (plastic)"
	},
	{
		"id": "boxboard",
		"name": "Boxboard"
	},
	{
		"id": "boxspring",
		"name": "Boxspring"
	},
	{
		"id": "bread",
		"name": "Bread"
	},
	{
		"id": "breadmaker",
		"name": "Breadmaker"
	},
	{
		"id": "bread_tag",
		"name": "Bread tag"
	},
	{
		"id": "broken_glass",
		"name": "Broken glass"
	},
	{
		"id": "brown_bag",
		"name": "Brown bag"
	},
	{
		"id": "brown_envelopes",
		"name": "Brown envelopes"
	},
	{
		"id": "brush_branches,_twigs",
		"name": "Brush (branches, twigs)"
	},
	{
		"id": "bubble_wrap",
		"name": "Bubble wrap"
	},
	{
		"id": "buffet_warmer_trays",
		"name": "Buffet warmer trays"
	},
	{
		"id": "bugs",
		"name": "Bugs"
	},
	{
		"id": "burlap",
		"name": "Burlap"
	},
	{
		"id": "butane_canisters_and_cylinders",
		"name": "Butane canisters and cylinders"
	},
	{
		"id": "butane_lighter_plastic",
		"name": "Butane lighter (plastic)"
	},
	{
		"id": "butcher_paper_no_plastic_lining",
		"name": "Butcher paper (no plastic lining)"
	},
	{
		"id": "butter",
		"name": "Butter"
	},
	{
		"id": "butter_wrapper_foil",
		"name": "Butter wrapper (foil)"
	},
	{
		"id": "cage_metal",
		"name": "Cage (metal)"
	},
	{
		"id": "cake",
		"name": "Cake"
	},
	{
		"id": "cake_box_cardboard",
		"name": "cake box (cardboard)"
	},
	{
		"id": "calendar_paper",
		"name": "Calendar - paper"
	},
	{
		"id": "camping_fuel_liquid_type_only",
		"name": "Camping fuel (liquid type only)"
	},
	{
		"id": "camping_headlamps",
		"name": "Camping headlamps"
	},
	{
		"id": "candle_electric",
		"name": "Candle (electric)"
	},
	{
		"id": "candy",
		"name": "Candy"
	},
	{
		"id": "candy_bag_crinkly_plastic",
		"name": "Candy bag - crinkly plastic"
	},
	{
		"id": "candy_bag_zipper_lock_plastic_pouch",
		"name": "Candy bag - zipper lock plastic pouch"
	},
	{
		"id": "candy_wrapper",
		"name": "Candy wrapper"
	},
	{
		"id": "canned_fish",
		"name": "Canned fish"
	},
	{
		"id": "can_opener_motorized",
		"name": "Can opener (motorized)"
	},
	{
		"id": "carbon_monoxide_alarm",
		"name": "Carbon monoxide alarm"
	},
	{
		"id": "carbon_paper",
		"name": "Carbon paper"
	},
	{
		"id": "cardboard",
		"name": "Cardboard"
	},
	{
		"id": "carpet_cleaning_machine",
		"name": "Carpet cleaning machine"
	},
	{
		"id": "carpet_steamer",
		"name": "Carpet steamer"
	},
	{
		"id": "cash_register_receipts",
		"name": "Cash register receipts"
	},
	{
		"id": "cassette_tapes",
		"name": "Cassette tapes"
	},
	{
		"id": "catalogue",
		"name": "Catalogue"
	},
	{
		"id": "cat_feces",
		"name": "Cat feces"
	},
	{
		"id": "cat_food_can",
		"name": "Cat food can"
	},
	{
		"id": "cat_litter",
		"name": "Cat litter"
	},
	{
		"id": "caulking",
		"name": "Caulking"
	},
	{
		"id": "cd",
		"name": "CD"
	},
	{
		"id": "cd_case_empty",
		"name": "CD case (empty)"
	},
	{
		"id": "cedar_shingles_and_shakes",
		"name": "Cedar shingles and shakes"
	},
	{
		"id": "ceiling_fan_with_light",
		"name": "Ceiling Fan (with light)"
	},
	{
		"id": "cellophane",
		"name": "Cellophane"
	},
	{
		"id": "cell_phone",
		"name": "Cell phone"
	},
	{
		"id": "cellulose_lined_paper_bags",
		"name": "Cellulose lined paper bags"
	},
	{
		"id": "cement_board",
		"name": "Cement board"
	},
	{
		"id": "cereal_box",
		"name": "Cereal box"
	},
	{
		"id": "cereal_box_liner",
		"name": "Cereal box liner"
	},
	{
		"id": "cereals_and_grains",
		"name": "Cereals and grains"
	},
	{
		"id": "cfl_compact_fluorescent_lamp",
		"name": "CFL (compact fluorescent lamp)"
	},
	{
		"id": "chalk",
		"name": "Chalk"
	},
	{
		"id": "chandelier",
		"name": "Chandelier"
	},
	{
		"id": "charger",
		"name": "Charger"
	},
	{
		"id": "cheesecloth",
		"name": "Cheesecloth"
	},
	{
		"id": "cheese_slice_individual_wrapper_plastic",
		"name": "Cheese slice - individual wrapper (plastic)"
	},
	{
		"id": "cheese_slices_paper_separator",
		"name": "Cheese slices - paper separator"
	},
	{
		"id": "cheese_slices_prepackaged",
		"name": "Cheese slices - prepackaged"
	},
	{
		"id": "cheese_spray_aerosol_can_empty",
		"name": "Cheese spray aerosol can - empty"
	},
	{
		"id": "chewing_gum",
		"name": "Chewing gum"
	},
	{
		"id": "chicken_scraps",
		"name": "chicken scraps"
	},
	{
		"id": "chip_bag",
		"name": "Chip bag"
	},
	{
		"id": "chipper_for_branches",
		"name": "Chipper (for branches)"
	},
	{
		"id": "chocolate",
		"name": "Chocolate"
	},
	{
		"id": "chocolate_bar_wrapper",
		"name": "Chocolate bar wrapper"
	},
	{
		"id": "chocolate_box_cardboard",
		"name": "Chocolate box (cardboard)"
	},
	{
		"id": "chocolate_coins_net_bag",
		"name": "Chocolate coins net bag"
	},
	{
		"id": "chocolate_tin_box",
		"name": "Chocolate tin box"
	},
	{
		"id": "chop_sticks_wood/unpainted",
		"name": "Chop sticks (wood/unpainted)"
	},
	{
		"id": "christmas_lights",
		"name": "Christmas Lights"
	},
	{
		"id": "cigarette_package",
		"name": "Cigarette package"
	},
	{
		"id": "cigarettes,_cigarette_butts,_cigars_and_ashes",
		"name": "Cigarettes, cigarette butts, cigars and ashes"
	},
	{
		"id": "clamshell_packages_styrofoam",
		"name": "Clamshell packages - Styrofoam"
	},
	{
		"id": "clamshell_packaging_clear_plastic",
		"name": "Clamshell packaging (clear plastic)"
	},
	{
		"id": "clear_plastic_clam_shell_containers",
		"name": "Clear plastic clam shell containers"
	},
	{
		"id": "cling_wrap_box_empty",
		"name": "Cling wrap box (empty)"
	},
	{
		"id": "clip_lamps",
		"name": "Clip lamps"
	},
	{
		"id": "clock",
		"name": "Clock"
	},
	{
		"id": "clock_radio",
		"name": "Clock Radio"
	},
	{
		"id": "clothes_hangers_metal",
		"name": "Clothes hangers (metal)"
	},
	{
		"id": "clothes_pegs_wood_or_plastic",
		"name": "Clothes pegs (wood or plastic)"
	},
	{
		"id": "clothing,_accessories,_textiles_and_linens_in_good_condition",
		"name": "Clothing, Accessories, Textiles and Linens - in good condition"
	},
	{
		"id": "clothing,_accessories,_textiles_and_linens_worn_out,_ripped,_damaged",
		"name": "Clothing, Accessories, Textiles and Linens - worn out, ripped, damaged"
	},
	{
		"id": "clothing_and_other_textiles_moldy,_mildewed,_infested_with_bugs,_or_contaminated_with_oil_or_paint",
		"name": "Clothing and Other Textiles - moldy, mildewed, infested with bugs, or contaminated with oil or paint"
	},
	{
		"id": "cocoa",
		"name": "Cocoa"
	},
	{
		"id": "coffee_bag_paper",
		"name": "Coffee bag (paper)"
	},
	{
		"id": "coffee_cup_carrying_trays_fibre_based",
		"name": "Coffee cup carrying trays (fibre-based)"
	},
	{
		"id": "coffee_cup_lid",
		"name": "Coffee cup lid"
	},
	{
		"id": "coffee_cup_paper",
		"name": "Coffee cup (paper)"
	},
	{
		"id": "coffee_cup_styrofoam",
		"name": "Coffee cup - Styrofoam"
	},
	{
		"id": "coffee_empty_cannister",
		"name": "Coffee (empty cannister)"
	},
	{
		"id": "coffee_filters",
		"name": "Coffee filters"
	},
	{
		"id": "coffee_grinder",
		"name": "Coffee grinder"
	},
	{
		"id": "coffee_grounds",
		"name": "Coffee grounds"
	},
	{
		"id": "coffee_maker",
		"name": "Coffee maker"
	},
	{
		"id": "coffee_pod_compostable",
		"name": "Coffee pod (compostable)"
	},
	{
		"id": "coffee_and_tea_pods_non_compostable",
		"name": "Coffee and tea pods (non-compostable)"
	},
	{
		"id": "coffee_urns_electric",
		"name": "Coffee urns (electric)"
	},
	{
		"id": "coffee_zipper_lock_pouch",
		"name": "Coffee - zipper lock pouch"
	},
	{
		"id": "collection_schedule_paper",
		"name": "Collection schedule - paper"
	},
	{
		"id": "coloured_glass_bottles_and_jars",
		"name": "Coloured glass bottles and jars"
	},
	{
		"id": "combined_smoke_and_co_alarm",
		"name": "Combined Smoke and CO Alarm"
	},
	{
		"id": "compact_fluorescent_bulb_cfl",
		"name": "Compact Fluorescent Bulb (CFL)"
	},
	{
		"id": "compostable_plastic_bag",
		"name": "Compostable plastic bag"
	},
	{
		"id": "compressor",
		"name": "Compressor"
	},
	{
		"id": "computer",
		"name": "Computer"
	},
	{
		"id": "computer_cables",
		"name": "Computer cables"
	},
	{
		"id": "computer_paper",
		"name": "Computer paper"
	},
	{
		"id": "concrete_vibrator",
		"name": "Concrete vibrator"
	},
	{
		"id": "condom",
		"name": "Condom"
	},
	{
		"id": "construction_paper",
		"name": "Construction paper"
	},
	{
		"id": "#7_container_made_from_corn_starch",
		"name": "#7 container - made from corn starch"
	},
	{
		"id": "cookie_bag",
		"name": "Cookie bag"
	},
	{
		"id": "cookie_dough_cannister",
		"name": "Cookie dough cannister"
	},
	{
		"id": "cookie_wrapper_individual_serving",
		"name": "Cookie wrapper (individual serving)"
	},
	{
		"id": "cooking_oil_bottle_or_jug_empty",
		"name": "Cooking oil bottle or jug (empty)"
	},
	{
		"id": "cooking_oil_liquid",
		"name": "Cooking oil (liquid)"
	},
	{
		"id": "cooking_oil_solid",
		"name": "Cooking oil (solid)"
	},
	{
		"id": "cooking_spray_empty",
		"name": "Cooking spray (empty)"
	},
	{
		"id": "copper_pipe",
		"name": "Copper pipe"
	},
	{
		"id": "cordless_phone",
		"name": "Cordless phone"
	},
	{
		"id": "cores_fruit",
		"name": "Cores (fruit)"
	},
	{
		"id": "cork_natural",
		"name": "Cork (natural)"
	},
	{
		"id": "corn_cobs_and_husks_cooked",
		"name": "Corn cobs and husks (cooked)"
	},
	{
		"id": "cornstalks",
		"name": "Cornstalks"
	},
	{
		"id": "corrugated_plastic",
		"name": "Corrugated plastic"
	},
	{
		"id": "cottage_cheese_tub",
		"name": "Cottage cheese tub"
	},
	{
		"id": "cotton_balls",
		"name": "Cotton balls"
	},
	{
		"id": "cpu",
		"name": "CPU"
	},
	{
		"id": "credit_card",
		"name": "Credit card"
	},
	{
		"id": "crinkly_wrappers_and_bags",
		"name": "Crinkly wrappers and bags"
	},
	{
		"id": "crockpot_electric",
		"name": "Crockpot (electric)"
	},
	{
		"id": "cross_training_machine",
		"name": "Cross Training Machine"
	},
	{
		"id": "cups_compostable",
		"name": "Cups (compostable)"
	},
	{
		"id": "cup_with_plastic_lid_and_paper_sleeve",
		"name": "Cup with plastic lid and paper sleeve"
	},
	{
		"id": "curling_iron",
		"name": "Curling iron"
	},
	{
		"id": "curry",
		"name": "Curry"
	},
	{
		"id": "curtain_rod_metal",
		"name": "Curtain rod (metal)"
	},
	{
		"id": "cushion_foam",
		"name": "Cushion foam"
	},
	{
		"id": "cut_flowers_soil_removed",
		"name": "Cut flowers (soil removed)"
	},
	{
		"id": "cutlery_compostable",
		"name": "Cutlery (compostable)"
	},
	{
		"id": "cutlery_plastic",
		"name": "Cutlery (plastic)"
	},
	{
		"id": "cycling_machine",
		"name": "Cycling machine"
	},
	{
		"id": "dairy_products_e.g._cheese,_yogurt",
		"name": "Dairy products (e.g. cheese, yogurt)"
	},
	{
		"id": "dandelions",
		"name": "Dandelions"
	},
	{
		"id": "dead_rat",
		"name": "Dead rat"
	},
	{
		"id": "deck_and_floor_paint",
		"name": "Deck and floor paint"
	},
	{
		"id": "deep_fryers",
		"name": "Deep fryers"
	},
	{
		"id": "deli_chicken_plastic_tray",
		"name": "Deli chicken plastic tray"
	},
	{
		"id": "deli_meats_prepackaged",
		"name": "Deli meats - prepackaged"
	},
	{
		"id": "deli_meats_zipper_lock_bag",
		"name": "Deli meats - zipper lock bag"
	},
	{
		"id": "demolition_hammer",
		"name": "Demolition hammer"
	},
	{
		"id": "dental_floss",
		"name": "Dental floss"
	},
	{
		"id": "dental_floss_container",
		"name": "Dental floss container"
	},
	{
		"id": "desk_lamp",
		"name": "Desk lamp"
	},
	{
		"id": "detergent_bottle_liquid",
		"name": "Detergent bottle (liquid)"
	},
	{
		"id": "devil's_club",
		"name": "Devil's Club"
	},
	{
		"id": "diamond_cutter",
		"name": "Diamond cutter"
	},
	{
		"id": "diaper_disposable",
		"name": "Diaper (disposable)"
	},
	{
		"id": "digital_microscope",
		"name": "Digital microscope"
	},
	{
		"id": "dishes_broken",
		"name": "Dishes (broken)"
	},
	{
		"id": "dish_soap_plastic_bottle",
		"name": "Dish soap plastic bottle"
	},
	{
		"id": "dishwasher",
		"name": "Dishwasher"
	},
	{
		"id": "dishwasher_pod_pouch",
		"name": "Dishwasher pod pouch"
	},
	{
		"id": "disinfecting_wipes",
		"name": "Disinfecting wipes"
	},
	{
		"id": "disposable_gloves",
		"name": "Disposable gloves"
	},
	{
		"id": "disposable_mop_sheets",
		"name": "Disposable mop sheets"
	},
	{
		"id": "disposable_razor",
		"name": "Disposable razor"
	},
	{
		"id": "dog_bone",
		"name": "Dog bone"
	},
	{
		"id": "dog_waste",
		"name": "Dog waste"
	},
	{
		"id": "dried_flowers",
		"name": "Dried flowers"
	},
	{
		"id": "dried_fruit_and_nuts_zipper_lock_plastic_pouch",
		"name": "Dried fruit and nuts - zipper lock plastic pouch"
	},
	{
		"id": "drill_cordless_or_with_cord",
		"name": "Drill (cordless or with cord)"
	},
	{
		"id": "drill_press",
		"name": "Drill Press"
	},
	{
		"id": "driveway_sealer_non_tar_or_bitumen_based",
		"name": "Driveway sealer (non-tar or bitumen based)"
	},
	{
		"id": "dryer",
		"name": "Dryer"
	},
	{
		"id": "dryer_lint",
		"name": "Dryer Lint"
	},
	{
		"id": "dryer_sheet",
		"name": "Dryer sheet"
	},
	{
		"id": "drywall_new",
		"name": "Drywall - NEW"
	},
	{
		"id": "drywall_used",
		"name": "Drywall - USED"
	},
	{
		"id": "dvd",
		"name": "DVD"
	},
	{
		"id": "dvd_case_empty",
		"name": "DVD case (empty)"
	},
	{
		"id": "earbuds",
		"name": "Earbuds"
	},
	{
		"id": "egg_carton_paper_based",
		"name": "Egg carton - paper-based"
	},
	{
		"id": "egg_carton_styrofoam",
		"name": "Egg carton - Styrofoam"
	},
	{
		"id": "egg_crate_foam_packaging",
		"name": "Egg crate foam packaging"
	},
	{
		"id": "eggs_cooked",
		"name": "Eggs (cooked)"
	},
	{
		"id": "eggs_and_eggshells",
		"name": "Eggs and eggshells"
	},
	{
		"id": "electrical_motor",
		"name": "Electrical motor"
	},
	{
		"id": "electrical_panel",
		"name": "Electrical panel"
	},
	{
		"id": "electric_candles",
		"name": "Electric candles"
	},
	{
		"id": "electric_fireplace",
		"name": "Electric fireplace"
	},
	{
		"id": "electric_knife",
		"name": "Electric knife"
	},
	{
		"id": "electric_knife_sharpener",
		"name": "Electric knife sharpener"
	},
	{
		"id": "electric_shaver",
		"name": "Electric shaver"
	},
	{
		"id": "electronics",
		"name": "Electronics"
	},
	{
		"id": "electronic_air_cleaner",
		"name": "Electronic air cleaner"
	},
	{
		"id": "electronic_piano_keyboard_and_electric_organ",
		"name": "Electronic Piano Keyboard and Electric Organ"
	},
	{
		"id": "electronic_waste_e_waste",
		"name": "Electronic waste (E-waste)"
	},
	{
		"id": "elliptical_trainer",
		"name": "Elliptical trainer"
	},
	{
		"id": "embroidery_machine",
		"name": "Embroidery machine"
	},
	{
		"id": "engraving_device",
		"name": "Engraving device"
	},
	{
		"id": "envelope_with_or_without_window",
		"name": "Envelope (with or without window)"
	},
	{
		"id": "espresso_maker",
		"name": "Espresso maker"
	},
	{
		"id": "exercise_machines",
		"name": "Exercise machines"
	},
	{
		"id": "fabric_softener_container",
		"name": "Fabric softener container"
	},
	{
		"id": "face_mask",
		"name": "Face mask"
	},
	{
		"id": "facial_cleansing_pads",
		"name": "Facial cleansing pads"
	},
	{
		"id": "facial_tissue",
		"name": "Facial tissue"
	},
	{
		"id": "fallen_fruit_from_trees",
		"name": "Fallen fruit from trees"
	},
	{
		"id": "fan",
		"name": "Fan"
	},
	{
		"id": "fax_machine",
		"name": "Fax machine"
	},
	{
		"id": "feminine_hygiene_products",
		"name": "Feminine hygiene products"
	},
	{
		"id": "fencing_metal",
		"name": "Fencing (metal)"
	},
	{
		"id": "file_folders",
		"name": "File folders"
	},
	{
		"id": "filing_cabinet_metal",
		"name": "Filing cabinet (metal)"
	},
	{
		"id": "fine_paper",
		"name": "Fine paper"
	},
	{
		"id": "fire_extinguisher_empty_or_full",
		"name": "Fire extinguisher (empty or full)"
	},
	{
		"id": "firewood",
		"name": "Firewood"
	},
	{
		"id": "fish",
		"name": "Fish"
	},
	{
		"id": "fish_tank",
		"name": "Fish tank"
	},
	{
		"id": "flammable_degreasers",
		"name": "Flammable degreasers"
	},
	{
		"id": "flammable_liquids",
		"name": "Flammable liquids"
	},
	{
		"id": "flammable_lubricants",
		"name": "Flammable lubricants"
	},
	{
		"id": "flash_drive",
		"name": "Flash drive"
	},
	{
		"id": "flashlight",
		"name": "Flashlight"
	},
	{
		"id": "flood_light_portable",
		"name": "Flood light (portable)"
	},
	{
		"id": "floor_lamp",
		"name": "Floor lamp"
	},
	{
		"id": "floor_polisher",
		"name": "Floor polisher"
	},
	{
		"id": "floor_scrubber",
		"name": "Floor scrubber"
	},
	{
		"id": "floppy_disk",
		"name": "Floppy disk"
	},
	{
		"id": "florist_foam",
		"name": "Florist foam"
	},
	{
		"id": "flour",
		"name": "Flour"
	},
	{
		"id": "flour_bags",
		"name": "Flour bags"
	},
	{
		"id": "flowers",
		"name": "Flowers"
	},
	{
		"id": "fluorescent_tube",
		"name": "Fluorescent tube"
	},
	{
		"id": "fluorescent_tube_broken",
		"name": "Fluorescent tube (broken)"
	},
	{
		"id": "flyers",
		"name": "Flyers"
	},
	{
		"id": "foam_cooler",
		"name": "Foam cooler"
	},
	{
		"id": "foam_core_board",
		"name": "Foam core board"
	},
	{
		"id": "foam_packaging_to_protect_small_appliances_and_electronics",
		"name": "Foam packaging - to protect small appliances and electronics"
	},
	{
		"id": "foam_peanuts_for_packing",
		"name": "Foam peanuts (for packing)"
	},
	{
		"id": "foam_sheet",
		"name": "Foam sheet"
	},
	{
		"id": "foam_take_out_containers",
		"name": "Foam take-out containers"
	},
	{
		"id": "foil_gift_wrap",
		"name": "Foil gift wrap"
	},
	{
		"id": "foil_lined_paper_bag",
		"name": "Foil-lined paper bag"
	},
	{
		"id": "foil_seal_on_yogurt_containers",
		"name": "Foil seal (on yogurt containers)"
	},
	{
		"id": "fondue_fuel",
		"name": "Fondue fuel"
	},
	{
		"id": "fondue_pots_electric",
		"name": "Fondue pots (electric)"
	},
	{
		"id": "food_bag_sealers",
		"name": "Food bag sealers"
	},
	{
		"id": "food_can_aluminum_and_steel",
		"name": "Food can (aluminum and steel)"
	},
	{
		"id": "food_chopper_electric",
		"name": "Food chopper (electric)"
	},
	{
		"id": "food_dehydrator",
		"name": "Food dehydrator"
	},
	{
		"id": "food_processor",
		"name": "Food processor"
	},
	{
		"id": "food_scale_electronic",
		"name": "Food scale (electronic)"
	},
	{
		"id": "food_scraps",
		"name": "Food scraps"
	},
	{
		"id": "food_slicer_electric",
		"name": "Food slicer (electric)"
	},
	{
		"id": "food_steamer",
		"name": "Food steamer"
	},
	{
		"id": "foot_bath",
		"name": "Foot bath"
	},
	{
		"id": "formula_powder",
		"name": "Formula powder"
	},
	{
		"id": "fresh_pasta_plastic_packaging",
		"name": "Fresh pasta - plastic packaging"
	},
	{
		"id": "frozen_entree_box",
		"name": "Frozen entree box"
	},
	{
		"id": "frozen_fish_fillets_plastic_pouch",
		"name": "Frozen fish fillets - plastic pouch"
	},
	{
		"id": "frozen_fruits_and_vegetables_plastic_stand_up_pouch",
		"name": "Frozen fruits and vegetables - plastic stand-up pouch"
	},
	{
		"id": "frozen_juice_container",
		"name": "Frozen juice container"
	},
	{
		"id": "frozen_prepared_foods_plastic_pouch",
		"name": "Frozen prepared foods - plastic pouch"
	},
	{
		"id": "frozen_scallops_plastic_pouch",
		"name": "Frozen scallops - plastic pouch"
	},
	{
		"id": "fruit_and_vegetable_stickers",
		"name": "Fruit and Vegetable stickers"
	},
	{
		"id": "fruit_raw",
		"name": "Fruit"
	},
	{
		"id": "furnace_filter_disposable",
		"name": "Furnace filter (disposable)"
	},
	{
		"id": "furnace_motor",
		"name": "Furnace motor"
	},
	{
		"id": "furniture_stripper",
		"name": "Furniture stripper"
	},
	{
		"id": "fusebox",
		"name": "Fusebox"
	},
	{
		"id": "futon_mattress",
		"name": "Futon mattress"
	},
	{
		"id": "gable_top_juice_cartons",
		"name": "Gable-top juice cartons"
	},
	{
		"id": "garage_door_opener",
		"name": "Garage door opener"
	},
	{
		"id": "garbage",
		"name": "Garbage"
	},
	{
		"id": "garburator",
		"name": "Garburator"
	},
	{
		"id": "garden_equipment_electric_or_battery_powered",
		"name": "Garden Equipment (electric or battery powered)"
	},
	{
		"id": "gardening_tray_plastic",
		"name": "Gardening tray (plastic)"
	},
	{
		"id": "garden_light_non_solared_powered",
		"name": "Garden light (non-solared powered)"
	},
	{
		"id": "garden_plants",
		"name": "Garden plants"
	},
	{
		"id": "garden_pots_paper_based",
		"name": "Garden Pots (paper-based)"
	},
	{
		"id": "garden_pots_plastic",
		"name": "Garden pots (plastic)"
	},
	{
		"id": "garden_trimmings",
		"name": "Garden trimmings"
	},
	{
		"id": "garment_steamers",
		"name": "Garment steamers"
	},
	{
		"id": "gasoline_including_stale_gas_or_gas_contaminated_with_oil",
		"name": "Gasoline (including stale gas or gas contaminated with oil)"
	},
	{
		"id": "giant_hogweed",
		"name": "Giant Hogweed"
	},
	{
		"id": "gift_bag_paper",
		"name": "Gift bag (paper)"
	},
	{
		"id": "gift_bows",
		"name": "Gift bows"
	},
	{
		"id": "gift_boxes",
		"name": "Gift boxes"
	},
	{
		"id": "gift_card_musical",
		"name": "Gift card - musical"
	},
	{
		"id": "gift_card_paper_or_cardboard",
		"name": "Gift card (paper or cardboard)"
	},
	{
		"id": "gift_card_plastic",
		"name": "Gift card - plastic"
	},
	{
		"id": "gift_card_with_foil,_sparkles,_plastic_parts,_or_feathers",
		"name": "Gift Card (with foil, sparkles, plastic parts, or feathers)"
	},
	{
		"id": "gift_wrap_paper",
		"name": "Gift wrap (paper)"
	},
	{
		"id": "glass",
		"name": "Glass"
	},
	{
		"id": "glass_bottles_and_jars",
		"name": "Glass bottles and jars"
	},
	{
		"id": "glass_bottle_with_plastic_lid",
		"name": "Glass bottle with plastic lid"
	},
	{
		"id": "glass_cleaner_plastic_bottle",
		"name": "Glass cleaner (plastic bottle)"
	},
	{
		"id": "glitter",
		"name": "Glitter"
	},
	{
		"id": "glossy_paper",
		"name": "Glossy paper"
	},
	{
		"id": "glue_bottles_plastic",
		"name": "Glue bottles (plastic)"
	},
	{
		"id": "glue_stick",
		"name": "Glue stick"
	},
	{
		"id": "granola_zipper_lock_plastic_pouch",
		"name": "Granola - zipper lock plastic pouch"
	},
	{
		"id": "grapes_bag_clear_plastic_with_holes",
		"name": "Grapes bag (clear plastic with holes)"
	},
	{
		"id": "grass_clippings",
		"name": "Grass clippings"
	},
	{
		"id": "grated_cheese_resealable_bag",
		"name": "Grated cheese - resealable bag"
	},
	{
		"id": "gravel",
		"name": "Gravel"
	},
	{
		"id": "grease_and_fat_from_cooking_food",
		"name": "Grease and Fat (from cooking food)"
	},
	{
		"id": "grey_box_broken",
		"name": "Grey Box (broken)"
	},
	{
		"id": "griddle_electric",
		"name": "Griddle (electric)"
	},
	{
		"id": "grinder_bench_top",
		"name": "Grinder (Bench top)"
	},
	{
		"id": "grinder_handheld",
		"name": "Grinder (handheld)"
	},
	{
		"id": "grocery_bag_paper",
		"name": "Grocery bag (paper)"
	},
	{
		"id": "grocery_bag_plastic",
		"name": "Grocery bag (plastic)"
	},
	{
		"id": "guinea_pig_waste_and_straw_bedding",
		"name": "Guinea pig waste and straw bedding"
	},
	{
		"id": "gutters_and_downspouts_metal",
		"name": "Gutters and downspouts (metal)"
	},
	{
		"id": "hair_curler",
		"name": "Hair curler"
	},
	{
		"id": "hair_dryer",
		"name": "Hair dryer"
	},
	{
		"id": "hair_human_and_pet",
		"name": "Hair (human and pet)"
	},
	{
		"id": "hair_remover",
		"name": "Hair remover"
	},
	{
		"id": "hairspray_aerosol",
		"name": "Hairspray (aerosol)"
	},
	{
		"id": "hair_straightener",
		"name": "Hair straightener"
	},
	{
		"id": "halogen_bulb",
		"name": "Halogen bulb"
	},
	{
		"id": "handheld_vacuum_cleaner",
		"name": "Handheld vacuum cleaner"
	},
	{
		"id": "hand_mixer_electric",
		"name": "Hand mixer (electric)"
	},
	{
		"id": "hand_sanitizer_bottle_empty",
		"name": "Hand sanitizer bottle (empty)"
	},
	{
		"id": "hardware_metal",
		"name": "Hardware (metal)"
	},
	{
		"id": "headphones",
		"name": "Headphones"
	},
	{
		"id": "hearing_aid",
		"name": "Hearing Aid"
	},
	{
		"id": "heat_gun",
		"name": "Heat gun"
	},
	{
		"id": "heat_pump_or_exchanger",
		"name": "Heat pump or exchanger"
	},
	{
		"id": "helium_tank",
		"name": "Helium tank"
	},
	{
		"id": "helmet",
		"name": "Helmet"
	},
	{
		"id": "herbs",
		"name": "Herbs"
	},
	{
		"id": "hose_rubber_or_vinyl",
		"name": "Hose (rubber or vinyl)"
	},
	{
		"id": "hot_plate",
		"name": "Hot plate"
	},
	{
		"id": "hot_water_tank_empty",
		"name": "Hot water tank (empty)"
	},
	{
		"id": "houseplants_soil_removed",
		"name": "Houseplants (soil removed)"
	},
	{
		"id": "humidifier",
		"name": "Humidifier"
	},
	{
		"id": "ice_cream_carton_paper",
		"name": "Ice cream carton (paper)"
	},
	{
		"id": "ice_cream_maker",
		"name": "Ice cream maker"
	},
	{
		"id": "ice_cream_tub_plastic",
		"name": "Ice cream tub (plastic)"
	},
	{
		"id": "iced_cappucino_plastic_cup",
		"name": "Iced cappucino plastic cup"
	},
	{
		"id": "incontinence_pads",
		"name": "Incontinence pads"
	},
	{
		"id": "index_card",
		"name": "Index card"
	},
	{
		"id": "inhaler",
		"name": "Inhaler"
	},
	{
		"id": "instant_noodles_plastic_bag",
		"name": "Instant noodles - plastic bag"
	},
	{
		"id": "insulation_fibreglass",
		"name": "Insulation (fibreglass)"
	},
	{
		"id": "insulation_rigid_foam_board",
		"name": "Insulation (rigid foam board)"
	},
	{
		"id": "invasive_plants_not_including_giant_hogweed_or_knotweed",
		"name": "Invasive plants (not including Giant Hogweed or Knotweed)"
	},
	{
		"id": "iron_with_cord_or_cordless",
		"name": "Iron (with cord or cordless)"
	},
	{
		"id": "jam_jar_plastic",
		"name": "Jam jar (plastic)"
	},
	{
		"id": "jewel_case_empty",
		"name": "Jewel case (empty)"
	},
	{
		"id": "jointer",
		"name": "Jointer"
	},
	{
		"id": "juice_bottle_glass",
		"name": "Juice bottle (glass)"
	},
	{
		"id": "juice_box",
		"name": "Juice box"
	},
	{
		"id": "juice_drink_pouch",
		"name": "Juice drink pouch"
	},
	{
		"id": "juice_extractor",
		"name": "Juice extractor"
	},
	{
		"id": "juice_press",
		"name": "Juice press"
	},
	{
		"id": "junk_mail",
		"name": "Junk mail"
	},
	{
		"id": "karaoke_machine",
		"name": "Karaoke machine"
	},
	{
		"id": "k_cups_single_serving",
		"name": "K-cups (single serving)"
	},
	{
		"id": "kerosene",
		"name": "Kerosene"
	},
	{
		"id": "ketchup_bottle",
		"name": "Ketchup bottle"
	},
	{
		"id": "kettle_electric",
		"name": "Kettle (electric)"
	},
	{
		"id": "keyboard_computer",
		"name": "Keyboard (computer)"
	},
	{
		"id": "keys",
		"name": "Keys"
	},
	{
		"id": "kfc_bucket",
		"name": "KFC bucket"
	},
	{
		"id": "kitty_litter_pail",
		"name": "Kitty litter pail"
	},
	{
		"id": "knitting_machine",
		"name": "Knitting machine"
	},
	{
		"id": "knotweed",
		"name": "Knotweed"
	},
	{
		"id": "ladder_metal",
		"name": "Ladder (metal)"
	},
	{
		"id": "ladder_wood",
		"name": "Ladder - wood"
	},
	{
		"id": "lamp_desk,_table,_floor",
		"name": "Lamp (desk, table, floor)"
	},
	{
		"id": "lamp_holder",
		"name": "Lamp holder"
	},
	{
		"id": "lamp_oil",
		"name": "Lamp oil"
	},
	{
		"id": "lanterns",
		"name": "Lanterns"
	},
	{
		"id": "laptop_computer",
		"name": "Laptop Computer"
	},
	{
		"id": "large_appliances",
		"name": "Large appliances"
	},
	{
		"id": "lathe",
		"name": "Lathe"
	},
	{
		"id": "laundry_detergent_box",
		"name": "Laundry detergent box"
	},
	{
		"id": "laundry_tub_metal",
		"name": "Laundry tub (metal)"
	},
	{
		"id": "lawn_mower_electric_or_battery_powered",
		"name": "Lawn mower (electric or battery powered)"
	},
	{
		"id": "lawn_mower_gas_powered",
		"name": "Lawn mower (gas-powered)"
	},
	{
		"id": "leaves",
		"name": "Leaves"
	},
	{
		"id": "led_light",
		"name": "LED light"
	},
	{
		"id": "leftovers",
		"name": "Leftovers"
	},
	{
		"id": "lentils_and_beans",
		"name": "Lentils and Beans"
	},
	{
		"id": "light_box",
		"name": "Light box"
	},
	{
		"id": "light_bulb",
		"name": "Light bulb"
	},
	{
		"id": "light_bulb_incandescent",
		"name": "Light bulb (incandescent)"
	},
	{
		"id": "light_emitting_diode_lamp",
		"name": "Light Emitting Diode lamp"
	},
	{
		"id": "light_fixture_all_types",
		"name": "Light fixture (all types)"
	},
	{
		"id": "lighting_ballast",
		"name": "Lighting ballast"
	},
	{
		"id": "light_strings",
		"name": "Light strings"
	},
	{
		"id": "liquid_adhesive_flammable",
		"name": "Liquid Adhesive (flammable)"
	},
	{
		"id": "liquid_laundry_detergent",
		"name": "Liquid Laundry detergent"
	},
	{
		"id": "liquid_soap_refill_pouch",
		"name": "Liquid Soap refill pouch"
	},
	{
		"id": "loose_leaf_paper",
		"name": "Loose leaf paper"
	},
	{
		"id": "loose_tea",
		"name": "Loose tea"
	},
	{
		"id": "luggage",
		"name": "Luggage"
	},
	{
		"id": "magarine_tub",
		"name": "Magarine tub"
	},
	{
		"id": "magazines",
		"name": "Magazines"
	},
	{
		"id": "magnet",
		"name": "Magnet"
	},
	{
		"id": "mail_box_metal",
		"name": "Mail box (metal)"
	},
	{
		"id": "make_up_sponges",
		"name": "Make-up sponges"
	},
	{
		"id": "masking_tape",
		"name": "Masking tape"
	},
	{
		"id": "mason_jar",
		"name": "Mason jar"
	},
	{
		"id": "mat",
		"name": "Mat"
	},
	{
		"id": "match",
		"name": "Match"
	},
	{
		"id": "mattress",
		"name": "Mattress"
	},
	{
		"id": "mayonnaise_not_the_jar",
		"name": "Mayonnaise (not the jar)"
	},
	{
		"id": "meat_grinder_electric",
		"name": "Meat grinder (electric)"
	},
	{
		"id": "meat_scraps",
		"name": "Meat scraps"
	},
	{
		"id": "meat_tray_absorbent_pad",
		"name": "Meat tray absorbent pad"
	},
	{
		"id": "meat_tray_foam_clean",
		"name": "Meat tray - foam (clean)"
	},
	{
		"id": "medication_unused",
		"name": "Medication (unused)"
	},
	{
		"id": "medium_density_fibreboard_mdf",
		"name": "Medium Density Fibreboard (MDF)"
	},
	{
		"id": "melamine",
		"name": "Melamine"
	},
	{
		"id": "mercury_arc_lamps",
		"name": "Mercury Arc lamps"
	},
	{
		"id": "metal",
		"name": "Metal"
	},
	{
		"id": "metal_lid_from_jar_or_bottle",
		"name": "Metal lid (from jar or bottle)"
	},
	{
		"id": "metal_shower_enclosure",
		"name": "Metal shower enclosure"
	},
	{
		"id": "methyl_hydrate",
		"name": "Methyl Hydrate"
	},
	{
		"id": "microwavable_bowls,_cups,_trays_and_lids_plastic",
		"name": "Microwavable bowls, cups, trays and lids (plastic)"
	},
	{
		"id": "microwave",
		"name": "Microwave"
	},
	{
		"id": "microwave_popcorn_bag",
		"name": "Microwave popcorn bag"
	},
	{
		"id": "milk_bag",
		"name": "Milk bag"
	},
	{
		"id": "milk_cartons",
		"name": "Milk cartons"
	},
	{
		"id": "milk_jug",
		"name": "Milk jug"
	},
	{
		"id": "mineral_spirits",
		"name": "Mineral spirits"
	},
	{
		"id": "moss",
		"name": "Moss"
	},
	{
		"id": "motor_oil",
		"name": "Motor oil"
	},
	{
		"id": "moulded_boxboard_packaging",
		"name": "Moulded boxboard packaging"
	},
	{
		"id": "mouse_computer",
		"name": "Mouse (computer)"
	},
	{
		"id": "mouthwash_bottle",
		"name": "Mouthwash bottle"
	},
	{
		"id": "mp3_player",
		"name": "MP3 player"
	},
	{
		"id": "muffin_paper_cups",
		"name": "Muffin paper cups"
	},
	{
		"id": "mustard_bottle",
		"name": "Mustard bottle"
	},
	{
		"id": "nail_clippings",
		"name": "Nail clippings"
	},
	{
		"id": "nailer",
		"name": "Nailer"
	},
	{
		"id": "nail_polish_/_nail_polish_remover",
		"name": "Nail polish / Nail polish remover"
	},
	{
		"id": "nails_and_screws",
		"name": "Nails and screws"
	},
	{
		"id": "nespresso_pods",
		"name": "Nespresso Pods"
	},
	{
		"id": "net_bag_for_fruits_and_vegetables",
		"name": "Net bag (for fruits and vegetables)"
	},
	{
		"id": "newspaper",
		"name": "Newspaper"
	},
	{
		"id": "newspaper_inserts",
		"name": "Newspaper inserts"
	},
	{
		"id": "night_light",
		"name": "Night light"
	},
	{
		"id": "non_prescription_medication_bottle_empty",
		"name": "Non-prescription medication bottle (empty)"
	},
	{
		"id": "notepad",
		"name": "Notepad"
	},
	{
		"id": "nuts_cannister",
		"name": "Nuts (cannister)"
	},
	{
		"id": "nuts_net_bag",
		"name": "Nuts net bag"
	},
	{
		"id": "nuts_and_shells",
		"name": "Nuts and shells"
	},
	{
		"id": "oatmeal",
		"name": "Oatmeal"
	},
	{
		"id": "oats",
		"name": "Oats"
	},
	{
		"id": "oil_filter",
		"name": "Oil filter"
	},
	{
		"id": "olive_oil_bottle_glass",
		"name": "Olive oil bottle (glass)"
	},
	{
		"id": "onion_bag_net",
		"name": "Onion bag (net)"
	},
	{
		"id": "oral_health_products",
		"name": "Oral health products"
	},
	{
		"id": "organic",
		"name": "Organic"
	},
	{
		"id": "oriented_strand_board",
		"name": "Oriented strand board"
	},
	{
		"id": "oxo_biodegradable_containers",
		"name": "Oxo-Biodegradable containers"
	},
	{
		"id": "packing_paper",
		"name": "Packing paper"
	},
	{
		"id": "padded_envelope_paper_with_plastic_lining",
		"name": "Padded envelope - paper with plastic lining"
	},
	{
		"id": "paint",
		"name": "Paint"
	},
	{
		"id": "paint_can_empty_or_partially_empty",
		"name": "Paint can (empty or partially empty)"
	},
	{
		"id": "paint_chip_card_or_paper",
		"name": "Paint chip (card or paper)"
	},
	{
		"id": "paint_stripper",
		"name": "Paint stripper"
	},
	{
		"id": "paint_thinner",
		"name": "Paint thinner"
	},
	{
		"id": "paint_and_varnish_remover",
		"name": "Paint and varnish remover"
	},
	{
		"id": "panelling",
		"name": "Panelling"
	},
	{
		"id": "panini_press",
		"name": "Panini press"
	},
	{
		"id": "pant_press",
		"name": "Pant press"
	},
	{
		"id": "paper",
		"name": "Paper"
	},
	{
		"id": "paper_bags",
		"name": "Paper bags"
	},
	{
		"id": "paper_cups_for_hot_or_cold_beverages",
		"name": "Paper cups (for hot or cold beverages)"
	},
	{
		"id": "paper_napkin",
		"name": "Paper napkin"
	},
	{
		"id": "paper_non_foil",
		"name": "Paper (non-foil)"
	},
	{
		"id": "paper_plates_and_dishes_uncoated",
		"name": "Paper plates and dishes (uncoated)"
	},
	{
		"id": "paper_straw",
		"name": "Paper straw"
	},
	{
		"id": "paper_takeout_food_containers",
		"name": "Paper takeout food containers"
	},
	{
		"id": "paper_towel",
		"name": "Paper towel"
	},
	{
		"id": "paper_towel_rolls",
		"name": "Paper towel rolls"
	},
	{
		"id": "parchment_paper",
		"name": "Parchment paper"
	},
	{
		"id": "parking_ticket",
		"name": "Parking ticket"
	},
	{
		"id": "particle_board",
		"name": "Particle board"
	},
	{
		"id": "pasta",
		"name": "Pasta"
	},
	{
		"id": "pasta_maker_electric",
		"name": "Pasta Maker (electric)"
	},
	{
		"id": "patio_light",
		"name": "Patio light"
	},
	{
		"id": "peanut_butter",
		"name": "Peanut butter"
	},
	{
		"id": "peanut_butter_jar",
		"name": "Peanut butter jar"
	},
	{
		"id": "peatmoss",
		"name": "Peatmoss"
	},
	{
		"id": "peatmoss_flower_pot",
		"name": "Peatmoss flower pot"
	},
	{
		"id": "peels_fruit_and_vegetable",
		"name": "Peels (fruit and vegetable)"
	},
	{
		"id": "pencil_shavings",
		"name": "Pencil shavings"
	},
	{
		"id": "pepper_and_salt_mill_motorized",
		"name": "Pepper and Salt Mill (motorized)"
	},
	{
		"id": "percolator",
		"name": "Percolator"
	},
	{
		"id": "perfume_bottle_empty",
		"name": "Perfume bottle (empty)"
	},
	{
		"id": "personal_hygiene_wipes",
		"name": "Personal hygiene wipes"
	},
	{
		"id": "pesticides_domestic",
		"name": "Pesticides (domestic)"
	},
	{
		"id": "pet_food_bag_no_foil_lining",
		"name": "Pet food bag (no foil lining)"
	},
	{
		"id": "pet_food_bag_with_foil_layer",
		"name": "Pet food bag (with foil layer)"
	},
	{
		"id": "pet_food_cans",
		"name": "Pet food cans"
	},
	{
		"id": "pet_food_no_bag",
		"name": "Pet food (no bag)"
	},
	{
		"id": "pet_food_pouch",
		"name": "Pet food pouch"
	},
	{
		"id": "phone_book",
		"name": "Phone book"
	},
	{
		"id": "phone_with_cord",
		"name": "Phone (with cord)"
	},
	{
		"id": "photocopier",
		"name": "Photocopier"
	},
	{
		"id": "photocopy_paper",
		"name": "Photocopy paper"
	},
	{
		"id": "photographs_and_negatives",
		"name": "Photographs and negatives"
	},
	{
		"id": "pine_cones",
		"name": "Pine cones"
	},
	{
		"id": "pine_needles",
		"name": "Pine needles"
	},
	{
		"id": "pits_fruit",
		"name": "Pits (fruit)"
	},
	{
		"id": "pizza",
		"name": "Pizza"
	},
	{
		"id": "pizza_box_clean,_no_food_residue",
		"name": "Pizza box (clean, no food residue)"
	},
	{
		"id": "pizza_box_soiled_with_grease,_cheese,_etc",
		"name": "Pizza box (soiled with grease, cheese, etc)"
	},
	{
		"id": "planer",
		"name": "Planer"
	},
	{
		"id": "plant_pots_and_trays_paper_based",
		"name": "Plant pots and trays (paper-based)"
	},
	{
		"id": "plant_pots_and_trays_plastic",
		"name": "Plant pots and trays (plastic)"
	},
	{
		"id": "pla_products",
		"name": "PLA products"
	},
	{
		"id": "plaster",
		"name": "Plaster"
	},
	{
		"id": "plastic_air_packets_for_shipping",
		"name": "Plastic air packets (for shipping)"
	},
	{
		"id": "plastic_bag_bagged_salad",
		"name": "Plastic bag (bagged salad)"
	},
	{
		"id": "plastic_bag_bread",
		"name": "Plastic bag (bread)"
	},
	{
		"id": "plastic_bag_delivered_newspaper",
		"name": "Plastic bag (delivered newspaper)"
	},
	{
		"id": "plastic_bag_dry_bulk_goods",
		"name": "Plastic bag (dry bulk goods)"
	},
	{
		"id": "plastic_bag_drycleaning",
		"name": "Plastic bag (drycleaning)"
	},
	{
		"id": "plastic_bag_for_dried_pasta_crinkly",
		"name": "Plastic bag for dried pasta (crinkly)"
	},
	{
		"id": "plastic_bag_frozen_vegetables",
		"name": "Plastic bag (frozen vegetables)"
	},
	{
		"id": "plastic_bag_garden_products",
		"name": "Plastic bag (garden products)"
	},
	{
		"id": "plastic_bag_produce",
		"name": "Plastic bag (produce)"
	},
	{
		"id": "plastic_bottle_liquid_soap",
		"name": "Plastic bottle - liquid soap"
	},
	{
		"id": "plastic_bottle_squeezable",
		"name": "Plastic bottle (squeezable)"
	},
	{
		"id": "plastic_bucket",
		"name": "Plastic bucket"
	},
	{
		"id": "plastic_clamshells",
		"name": "Plastic clamshells"
	},
	{
		"id": "plastic_cling_wrap",
		"name": "Plastic cling wrap"
	},
	{
		"id": "plastic_clothes_hanger",
		"name": "Plastic clothes hanger"
	},
	{
		"id": "plastic_cold_drink_cups_with_lids",
		"name": "Plastic cold drink cups with lids"
	},
	{
		"id": "plastic_cork",
		"name": "Plastic cork"
	},
	{
		"id": "plastic_cups_single_serving_size",
		"name": "Plastic cups (single serving size)"
	},
	{
		"id": "plastic_cutlery",
		"name": "Plastic cutlery"
	},
	{
		"id": "plastic_deodorant_container",
		"name": "Plastic deodorant container"
	},
	{
		"id": "plastic_flower_pot",
		"name": "Plastic flower pot"
	},
	{
		"id": "plastic_inner_seal_on_yogurt_container",
		"name": "Plastic inner seal on yogurt container"
	},
	{
		"id": "plastic_jar",
		"name": "Plastic jar"
	},
	{
		"id": "plastic_jug",
		"name": "Plastic jug"
	},
	{
		"id": "plastic_jug_or_bottle_used_for_cleaning_products",
		"name": "Plastic jug or bottle used for cleaning products"
	},
	{
		"id": "plastic_liner_cereal_or_cracker_box",
		"name": "Plastic liner (cereal or cracker box)"
	},
	{
		"id": "plastic_overwrap_diapers",
		"name": "Plastic overwrap (diapers)"
	},
	{
		"id": "plastic_overwrap_feminine_hygiene_products",
		"name": "Plastic overwrap (feminine hygiene products)"
	},
	{
		"id": "plastic_overwrap_paper_towels,_bathroom_tissue",
		"name": "Plastic overwrap (paper towels, bathroom tissue)"
	},
	{
		"id": "plastic_overwrap_soft_drink_flats",
		"name": "Plastic overwrap (soft drink flats)"
	},
	{
		"id": "plastic_pail",
		"name": "Plastic pail"
	},
	{
		"id": "plastic_pop_bottle",
		"name": "Plastic pop bottle"
	},
	{
		"id": "plastic_produce_containers",
		"name": "Plastic produce containers"
	},
	{
		"id": "plastic_rings_on_six_pack",
		"name": "Plastic rings on six-pack"
	},
	{
		"id": "plastic_safety_seal_on_bottles_and_jars",
		"name": "Plastic safety seal on bottles and jars"
	},
	{
		"id": "plastic_shipping_envelopes",
		"name": "Plastic shipping envelopes"
	},
	{
		"id": "plastic_shopping_bag",
		"name": "Plastic shopping bag"
	},
	{
		"id": "plastic_single_serve",
		"name": "Plastic single-serve"
	},
	{
		"id": "plastic_squeeze_tube",
		"name": "Plastic squeeze tube"
	},
	{
		"id": "plastic_straw",
		"name": "Plastic straw"
	},
	{
		"id": "plastic_sunscreen_bottle",
		"name": "Plastic sunscreen bottle"
	},
	{
		"id": "plastic_tray_black_with_clear_dome",
		"name": "Plastic tray (black) with clear dome"
	},
	{
		"id": "plastic_tray_cookie_and_cracker_bags",
		"name": "Plastic tray (cookie and cracker bags)"
	},
	{
		"id": "plastic_tubs",
		"name": "Plastic tubs"
	},
	{
		"id": "plastic_utensils",
		"name": "Plastic utensils"
	},
	{
		"id": "plastic_water_bottle",
		"name": "Plastic water bottle"
	},
	{
		"id": "plastic_wrap_for_mattresses,_furniture,_electronics",
		"name": "Plastic wrap for mattresses, furniture, electronics"
	},
	{
		"id": "plastic_wrap_on_facial_tissue_box",
		"name": "Plastic wrap on facial tissue box"
	},
	{
		"id": "plates_uncoated_paper",
		"name": "Plates (uncoated paper)"
	},
	{
		"id": "plywood_treated_or_untreated",
		"name": "Plywood (treated or untreated)"
	},
	{
		"id": "pod_coffee_maker",
		"name": "Pod coffee maker"
	},
	{
		"id": "polisher",
		"name": "Polisher"
	},
	{
		"id": "pool_table",
		"name": "Pool table"
	},
	{
		"id": "pop_can",
		"name": "Pop can"
	},
	{
		"id": "popcorn_maker_electric",
		"name": "Popcorn maker (electric)"
	},
	{
		"id": "popcorn_popped_or_unpopped",
		"name": "Popcorn (popped or unpopped)"
	},
	{
		"id": "popsicle_sticks",
		"name": "Popsicle sticks"
	},
	{
		"id": "portable_fan",
		"name": "Portable fan"
	},
	{
		"id": "portable_heater",
		"name": "Portable heater"
	},
	{
		"id": "portable_stove",
		"name": "Portable stove"
	},
	{
		"id": "postcard",
		"name": "Postcard"
	},
	{
		"id": "posters",
		"name": "Posters"
	},
	{
		"id": "potato_bags_burlap",
		"name": "Potato bags (burlap)"
	},
	{
		"id": "potato_chip_bag",
		"name": "Potato chip bag"
	},
	{
		"id": "potato_chip_cannister",
		"name": "Potato chip cannister"
	},
	{
		"id": "pot_light",
		"name": "Pot light"
	},
	{
		"id": "potpourri",
		"name": "Potpourri"
	},
	{
		"id": "powdered_baby_formula_can",
		"name": "Powdered baby formula can"
	},
	{
		"id": "power_painter",
		"name": "Power painter"
	},
	{
		"id": "prescription_bag_white",
		"name": "Prescription bag (white)"
	},
	{
		"id": "prescription_pill_bottle_empty",
		"name": "Prescription pill bottle (empty)"
	},
	{
		"id": "pressure_cooker",
		"name": "Pressure cooker"
	},
	{
		"id": "primer",
		"name": "Primer"
	},
	{
		"id": "printed_paper",
		"name": "Printed paper"
	},
	{
		"id": "printer",
		"name": "Printer"
	},
	{
		"id": "projector_lcd",
		"name": "Projector (LCD)"
	},
	{
		"id": "propane_cylinder",
		"name": "Propane cylinder"
	},
	{
		"id": "propane_tank_refillable",
		"name": "Propane tank (refillable)"
	},
	{
		"id": "puck_lights",
		"name": "Puck lights"
	},
	{
		"id": "pumpkin",
		"name": "Pumpkin"
	},
	{
		"id": "pumpkin_seeds",
		"name": "Pumpkin seeds"
	},
	{
		"id": "pvc_pipe",
		"name": "PVC pipe"
	},
	{
		"id": "pvc_/_vinyl_containers",
		"name": "PVC / Vinyl containers"
	},
	{
		"id": "q_tips",
		"name": "Q-tips"
	},
	{
		"id": "radio",
		"name": "Radio"
	},
	{
		"id": "recessed_light",
		"name": "Recessed Light"
	},
	{
		"id": "ribbon",
		"name": "Ribbon"
	},
	{
		"id": "rice_bag_woven_plastic",
		"name": "Rice bag - woven plastic"
	},
	{
		"id": "rice_cooked_or_uncooked",
		"name": "Rice (cooked or uncooked)"
	},
	{
		"id": "rice_cooker",
		"name": "Rice cooker"
	},
	{
		"id": "rice_milk_carton",
		"name": "Rice milk - carton"
	},
	{
		"id": "rice_zipper_lock_pouch",
		"name": "Rice - zipper lock pouch"
	},
	{
		"id": "robotic_vacuum",
		"name": "Robotic vacuum"
	},
	{
		"id": "rocks",
		"name": "Rocks"
	},
	{
		"id": "rope_lights",
		"name": "Rope Lights"
	},
	{
		"id": "rope,_twine_or_string_hemp,_jute,_cotton,_sisal",
		"name": "Rope, Twine or String (hemp, jute, cotton, sisal)"
	},
	{
		"id": "rope,_twine_or_string_nylon,_polypropylene,_polyethylene,_polyester",
		"name": "Rope, Twine or String (Nylon, Polypropylene, Polyethylene, Polyester)"
	},
	{
		"id": "rotary_phone",
		"name": "Rotary phone"
	},
	{
		"id": "rotating_laser",
		"name": "Rotating laser"
	},
	{
		"id": "rototiller_residential_use_only",
		"name": "Rototiller (residential use only)"
	},
	{
		"id": "router",
		"name": "Router"
	},
	{
		"id": "rubber_band",
		"name": "Rubber band"
	},
	{
		"id": "sand",
		"name": "Sand"
	},
	{
		"id": "sandbox_plastic",
		"name": "Sandbox - plastic"
	},
	{
		"id": "sander_bench_top_or_free_standing",
		"name": "Sander (bench-top or free-standing)"
	},
	{
		"id": "sander_handheld",
		"name": "Sander (handheld)"
	},
	{
		"id": "satellite_dish",
		"name": "Satellite dish"
	},
	{
		"id": "satellite_receiver",
		"name": "Satellite receiver"
	},
	{
		"id": "sauce",
		"name": "Sauce"
	},
	{
		"id": "saw_bench_top_or_free_standing",
		"name": "Saw (bench top or free-standing)"
	},
	{
		"id": "sawdust",
		"name": "Sawdust"
	},
	{
		"id": "saw_hand_held_powered",
		"name": "Saw (Hand-held - powered)"
	},
	{
		"id": "scale_electronic",
		"name": "Scale (electronic)"
	},
	{
		"id": "scouring_pad",
		"name": "Scouring pad"
	},
	{
		"id": "scrap_metal",
		"name": "Scrap metal"
	},
	{
		"id": "scratch_ticket",
		"name": "Scratch ticket"
	},
	{
		"id": "scuba_gear_electronic",
		"name": "Scuba gear (electronic)"
	},
	{
		"id": "seafood_can",
		"name": "Seafood can"
	},
	{
		"id": "seafood_shells",
		"name": "Seafood shells"
	},
	{
		"id": "security_lighting_with_or_without_camera",
		"name": "Security lighting (with or without camera)"
	},
	{
		"id": "seeds",
		"name": "Seeds"
	},
	{
		"id": "sewing_machine",
		"name": "Sewing machine"
	},
	{
		"id": "shampoo_bottle",
		"name": "Shampoo (bottle)"
	},
	{
		"id": "shaving_cream_aerosol_can",
		"name": "Shaving cream (aerosol can)"
	},
	{
		"id": "shellac",
		"name": "Shellac"
	},
	{
		"id": "shellfish",
		"name": "Shellfish"
	},
	{
		"id": "shelving_metal",
		"name": "Shelving (Metal)"
	},
	{
		"id": "shipping_boxes",
		"name": "Shipping boxes"
	},
	{
		"id": "shoe_box",
		"name": "Shoe box"
	},
	{
		"id": "shoe_single",
		"name": "Shoe (single)"
	},
	{
		"id": "shower_curtain",
		"name": "Shower curtain"
	},
	{
		"id": "shower_rod_metal",
		"name": "Shower rod (metal)"
	},
	{
		"id": "shredded_paper",
		"name": "Shredded paper"
	},
	{
		"id": "shredder",
		"name": "Shredder"
	},
	{
		"id": "shrink_wrap_meat,_poultry,_fish,_cheese",
		"name": "Shrink wrap (meat, poultry, fish, cheese)"
	},
	{
		"id": "sign_plastic_or_vinyl",
		"name": "Sign (plastic or vinyl)"
	},
	{
		"id": "silicone_gel_packets",
		"name": "Silicone gel packets"
	},
	{
		"id": "silicone_sealant",
		"name": "Silicone sealant"
	},
	{
		"id": "sink_metal",
		"name": "Sink (metal)"
	},
	{
		"id": "skewers_wood",
		"name": "Skewers (Wood)"
	},
	{
		"id": "ski_rack_metal",
		"name": "Ski Rack (Metal)"
	},
	{
		"id": "slide_projector",
		"name": "Slide projector"
	},
	{
		"id": "slides_photographic",
		"name": "Slides (photographic)"
	},
	{
		"id": "slow_cooker",
		"name": "Slow cooker"
	},
	{
		"id": "small_appliances",
		"name": "Small Appliances"
	},
	{
		"id": "smoke_alarm",
		"name": "Smoke alarm"
	},
	{
		"id": "snow_blower",
		"name": "Snow blower"
	},
	{
		"id": "softcover_books",
		"name": "Softcover books"
	},
	{
		"id": "soft_drink_cardboard_packaging",
		"name": "Soft drink cardboard packaging"
	},
	{
		"id": "soil",
		"name": "Soil"
	},
	{
		"id": "soldering_equipment",
		"name": "Soldering equipment"
	},
	{
		"id": "solvents",
		"name": "Solvents"
	},
	{
		"id": "soup_can",
		"name": "Soup can"
	},
	{
		"id": "soup_cartons",
		"name": "Soup cartons"
	},
	{
		"id": "soup_maker_electric",
		"name": "Soup Maker (electric)"
	},
	{
		"id": "sour_cream",
		"name": "Sour cream"
	},
	{
		"id": "sour_cream_tub",
		"name": "Sour cream tub"
	},
	{
		"id": "soy_milk_carton",
		"name": "Soy milk carton"
	},
	{
		"id": "space_heater",
		"name": "Space heater"
	},
	{
		"id": "speaker_phones",
		"name": "Speaker phones"
	},
	{
		"id": "speakers",
		"name": "Speakers"
	},
	{
		"id": "spice_grinder_motorized",
		"name": "Spice grinder (motorized)"
	},
	{
		"id": "spices",
		"name": "Spices"
	},
	{
		"id": "spiral_notebook",
		"name": "Spiral notebook"
	},
	{
		"id": "spiral_wound_cans",
		"name": "Spiral wound cans"
	},
	{
		"id": "sponge",
		"name": "Sponge"
	},
	{
		"id": "spotlight_hand_held",
		"name": "Spotlight (hand-held)"
	},
	{
		"id": "spray_adhesive_aerosol",
		"name": "Spray adhesive (aerosol)"
	},
	{
		"id": "spurge_laurel",
		"name": "Spurge laurel"
	},
	{
		"id": "stains",
		"name": "Stains"
	},
	{
		"id": "stairs_metal",
		"name": "Stairs (metal)"
	},
	{
		"id": "stake_lights",
		"name": "Stake lights"
	},
	{
		"id": "stand_mixer",
		"name": "Stand mixer"
	},
	{
		"id": "stand_up_plastic_pouch",
		"name": "Stand-up plastic pouch"
	},
	{
		"id": "steam_cleaner_floor_or_carpet",
		"name": "Steam cleaner (floor or carpet)"
	},
	{
		"id": "stickers_plastic_or_vinyl",
		"name": "Stickers (plastic or vinyl)"
	},
	{
		"id": "sticky_notes",
		"name": "Sticky notes"
	},
	{
		"id": "stove",
		"name": "Stove"
	},
	{
		"id": "strapping_metal",
		"name": "Strapping - metal"
	},
	{
		"id": "strapping__nylon_or_plastic",
		"name": "Strapping -nylon or plastic"
	},
	{
		"id": "straw_hay",
		"name": "Straw (Hay)"
	},
	{
		"id": "string_polypropylene",
		"name": "String (Polypropylene)"
	},
	{
		"id": "strip_lighting",
		"name": "Strip lighting"
	},
	{
		"id": "stucco",
		"name": "Stucco"
	},
	{
		"id": "styrofoam_packaging",
		"name": "Styrofoam packaging"
	},
	{
		"id": "styrofoam_plate_or_tray",
		"name": "Styrofoam plate or tray"
	},
	{
		"id": "submersible_light_pool,_bathtub",
		"name": "Submersible light (pool, bathtub)"
	},
	{
		"id": "sugar_bag_paper",
		"name": "Sugar bag (paper)"
	},
	{
		"id": "sun_chips_compostable_bag",
		"name": "Sun Chips compostable bag"
	},
	{
		"id": "sunscreen_aerosol",
		"name": "Sunscreen (aerosol)"
	},
	{
		"id": "syrup_bottle",
		"name": "Syrup bottle"
	},
	{
		"id": "table_lamp",
		"name": "Table lamp"
	},
	{
		"id": "take_out_containers_plastic",
		"name": "Take-out containers (plastic)"
	},
	{
		"id": "tassimo",
		"name": "Tassimo"
	},
	{
		"id": "tea_bag_paper",
		"name": "Tea bag (paper)"
	},
	{
		"id": "tea_bag_plastic_or_nylon",
		"name": "Tea bag (plastic or nylon)"
	},
	{
		"id": "tea_tin",
		"name": "Tea tin"
	},
	{
		"id": "telephone_answering_machine",
		"name": "Telephone answering machine"
	},
	{
		"id": "telephone_directory",
		"name": "Telephone directory"
	},
	{
		"id": "telescope_electronic",
		"name": "Telescope (electronic)"
	},
	{
		"id": "television",
		"name": "Television"
	},
	{
		"id": "tempered_glass",
		"name": "Tempered glass"
	},
	{
		"id": "tetra_pak_cartons_milk_or_milk_substitutes",
		"name": "Tetra Pak cartons (milk or milk substitutes)"
	},
	{
		"id": "text_books_and_hardcover_books",
		"name": "Text books and Hardcover books"
	},
	{
		"id": "textured_paint",
		"name": "Textured paint"
	},
	{
		"id": "thermal_paper",
		"name": "Thermal paper"
	},
	{
		"id": "thermometer_digital",
		"name": "Thermometer (Digital)"
	},
	{
		"id": "thermostat_containing_mercury",
		"name": "Thermostat (containing Mercury)"
	},
	{
		"id": "thermostat_electronic",
		"name": "Thermostat (electronic)"
	},
	{
		"id": "tiles",
		"name": "Tiles"
	},
	{
		"id": "timer_electronic",
		"name": "Timer (electronic)"
	},
	{
		"id": "tin_foil",
		"name": "Tin foil"
	},
	{
		"id": "tires_car_and_light_truck",
		"name": "Tires - car and light truck"
	},
	{
		"id": "tissue_box",
		"name": "Tissue box"
	},
	{
		"id": "tissue_gift_wrap",
		"name": "Tissue gift wrap"
	},
	{
		"id": "toaster",
		"name": "Toaster"
	},
	{
		"id": "toaster_oven",
		"name": "Toaster oven"
	},
	{
		"id": "toilet_brush_metal",
		"name": "Toilet brush - metal"
	},
	{
		"id": "toilet_brush_plastic",
		"name": "Toilet brush - plastic"
	},
	{
		"id": "toilet_paper_rolls",
		"name": "Toilet paper rolls"
	},
	{
		"id": "toilet_seat",
		"name": "Toilet seat"
	},
	{
		"id": "toothbrush",
		"name": "Toothbrush"
	},
	{
		"id": "toothbrush_electric/rechargeable",
		"name": "Toothbrush - electric/rechargeable"
	},
	{
		"id": "toothpaste_tube",
		"name": "Toothpaste tube"
	},
	{
		"id": "toothpicks",
		"name": "Toothpicks"
	},
	{
		"id": "toys_electronic",
		"name": "Toys - Electronic"
	},
	{
		"id": "track_lighting",
		"name": "Track lighting"
	},
	{
		"id": "transformer",
		"name": "Transformer"
	},
	{
		"id": "treadmill",
		"name": "Treadmill"
	},
	{
		"id": "tree_stump_and_roots",
		"name": "Tree stump and roots"
	},
	{
		"id": "trimmer_yard_electric_or_battery_powered",
		"name": "Trimmer (yard) - electric or battery-powered)"
	},
	{
		"id": "trouble_light",
		"name": "Trouble light"
	},
	{
		"id": "turkey",
		"name": "Turkey"
	},
	{
		"id": "turkey_stuffing",
		"name": "Turkey stuffing"
	},
	{
		"id": "turntable",
		"name": "Turntable"
	},
	{
		"id": "turpentine",
		"name": "Turpentine"
	},
	{
		"id": "tv_satellite_dish",
		"name": "TV satellite dish"
	},
	{
		"id": "twist_ties",
		"name": "Twist ties"
	},
	{
		"id": "typewriter_electronic",
		"name": "Typewriter (electronic)"
	},
	{
		"id": "umbrella",
		"name": "Umbrella"
	},
	{
		"id": "umbrella_patio",
		"name": "Umbrella (patio)"
	},
	{
		"id": "under_cabinet_light",
		"name": "Under cabinet light"
	},
	{
		"id": "urethanes",
		"name": "Urethanes"
	},
	{
		"id": "uv_lamp",
		"name": "UV Lamp"
	},
	{
		"id": "vacuum_bag_and_bag_contents",
		"name": "Vacuum bag and bag contents"
	},
	{
		"id": "vacuum_seal_packaging_plastic",
		"name": "Vacuum seal packaging (plastic)"
	},
	{
		"id": "vanity_mirror_with_lighting",
		"name": "Vanity mirror (with lighting)"
	},
	{
		"id": "varnishes",
		"name": "Varnishes"
	},
	{
		"id": "varsol",
		"name": "Varsol"
	},
	{
		"id": "vcr_or_dvd_player",
		"name": "VCR or DVD player"
	},
	{
		"id": "vegetable_raw",
		"name": "Vegetable"
	},
	{
		"id": "vellum",
		"name": "Vellum"
	},
	{
		"id": "vhs_tapes",
		"name": "VHS tapes"
	},
	{
		"id": "video_game_equipment",
		"name": "Video game equipment"
	},
	{
		"id": "vitamin_plastic_bottle_empty",
		"name": "Vitamin plastic bottle (empty)"
	},
	{
		"id": "vitamins_and_supplements",
		"name": "Vitamins and supplements"
	},
	{
		"id": "waffle_maker",
		"name": "Waffle maker"
	},
	{
		"id": "wallpaper",
		"name": "Wallpaper"
	},
	{
		"id": "wallpaper_steamer",
		"name": "Wallpaper steamer"
	},
	{
		"id": "washing_machine",
		"name": "Washing machine"
	},
	{
		"id": "water_cooler_refrigerated",
		"name": "Water cooler (refrigerated)"
	},
	{
		"id": "waxed_cardboard",
		"name": "Waxed cardboard"
	},
	{
		"id": "waxed_paper",
		"name": "Waxed paper"
	},
	{
		"id": "weeds",
		"name": "Weeds"
	},
	{
		"id": "weed_wacker",
		"name": "Weed wacker"
	},
	{
		"id": "welding_machine",
		"name": "Welding machine"
	},
	{
		"id": "wet_dry_vacuum_cleaner",
		"name": "Wet-dry vacuum cleaner"
	},
	{
		"id": "wheelbarrow_metal",
		"name": "Wheelbarrow (metal)"
	},
	{
		"id": "whipped_cream_aerosol_can",
		"name": "Whipped cream (aerosol can)"
	},
	{
		"id": "white_goods",
		"name": "White goods"
	},
	{
		"id": "white_granulated_sugar_bags",
		"name": "White granulated sugar bags"
	},
	{
		"id": "widget",
		"name": "Widget"
	},
	{
		"id": "window_glass",
		"name": "Window glass"
	},
	{
		"id": "windshield_washer_fluid_plastic_jug",
		"name": "Windshield washer fluid (plastic jug)"
	},
	{
		"id": "wine_bottle",
		"name": "Wine bottle"
	},
	{
		"id": "wine_box",
		"name": "Wine box"
	},
	{
		"id": "wiper_blades",
		"name": "Wiper blades"
	},
	{
		"id": "wire_baling",
		"name": "Wire (baling)"
	},
	{
		"id": "wok_electric",
		"name": "Wok (electric)"
	},
	{
		"id": "wood_ash_cold",
		"name": "Wood ash (cold)"
	},
	{
		"id": "wood_cutting_board",
		"name": "Wood cutting board"
	},
	{
		"id": "wood_finishing_oil",
		"name": "Wood finishing oil"
	},
	{
		"id": "wood_painted,_stained_or_treated_other_than_with_creosote",
		"name": "Wood - painted, stained or treated (other than with creosote)"
	},
	{
		"id": "wood_preservatives",
		"name": "Wood preservatives"
	},
	{
		"id": "wood_shavings",
		"name": "Wood shavings"
	},
	{
		"id": "wood_waste_clean_and_unfinished",
		"name": "Wood waste - clean and unfinished"
	},
	{
		"id": "wood_with_lead_paint",
		"name": "Wood with lead paint"
	},
	{
		"id": "work_light",
		"name": "Work light"
	},
	{
		"id": "wrappers",
		"name": "Wrappers"
	},
	{
		"id": "wreath_natural",
		"name": "Wreath (Natural)"
	},
	{
		"id": "writing_paper",
		"name": "Writing paper"
	},
	{
		"id": "yard_waste",
		"name": "Yard waste"
	},
	{
		"id": "yarn",
		"name": "Yarn"
	},
	{
		"id": "yellow_bag",
		"name": "Yellow bag"
	},
	{
		"id": "yogurt",
		"name": "Yogurt"
	},
	{
		"id": "yogurt_drinks_bottle",
		"name": "Yogurt Drinks (bottle)"
	},
	{
		"id": "yogurt_maker",
		"name": "Yogurt maker"
	},
	{
		"id": "yogurt_single_serve_container",
		"name": "Yogurt (single serve) container"
	},
	{
		"id": "yogurt_tub",
		"name": "Yogurt tub"
	}
]

export { names }