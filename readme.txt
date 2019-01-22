X-Wing Miniatures Game AI 2nd Edition
Adding a new ships
1. Create new images in web/img
	Format:		PNG
	Size: 		100x100 pixels
2. Add node to generator/<filename>.xml
3. Run "ant compile"

Adding new Maneuver image
1. Create new image in web/img
	Format:		PNG
	Size: 		50x50 pixels
2. Add maneuver to maneuvers.py
3. Add maneuver to ships.py (generate_tables function)
4. Add maneuver function to xwing_ai2.js

Adding New Factions
1. Create new images in web/img
	Format:		PNG
	Size: 		100x100 pixels
2. Add faction to FACTIONS = variable in generate.py
3. Add faction function to xwing_ai2.js


Distribute:
1. Run "ant dist"
2. File is saved to dist/xwing_ai2.zip

TODO:
* Localization
	* jquery  (client side, just need to download the .js and include it)
	* sangularJs