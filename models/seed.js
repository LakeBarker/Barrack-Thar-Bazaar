////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const mongoose = require("./connection")
const Item = require("../models/items")

////////////////////////////////////////////
// Seed script for each new session
////////////////////////////////////////////

const db = mongoose.connection

db.on('open', () => {
    const takeInventory = [
        {title: "Longsword", description: "Aye, I regular ole sword. Hold it with two hands or one, it'll cut just fine", price: 150, rarity: 5, available: true},
        {title: "Axe", description: "Good for fellin' tress so I've heard. I prefer fellin orks with 'em", price: 150, rarity: 5, available: true,  },
        {title: "Warhammer", description: "Ah, fan o' Sigmar's work hmm?", price: 150, rarity: 5, available: true,  },
        {title: "Maul", description: "A tool of great size, demands great strength from it's wielder, think yer up to it hm?", price: 200, rarity: 5, available: true,  },
        {title: "Greataxe", description: "This un ain't so good for doin' work. It's even better for cuttin' orks and gobbos down to size though...", price: 200, rarity: 5, available: true,  },
        {title: "Greatsword", description: "A little savegry mixed with yer swordplay hm? Too good fer a shield? No matter, this piece hits hard.", price: 200, rarity: 5, available: true,  },
        {title: "Dagger", description: "Fer sneakin' round and leavin holes in yer enemies 'fore they know what's happenin'. That, or desperately protectin' yerseflf when the rifle breaks.", price: 75, rarity: 5, available: true,  },
        {title: "Club", description: "I don' think ya should take this but it's yer choice. Thing is just a long and heavy stick, not fer a professional like yerself.", price: 50, rarity: 5, available: true,  },
        {title: "Spear", description: "Ye can keep a bloke at range with this, simple ta use as well. Pointy and shiny bit goes towards the enemy. Just don't let 'em get past that shiny end aye?", price: 100, rarity: 5, available: true,  },
        {title: "Bow", description: "Not me weapon, more fer aelves and humans than a good stout dawi. But I mus' admit, them folks what use 'em, they can be right terrifyin'", price: 125, rarity: 5, available: true,  },  
        {title: "Pistol", description: "Ah! Fire and Sulfur, otherwise known as Black Powder Magic! This beautiful little piece let's 'em know exactly how you feel about 'em on the other end!", price: 150, rarity: 10, available: true,  },
        {title: "Rifle", description: "Two-handed and loud as a dragon, hit yer mark at range and watch gobbos, orks, and chaos cultists fall like dominos!", price: 175, rarity: 10, available: true,  },
        {title: "Crossbow", description: "Aye, that be an ol' Duardin standby, let fly a bolt and don' worry fer this beauty'l no' let ye down", price: 150, rarity: 5, available: true,  },
        {title: "Hand Crossbow", description: "A bit lighter, a wee bit less punch, but ye can reload and fire at speed, I hear some use two at once, don' know how", price: 180, rarity: 10, available: true,  },
        {title: "Blunderbuss", description: "A scattergun! leave yer foes submerged in a sea o' smoke. The pellets can help ye' sweep a whole hoard off their feet.", price: 200, rarity: 15, available: true,  },
        {title: "Repeater Pistol", description: "Take it, see how it shines in the light? See the engravin's down the barrel? Piece o art it is. A right deadly piece o' art that is", price: 225, rarity: 20, available: true,  },
        {title: "Light Armor", description: "Somethin' ye can slip 'neath yer clothes, keeps ye a' least a wee bit protected if things go south, don't rely on it to keep ye from takin' more than the lightest o' blows.", price: 100, rarity: 5, available: true,  },
        {title: "Medium Armor", description: "Ah, now we be gettin' ta some serious protection. A good compromise, personal favorite it is.", price: 190, rarity: 10, available: true,  },
        {title: "Heavy Armor", description: "Ye want ta run 'round the field, shruggin off all but the most powerful blows? Ye want ta wade through yer foes? This be a second skin which allows just tha'", price: 245, rarity: 20, available: true,  },
        {title: "Shield", description: "Simple and self explanatry, makes it harder ta hit ye behind a fine piece of steel and wood. ", price: 95, rarity: 10, available: true,  },
        {title: "Arcane Focus", description: "Fer the types what need to use the energies o' the plains to fight their enemies. Make's it easier ta call them winds o' magic. Rare though, a bit hard ta find.", price: 295, rarity: 70, available: true,  },
        {title: "Celestial Wings", description: "A very special piece, found on distant shores these were. The wings o' a stormcast eternal. Now I don' know what ye be needin' fer, but they come at a high price as I came to no small danger when procurin' 'em.", price: 600, rarity: 95, available: true,  },
        {title: "Grimoire", description: "A tome o' magic, keepin' a spellcasters notes and formulae for their works, worth quite a large amount. No ye cannot look at the notes and such before purchasin'", price: 305, rarity: 55, available: true,  },
        {title: "Sea-dragon Cloak", description: "Shimmerin' Fabric there? Made from Ethersea fabric, makes it hard fer a bloke ta hit ya with anything from range, makes it hard ta see ye.", price: 225, rarity: 40, available: true,  },
        {title: "Spyglass", description: "Simple method fer seein' a great distance. A fairly delicate instrument, and expensive fer the fact that those lenses are hard to make.", price: 95, rarity: 35, available: true,  },
        {title: "Waypipes", description: "So ye've takin' a linkin' ta these here pipes? Canno' say I blame ye. These instruments don't only make beautiful music in the hands o' a trained soul, but they allow those who can hear a special song ta move through the roots of the world, iffn ya believe who I got 'em from", price: 750, rarity: 97, available: true,  },
        {title: "Ironbark Oil", description: "Only useful to a Sylvaneth, makes their skin harden as if it were, well, iron. Unfortunately it's more a potion than equipment. Stops workin' after 'bout a day.", price: 180, rarity: 75, available: true,  },
        {title: "Armor of Mallus", description: "Armor made from the core of a dead realm is what me da' called it. I hear that when ye take a blow from some creature or other, you'll get a glimpse of their soul, their wants and needs. Tis a heavy burden.", price: 300, rarity: 95, available: true,  },
        {title: "Deepmire Cloack", description: "Them Aelves of the woods love these slips o' dirty cloth. This little specimen is from the far reaches o' Ghyran. Those other than aelves never get their hands on these, so if they ask you just found it, understand? ", price: 500, rarity: 99, available: true,  },
        {title: "Lesser Twinstone", description: "A Gemstone, beautiful one too. See the swirling ruby and emerald? That stone is a product of the Stormgate, only place it could be made is in Hammerhal. It'll burn all those around, then a wave o' life will fill all those left behind. Be careful how ya use it.", price: 100, rarity: 85, available: true,  },
        {title: "Misthaven Trickknife", description: "A special little number from the docks of Misthaven. This little thing, what do ya see? A comb? interestin', I see a straight pipe. In reality though, it's a dagger fit to rip your innards apart but quick", price: 335, rarity: 70, available: true,  },
        {title: "Pauldrons of Living Flame", description: "The fires surroundin' those pauldrons give them a uniqure property. The fire is nearly a livin' thing, able to understand when ye be in trouble, the fire'll protect ye, and burn yer foes ta ash. ", price: 450, rarity: 80, available: true,  },

    ]

    Item.deleteMany({})
    .then(deletedItems => {
       console.log("Sorry, but the old stock has been sold or bartered, we don't have " + deletedItems + " anymore")
       //now run a for loop that will change whether or not items are available and crreate them
       Item.create(takeInventory)
        .then(data => {
            console.log('here are the newly created items ', data)
            db.close()
        })
        .catch(error => {
            console.log(error)
            db.close()
        })

    })
    .catch(error => {
        console.log(error)
        db.close()
    })
})