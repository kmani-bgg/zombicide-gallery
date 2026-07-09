// Character data extracted from the single-file gallery.

const characters = [
  {
    "category": "White Death",
    "name": "Dragomir",
    "characterArt": "Dragomir.png",
    "type": [
      "Ranged"
    ],
    "body": "Crossbow",
    "blue": [
      "+1 die: Ranged",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "Range 2+: +1 Damage: Ranged"
    ],
    "red": [
      "+1 to dice roll: Ranged",
      "Escalation: Ranged",
      "Iron hide"
    ]
  },
  {
    "category": "White Death",
    "name": "Jenia",
    "characterArt": "Jenia.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "Horn Bow",
    "blue": [
      "Search: 2 cards",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Combat",
      "+1 free Melee Action"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Move Action",
      "Born leader"
    ]
  },
  {
    "category": "White Death",
    "name": "Lorna",
    "characterArt": "Lorna.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Spear",
    "blue": [
      "+1 free Move Action",
      "Guards: Damage 2: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Combat",
      "Freeze: Combat"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "Super strength"
    ]
  },
  {
    "category": "White Death",
    "name": "Ogon",
    "characterArt": "Ogon.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Combat Shield",
    "blue": [
      "Shove",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Bloodlust: Melee",
      "Iron hide"
    ],
    "red": [
      "+1 free Combat Action",
      "Combat reflexes",
      "Reaper: Melee"
    ]
  },
  {
    "category": "White Death",
    "name": "Sarnaï",
    "characterArt": "Sarnai.png",
    "type": [
      "Magic"
    ],
    "body": "Ice Storm",
    "blue": [
      "Spellcaster",
      "Guards: Slippery"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 max Range",
      "Freeze: Magic"
    ],
    "red": [
      "+1 free Combat Action",
      "Double casting",
      "Spellbook"
    ]
  },
  {
    "category": "White Death",
    "name": "Yasuke",
    "characterArt": "Yasuke.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Katana",
    "blue": [
      "Freeze: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Hit & run"
    ],
    "red": [
      "Bloodlust: Melee",
      "Jump",
      "+1 Damage: Melee"
    ]
  },
  {
    "category": "Chang' E and Hou Yi Box",
    "name": "Chang' E",
    "characterArt": "ChangE.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "Jump",
    "blue": [
      "Jump",
      "Guard: Jump"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Magic Action",
      "+1 free Move Action"
    ],
    "red": [
      "Escalation: Magic",
      "Freeze: Magic",
      "Sprint"
    ]
  },
  {
    "category": "Chang' E and Hou Yi Box",
    "name": "Hou Yi",
    "characterArt": "HouYi.png",
    "type": [
      "Ranged"
    ],
    "body": "War Bow",
    "blue": [
      "+1 to dice roll: Ranged",
      "Guards: Damage 2: Combat"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "Roll 6: +1 Damage: Ranged"
    ],
    "red": [
      "+1 max Range",
      "Escalation: Ranged",
      "Roll 6: +1 die: Combat"
    ]
  },
  {
    "category": "TMNT Timecrash",
    "name": "April O'Neil",
    "characterArt": "AprilONeil.png",
    "type": [
      "Magic"
    ],
    "body": "April's Harp",
    "blue": [
      "Starts with April's Harp",
      "+1 die: Magic"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Magic",
      "Spellcaster"
    ],
    "red": [
      "+1 die: Magic",
      "+1 free Combat Action",
      "Spellbook"
    ]
  },
  {
    "category": "TMNT Timecrash",
    "name": "Casey Jones",
    "characterArt": "CaseyJones.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Casey's Hockey Stick",
    "blue": [
      "Starts with Casey's Hockey Stick",
      "Improvised weapon: Combat"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Bloodlust: Melee",
      "Shove"
    ],
    "red": [
      "+1 Damage: Melee",
      "+1 free Combat Action",
      "Jump"
    ]
  },
  {
    "category": "TMNT Timecrash",
    "name": "Donatello",
    "characterArt": "Donatello.png",
    "type": [
      "Melee"
    ],
    "body": "Donatello's Bo Staff",
    "blue": [
      "Starts with Donatello's Bo Staff",
      "Transmutation"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Turtle Bonus: +2 dice: Combat"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Move Action",
      "Turtle Focus: +3 dice: Combat"
    ]
  },
  {
    "category": "TMNT Timecrash",
    "name": "Leonardo",
    "characterArt": "Leonardo.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Leonardo's Ninjatos",
    "blue": [
      "Starts with Leonardo's Ninjatos",
      "Brother in Arms: +1 free Melee Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Sprint",
      "Turtle Bonus: +2 dice: Combat"
    ],
    "red": [
      "+1 free Move Action",
      "+1 to dice roll: Melee",
      "Turtle Focus: +2 to dice roll: Combat"
    ]
  },
  {
    "category": "TMNT Timecrash",
    "name": "Michelangelo",
    "characterArt": "Michelangelo.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Michelangelo's Nunchakus",
    "blue": [
      "Starts with Michelangelo's Nunchakus",
      "Taunt"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Bloodlust: Melee",
      "Turtle Bonus: +1 to dice roll: Combat"
    ],
    "red": [
      "+1 free Combat Action",
      "Lucky",
      "Turtle Focus: +3 dice: Combat"
    ]
  },
  {
    "category": "TMNT Timecrash",
    "name": "Raphael",
    "characterArt": "Raphael.png",
    "type": [
      "Melee"
    ],
    "body": "Raphael's Sai",
    "blue": [
      "Starts with Raphael's Sai",
      "+1 die: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Bloodlust: Melee",
      "Turtle Bonus: Damage 2: Combat"
    ],
    "red": [
      "+1 free Melee Action",
      "Barbarian",
      "Turtle Focus: Damage 3: Combat"
    ]
  },
  {
    "category": "TMNT Timecrash",
    "name": "Splinter",
    "characterArt": "Splinter.png",
    "type": [
      "Melee"
    ],
    "body": "Splinter's Cane",
    "blue": [
      "Starts with Splinter's Cane",
      "Hit & run"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 Damage: Melee",
      "Turtle Power: 2 for 1"
    ],
    "red": [
      "+1 Damage: Combat",
      "+1 to dice roll: Combat",
      "1 free Turtle Power"
    ]
  },
  {
    "category": "Jennika Box",
    "name": "Jennika",
    "characterArt": "Jennika.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Jennika's Tekko-Kagi",
    "blue": [
      "Jump",
      "Starts with Jennika's Tekko-Kagi"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Hit & run",
      "Turtle Bonus: Damage 2: Combat"
    ],
    "red": [
      "1 free Turtle Power",
      "Reaper: Combat",
      "Roll 6: +1 Damage: Combat"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Alghara Steel-Sworn",
    "characterArt": "AlgharaSteelSworn.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Dagger",
    "blue": [
      "Slippery",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Jump"
    ],
    "red": [
      "+1 Damage: Melee",
      "+1 free Move Action",
      "+1 to dice roll: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Andrea",
    "characterArt": "Andrea.png",
    "type": [
      "Melee"
    ],
    "body": "Dagger",
    "blue": [
      "+1 die: Melee",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "Taunt"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Melee Action",
      "Roll 6: +1 die: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Artema",
    "characterArt": "Artema.png",
    "type": [
      "Melee"
    ],
    "body": "Dagger",
    "blue": [
      "Iron hide",
      "Guards: Marksman"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Damage 2: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Melee",
      "Barbarian"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Badang",
    "characterArt": "Badang.png",
    "type": [
      "Melee"
    ],
    "body": "Dagger",
    "blue": [
      "Super strength",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "Tough"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Move Action",
      "Jump"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Byakko-Maru",
    "characterArt": "ByakkoMaru.png",
    "type": [
      "Melee"
    ],
    "body": "Dagger",
    "blue": [
      "Bloodlust: Melee",
      "Guards: Bloodlust: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Roll 6: +1 Damage: Melee",
      "Escalation: Melee"
    ],
    "red": [
      "+1 die: Melee",
      "+1 free Melee Action",
      "+1 free Move Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Caishen Ye",
    "characterArt": "CaishenYe.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "Can search more than once",
      "Guards: Lucky"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Magic Action",
      "Is that all you've got?"
    ],
    "red": [
      "+1 free Magic Action",
      "Escalation: Magic",
      "Hoard"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Cao Ren",
    "characterArt": "CaoRen.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Great Sword",
    "blue": [
      "Shove",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Tough"
    ],
    "red": [
      "Bloodlust: Melee",
      "Damage 2: Melee",
      "Iron hide"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Cirina Black-Mantle",
    "characterArt": "CirinaBlackMantle.png",
    "type": [
      "Magic"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "Spellcaster",
      "Guards: Lucky"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Magic",
      "Lucky"
    ],
    "red": [
      "+1 die: Magic",
      "Damage 2: Magic",
      "Freeze: Magic"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Cristina",
    "characterArt": "Cristina.png",
    "type": [
      "Magic"
    ],
    "body": "Power Blast",
    "blue": [
      "Spellcaster",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Magic",
      "+1 free Magic Action"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "Marksman"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Da Qiao",
    "characterArt": "DaQiao.png",
    "type": [
      "Magic"
    ],
    "body": "ANY Combat Spell",
    "blue": [
      "+1 free Enchantment Action",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Magic Action",
      "Ironclad: Walker"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Magic",
      "Ironclad: Runner"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Date Masamune",
    "characterArt": "DateMasamune.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Escalation: Combat",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Combat",
      "+1 free Move Action"
    ],
    "red": [
      "+1 free Combat Action",
      "Bloodlust: Melee",
      "Born leader"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "DD",
    "characterArt": "DD.png",
    "type": [
      "Melee"
    ],
    "body": "Disintegrate",
    "blue": [
      "Bloodlust: Melee",
      "Guards: Bloodlust: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Combat Action",
      "Lucky"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Magic Action",
      "+1 free Melee Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Dian Wei",
    "characterArt": "DianWei.png",
    "type": [
      "Melee"
    ],
    "body": "Halberd",
    "blue": [
      "+1 Damage: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Shove"
    ],
    "red": [
      "+1 free Combat Action",
      "Escalation: Melee",
      "Swordmaster"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Diao Chan",
    "characterArt": "DiaoChan.png",
    "type": [
      "Ranged",
      "Support"
    ],
    "body": "War Bow",
    "blue": [
      "Taunt",
      "Guards: Damage 2: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Ranged",
      "+1 free Ranged Action"
    ],
    "red": [
      "+1 die: Ranged",
      "+1 free Ranged Action",
      "Marksman"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Gan Ning",
    "characterArt": "GanNing.png",
    "type": [
      "Support"
    ],
    "body": "Great Axe",
    "blue": [
      "Jump",
      "Guards: Jump"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Hit & run"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Move Action",
      "Damage 2: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Genghis Khan",
    "characterArt": "GenghisKhan.png",
    "type": [
      "Support"
    ],
    "body": "ANY Shield",
    "blue": [
      "Born leader",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Bloodlust: Melee"
    ],
    "red": [
      "+1 free Melee Action",
      "+1 free Move Action",
      "+1 free Ranged Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Haya",
    "characterArt": "Haya.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic"
    ],
    "body": "Crossbow",
    "blue": [
      "+1 die: Combat",
      "Guards: Damage 2: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Ranged",
      "+1 free Move Action"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 max Range",
      "Marksman"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Honda Takadatsu",
    "characterArt": "HondaTakadatsu.png",
    "type": [
      "Support"
    ],
    "body": "ANY Polearm",
    "blue": [
      "Lucky",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Hit & run"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Melee",
      "Regeneration"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Hong Var",
    "characterArt": "HongVar.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "Ice Storm",
    "blue": [
      "+1 die: Magic",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Roll 6: +1 Damage: Magic",
      "Spellcaster"
    ],
    "red": [
      "+1 free Magic Action",
      "+1 to dice roll: Magic",
      "Spellbook"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Hua Mulan",
    "characterArt": "HuaMulan.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Jump",
      "Guards: Lucky"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "+1 free Move Action"
    ],
    "red": [
      "+1 free Melee Action",
      "+1 free Move Action",
      "+1 free Ranged Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Huang Gai",
    "characterArt": "HuangGai.png",
    "type": [
      "Melee"
    ],
    "body": "Great Sword",
    "blue": [
      "Damage 2: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Escalation: Melee"
    ],
    "red": [
      "+1 free Melee Action",
      "Bloodlust: Melee",
      "Shove"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Huang Zhong",
    "characterArt": "HuangZhong.png",
    "type": [
      "Ranged"
    ],
    "body": "War Bow",
    "blue": [
      "+1 free Ranged Action",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Ranged",
      "Marksman"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Ranged",
      "Escalation: Ranged"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Ichiro",
    "characterArt": "Ichiro.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Slippery",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 to dice roll: Melee",
      "+1 free Move Action"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "+1 free Move Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Inugami",
    "characterArt": "Inugami.png",
    "type": [
      "Melee"
    ],
    "body": "Sword",
    "blue": [
      "Regeneration",
      "Guards: +1 to dice roll: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "+1 free Move Action"
    ],
    "red": [
      "+1 free Combat Action",
      "Damage 2: Melee",
      "Escalation: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Jade Empress",
    "characterArt": "JadeEmpress.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Jump",
    "blue": [
      "+1 free Search Action",
      "Guards: Freeze: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 to dice roll: Melee",
      "Hoard"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 die: Combat",
      "+1 free Move Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Jie Ke",
    "characterArt": "JieKe.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "Lucky",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 to dice roll: Melee",
      "Jump"
    ],
    "red": [
      "+1 free Combat Action",
      "Bloodlust: Combat",
      "Spellcaster"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Jiraiya",
    "characterArt": "Jiraiya.png",
    "type": [
      "Melee",
      "Magic",
      "Support"
    ],
    "body": "Dagger",
    "blue": [
      "Jump",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Magic Action",
      "+1 free Melee Action"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "Lucky"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Kido-Maru",
    "characterArt": "KidoMaru.png",
    "type": [
      "Melee"
    ],
    "body": "Sword",
    "blue": [
      "+1 free Melee Action",
      "Guards: Bloodlust: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "Swordmaster"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Melee Action",
      "Taunt"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Kodai-In",
    "characterArt": "KodaiIn.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Jump",
      "Guards: Damage 2: Mele"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Born leader",
      "Damage 2: Melee"
    ],
    "red": [
      "+1 free Melee Action",
      "+1 to dice roll: Melee",
      "Escalation: Mele"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Komatsuhime",
    "characterArt": "Komatsuhime.png",
    "type": [
      "Ranged",
      "Support"
    ],
    "body": "War Bow",
    "blue": [
      "Freeze: Ranged",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "+1 max Range"
    ],
    "red": [
      "+1 die: Ranged",
      "+1 free Ranged Action",
      "Escalation: Ranged"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Kotahi",
    "characterArt": "Kotahi.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Combat Shield",
    "blue": [
      "Taunt",
      "Guards: Lucky"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Roll 6: +1 Damage: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "Escalation: Melee",
      "Jump"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Kurokage-Maru",
    "characterArt": "KurokageMaru.png",
    "type": [
      "Melee"
    ],
    "body": "Katana",
    "blue": [
      "Damage 2: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "+1 to dice roll: Melee"
    ],
    "red": [
      "+1 free Melee Action",
      "Hit & run",
      "Roll 6: +1 Damage: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Lakshmana",
    "characterArt": "Lakshmana.png",
    "type": [
      "Ranged"
    ],
    "body": "War Bow",
    "blue": [
      "Brother in arms: +1 free Ranged Action",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Brother in arms: +1 to dice roll: Ranged",
      "Damage 2: Ranged"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "Shove"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Lapu Lapu",
    "characterArt": "LapuLapu.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Shove",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Taunt"
    ],
    "red": [
      "+1 free Combat Action",
      "Escalation: Melee",
      "Freeze: Combat"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Lu Bu",
    "characterArt": "LuBu.png",
    "type": [
      "Melee",
      "Ranged"
    ],
    "body": "Halberd",
    "blue": [
      "+1 die: Combat",
      "Guards: +1 Damage: Combat"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "+1 free Ranged Action"
    ],
    "red": [
      "+1 free Combat Action",
      "Roll 6: +1 die: Melee",
      "Roll 6: +1 die: Ranged"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Ma Chao",
    "characterArt": "MaChao.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Guisarme",
    "blue": [
      "+1 free Move Action",
      "Guards: +1 Zone per Move"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Charge"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Combat",
      "Roll 6: +1 die: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Maeda Matsu",
    "characterArt": "MaedaMatsu.png",
    "type": [
      "Melee",
      "Magic",
      "Support"
    ],
    "body": "Great Sword",
    "blue": [
      "Sprint",
      "Guards: +1 Zone per Move"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Spellcaster"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "Spellbook"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Maki",
    "characterArt": "Maki.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Great Axe",
    "blue": [
      "Taunt",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Roll 6: +1 Damage: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Melee",
      "Escalation: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Marquis of Mao",
    "characterArt": "MarquisofMao.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Dagger",
    "blue": [
      "Improvised weapon: Melee",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "+1 free Move Action"
    ],
    "red": [
      "+1 free Combat Action",
      "Damage 2: Melee",
      "Jump"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Meili",
    "characterArt": "Meili.png",
    "type": [],
    "body": "Horn Bow",
    "blue": [
      "Hit & run",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "Point-blank"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Move Action",
      "Damage 2: Ranged"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Midoriko",
    "characterArt": "Midoriko.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "Shove",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Lucky",
      "Spellcaster"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Enchantment Action",
      "+1 free Move Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Miyamoto Musashi",
    "characterArt": "MiyamotoMusashi.png",
    "type": [
      "Melee"
    ],
    "body": "Dagger",
    "blue": [
      "+1 to dice roll: Melee",
      "Starts with a Katana"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Lucky"
    ],
    "red": [
      "+1 free Melee Action",
      "+1 to dice roll: Melee",
      "Hit & run"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Mu Guiying",
    "characterArt": "MuGuiying.png",
    "type": [
      "Melee",
      "Magic",
      "Support"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "+1 free Melee Action",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Magic Action",
      "+1 free Melee Action"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "+1 to dice roll: Combat"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Nezha",
    "characterArt": "Nezha.png",
    "type": [
      "Melee",
      "Ranged",
      "Support"
    ],
    "body": "Sprint (Enchantment)",
    "blue": [
      "Jump",
      "Guards: Jump"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "+1 to dice roll: Ranged"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "+1 free Move Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Ohori Tsuruhime",
    "characterArt": "OhoriTsuruhime.png",
    "type": [
      "Ranged"
    ],
    "body": "War Bow",
    "blue": [
      "Reaper: Ranged",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 to dice roll: Ranged",
      "Escalation: Ranged"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Move Action",
      "Lucky"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Okuni",
    "characterArt": "Okuni.png",
    "type": [
      "Support"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "Slippery",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Brother in arms: Roll 6: +1 Damage: Combat"
    ],
    "red": [
      "+1 free Combat Action",
      "Brother in arms: +1 to dice roll: Combat",
      "Spellbook"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Rajaraja Chola",
    "characterArt": "RajarajaChola.png",
    "type": [
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Born leader",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Shove"
    ],
    "red": [
      "+1 free Melee Action",
      "+1 to dice roll: Melee",
      "Bloodlust: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Rama",
    "characterArt": "Rama.png",
    "type": [
      "Ranged"
    ],
    "body": "War Bow",
    "blue": [
      "Roll 6: +1 die: Ranged",
      "Guards: Damage 2: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 to dice roll: Ranged",
      "Roll 6: +1 Damage: Ranged"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 max Range",
      "Hit & run"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Rebecca",
    "characterArt": "Rebecca.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "Choose Any Skill",
      "Guards: Freeze: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Freeze: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Move Action",
      "Lifesaver"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Renart",
    "characterArt": "Renart.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "Power Blast",
    "blue": [
      "Slippery",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 to dice roll: Magic",
      "Spellcaster"
    ],
    "red": [
      "+1 free Move Action",
      "Roll 6: +1 Damage: Magic",
      "Roll 6: +1 die: Magic"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Richard",
    "characterArt": "Richard.png",
    "type": [
      "Ranged"
    ],
    "body": "War Bow",
    "blue": [
      "+1 die: Ranged",
      "Guards: Damage 2: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "Damage 2: Ranged"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 max Range",
      "Iron rain"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Saika Magoichi",
    "characterArt": "SaikaMagoichi.png",
    "type": [
      "Ranged"
    ],
    "body": "Horn Bow",
    "blue": [
      "+1 max Range",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "Roll 6: +1 Damage: Ranged"
    ],
    "red": [
      "+1 free Combat Action",
      "Hit & run",
      "Lucky"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Sanada Yukimura",
    "characterArt": "SanadaYukimura.png",
    "type": [
      "Melee"
    ],
    "body": "Halberd",
    "blue": [
      "Barbarian",
      "Guards: Reach"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Roll 6: +1 die: Combat"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Melee",
      "Lucky"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Sarana Far-Sight",
    "characterArt": "SaranaFarSight.png",
    "type": [
      "Ranged",
      "Support"
    ],
    "body": "Horn Bow",
    "blue": [
      "+1 max Range",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "Brother in Arms: +1 free Combat Action"
    ],
    "red": [
      "+1 Damage: Ranged",
      "+1 to dice roll: Ranged",
      "Roll 6: +1 die: Ranged"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Sha Wujing",
    "characterArt": "ShaWujing.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "Hoard",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "+1 free Move Action"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Enchantment Action",
      "Bloodlust: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "She Saihua",
    "characterArt": "SheSaihua.png",
    "type": [
      "Magic"
    ],
    "body": "ANY Combat Spell",
    "blue": [
      "+1 die: Magic",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Roll 6: +1 die: Magic",
      "Spellcaster"
    ],
    "red": [
      "+1 free Magic Action",
      "+1 to dice roll: Magic",
      "Hit & run"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Sun Quan",
    "characterArt": "SunQuan.png",
    "type": [
      "Melee"
    ],
    "body": "Sword",
    "blue": [
      "Reaper: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Damage 2: Melee"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "Barbarian"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Sun Tzu",
    "characterArt": "SunTzu.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "ANY Combat Spell",
    "blue": [
      "Brother in arms: +1 free Combat Action",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Brother in arms: Spellcaster",
      "Lucky"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 free Move Action",
      "Roll 6: +1 die: Combat"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Sun Wukong",
    "characterArt": "SunWukong.png",
    "type": [
      "Support"
    ],
    "body": "ANY Polearm",
    "blue": [
      "Sprint",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Jump"
    ],
    "red": [
      "+1 free Combat Action",
      "Lucky",
      "Super strength"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Suzuka Gozen",
    "characterArt": "SuzukaGozen.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Slippery",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Reaper: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 Zone per Move",
      "Spellcaster"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Tang Sanzang",
    "characterArt": "TangSanzang.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "ANY Combat Spell",
    "blue": [
      "Damage 2: Magic",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Escalation: Magic",
      "Spellbook"
    ],
    "red": [
      "+1 to dice roll: Combat",
      "Lucky",
      "Spellcaster"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "The Young Phoenix",
    "characterArt": "TheYoungPhoenix.png",
    "type": [
      "Magic"
    ],
    "body": "ANY Combat Spell",
    "blue": [
      "Spellbook",
      "Guards: Freeze: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Magic Action",
      "+1 to Dice Roll: Magic"
    ],
    "red": [
      "+1 Die: Magic",
      "Freeze: Magic",
      "Spellcaster"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Tomoe Gozen",
    "characterArt": "TomoeGozen.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic"
    ],
    "body": "Sprint (Enchantment)",
    "blue": [
      "+1 die: Combat",
      "Guards: Lucky"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Swordmaster"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "Roll 6: +1 die: Combat"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Uesugi Aya",
    "characterArt": "UesugiAya.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "ANY Enchantment",
    "blue": [
      "Spellbook",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Magic",
      "Spellcaster"
    ],
    "red": [
      "+1 free Combat Action",
      "Damage 2: Magic",
      "Double casting"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Wei Yan",
    "characterArt": "WeiYan.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Halberd",
    "blue": [
      "Taunt",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Barbarian",
      "+1 free Melee Action"
    ],
    "red": [
      "+1 free Combat Action",
      "Escalation: Melee",
      "Roll 6: +1 Damage: Melee"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Xiahou Yuan",
    "characterArt": "XiahouYuan.png",
    "type": [
      "Ranged",
      "Support"
    ],
    "body": "War Bow",
    "blue": [
      "+1 free Move Action",
      "Guards: +1 Zone per Move"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "Damage 2: Ranged"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Ranged",
      "Escalation: Ranged"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Xu Chu",
    "characterArt": "XuChu.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Great Axe",
    "blue": [
      "Shove",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 Damage: Melee",
      "Roll 6: +1 die: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "Barbarian",
      "Lucky"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Yi Sun-Sin",
    "characterArt": "YiSunSin.png",
    "type": [
      "Melee"
    ],
    "body": "Sword",
    "blue": [
      "Tough",
      "Guards: Damage 2: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Hit & run",
      "Roll 6: +1 Damage: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "Brother in arms: Ironclad: Abomination",
      "Born leader"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Zhao Yun",
    "characterArt": "ZhaoYun.png",
    "type": [
      "Melee"
    ],
    "body": "ANY Polearm",
    "blue": [
      "Bloodlust: Melee",
      "Close-quarter master"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "Reaper: Melee"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "+1 free Guard Action"
    ]
  },
  {
    "category": "Frozen Fortress",
    "name": "Zuo Ci",
    "characterArt": "ZuoCi.png",
    "type": [
      "Magic"
    ],
    "body": "Sprint (Enchantment)",
    "blue": [
      "Spellbook",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Escalation: Magic",
      "Spellcaster"
    ],
    "red": [
      "+1 free Magic Action",
      "+1 to dice roll: Magic",
      "Roll 6: +1 Damage: Magic"
    ]
  },
  {
    "category": "Usagi Yojimbo Box",
    "name": "Miyamoto Usagi",
    "characterArt": "MiyamotoUsagi.png",
    "type": [
      "Melee"
    ],
    "body": "Katana",
    "blue": [
      "+1 to dice roll: Melee",
      "Starts with a Katana"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Hit & run",
      "Jump"
    ],
    "red": [
      "+1 Damage: Melee",
      "+1 free Combat Action",
      "+1 free Move Action"
    ]
  },
  {
    "category": "Celestial Knights",
    "name": "Alrakis",
    "characterArt": "Alrakis.png",
    "type": [
      "Melee"
    ],
    "body": "ONLY Armor",
    "blue": [
      "Iron hide"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Bloodlust: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "Roll 6: +1 die: Melee",
      "Shove"
    ]
  },
  {
    "category": "Celestial Knights",
    "name": "Avenging Princess Stellar",
    "characterArt": "PrincessStellar.png",
    "type": [
      "Support"
    ],
    "body": "ONLY Armor",
    "blue": [
      "Born leader"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Brother in Arms: +1 free Combat Action",
      "Hit & run"
    ],
    "red": [
      "+1 Action",
      "+1 to dice roll: Combat",
      "Brother in Arms: Escalation: Combat"
    ]
  },
  {
    "category": "Celestial Knights",
    "name": "Eridan",
    "characterArt": "Eridan.png",
    "type": [
      "Magic"
    ],
    "body": "ONLY Armor",
    "blue": [
      "Taunt"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Magic Action",
      "Roll 6: +1 Damage: Magic"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Magic",
      "Spellcaster"
    ]
  },
  {
    "category": "Celestial Knights",
    "name": "Markan",
    "characterArt": "Markan.png",
    "type": [
      "Melee"
    ],
    "body": "ONLY Armor",
    "blue": [
      "+1 die: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "+1 free Melee Action"
    ],
    "red": [
      "+1 die: Melee",
      "+1 free Combat Action",
      "Barbarian"
    ]
  },
  {
    "category": "Celestial Knights",
    "name": "Mirak",
    "characterArt": "Mirak.png",
    "type": [
      "Melee"
    ],
    "body": "ONLY Armor",
    "blue": [
      "Lifesaver"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Escalation: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "Close-Quarter Master",
      "Super strength"
    ]
  },
  {
    "category": "Celestial Knights",
    "name": "Sadir",
    "characterArt": "Sadir.png",
    "type": [
      "Ranged"
    ],
    "body": "ONLY Armor",
    "blue": [
      "Roll 6: +1 Damage: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Ranged Action",
      "Slippery"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 max Range",
      "+1 to dice roll: Ranged"
    ]
  },
  {
    "category": "Virtues of Bushido",
    "name": "Homare",
    "characterArt": "Homare.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "Katana",
    "blue": [
      "Shove",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Combat",
      "+1 free Combat Action"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Melee Action",
      "+1 free Move Action"
    ]
  },
  {
    "category": "Virtues of Bushido",
    "name": "Isamu",
    "characterArt": "Isamu.png",
    "type": [
      "Melee"
    ],
    "body": "Katana",
    "blue": [
      "Damage 2: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "+1 free Melee Action"
    ],
    "red": [
      "+1 free Combat Action",
      "Roll 6: +1 Damage: Melee",
      "Shove"
    ]
  },
  {
    "category": "Virtues of Bushido",
    "name": "Jin",
    "characterArt": "Jin.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Katana",
    "blue": [
      "+1 free Move Action",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Hit & run"
    ],
    "red": [
      "+1 free Combat Action",
      "Escalation: Melee",
      "Jump"
    ]
  },
  {
    "category": "Virtues of Bushido",
    "name": "Makoto",
    "characterArt": "Makoto.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Katana",
    "blue": [
      "Hold your nose",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Is that all you've got?"
    ],
    "red": [
      "+1 free Combat Action",
      "Jump",
      "Lucky"
    ]
  },
  {
    "category": "Virtues of Bushido",
    "name": "Rei",
    "characterArt": "Rei.png",
    "type": [
      "Melee"
    ],
    "body": "Katana",
    "blue": [
      "+1 to dice roll: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "Swordmaster"
    ],
    "red": [
      "+1 die: Melee",
      "+1 free Melee Action",
      "Bloodlust: Melee"
    ]
  },
  {
    "category": "Virtues of Bushido",
    "name": "Tadashi",
    "characterArt": "Tadashi.png",
    "type": [
      "Melee",
      "Ranged"
    ],
    "body": "Katana",
    "blue": [
      "Marksman",
      "Guards: Damage 2: Ranged"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "+1 free Ranged Action"
    ],
    "red": [
      "+1 free Combat Action",
      "Damage 2: Melee",
      "Damage 2: Ranged"
    ]
  },
  {
    "category": "Virtues of Bushido",
    "name": "Yoshitada",
    "characterArt": "Yoshitada.png",
    "type": [
      "Melee"
    ],
    "body": "Katana",
    "blue": [
      "Escalation: Melee",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Roll 6: +1 die: Melee"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Combat Action",
      "Brother in Arms: +1 free Combat Action"
    ]
  },
  {
    "category": "Warlords of the Middle Kingdom",
    "name": "Cao Cao",
    "characterArt": "CaoCao.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Dagger",
    "blue": [
      "Zombie link",
      "Guards: Evade"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Taunt"
    ],
    "red": [
      "+1 die: Combat",
      "+1 free Melee Action",
      "Hit & run"
    ]
  },
  {
    "category": "Warlords of the Middle Kingdom",
    "name": "Guan Yu",
    "characterArt": "GuanYu.png",
    "type": [
      "Melee"
    ],
    "body": "Guisarme",
    "blue": [
      "+1 die: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Escalation: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Melee",
      "Damage 2: Melee"
    ]
  },
  {
    "category": "Warlords of the Middle Kingdom",
    "name": "Liu Bei",
    "characterArt": "LiuBei.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Brother in Arms: +1 free Combat Action",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Shove"
    ],
    "red": [
      "+1 free Combat Action",
      "Brother in Arms: +1 to dice roll: Combat",
      "Roll 6: +1 Damage: Combat"
    ]
  },
  {
    "category": "Warlords of the Middle Kingdom",
    "name": "Sima Yi",
    "characterArt": "SimaYi.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "Jump",
    "blue": [
      "Slippery",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Magic",
      "+1 free Move Action"
    ],
    "red": [
      "+1 free Combat Action",
      "Spellbook",
      "Spellcaster"
    ]
  },
  {
    "category": "Warlords of the Middle Kingdom",
    "name": "Sun Jian",
    "characterArt": "SunJian.png",
    "type": [
      "Melee"
    ],
    "body": "Great Sword",
    "blue": [
      "Bloodlust: Melee",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Melee",
      "Hit & run"
    ],
    "red": [
      "+1 die: Melee",
      "+1 free Melee Action",
      "Damage 2: Melee"
    ]
  },
  {
    "category": "Warlords of the Middle Kingdom",
    "name": "Zhang Fei",
    "characterArt": "ZhangFei.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Halberd",
    "blue": [
      "Shove",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Melee Action",
      "Damage 2: Melee"
    ],
    "red": [
      "+1 free Melee Action",
      "Roll 6: +1 die: Melee",
      "Sprint"
    ]
  },
  {
    "category": "Warlords of the Middle Kingdom",
    "name": "Zhou Yu",
    "characterArt": "ZhouYu.png",
    "type": [
      "Melee",
      "Support"
    ],
    "body": "Sword",
    "blue": [
      "Freeze: Melee",
      "Guards: +1 Zone per Move"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Damage 2: Melee"
    ],
    "red": [
      "+1 free Combat Action",
      "+1 to dice roll: Melee",
      "Hit & run"
    ]
  },
  {
    "category": "Warlords of the Middle Kingdom",
    "name": "Zhuge Liang",
    "characterArt": "ZhugeLiang.png",
    "type": [
      "Magic"
    ],
    "body": "Power Blast",
    "blue": [
      "Spellbook",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Lucky",
      "Spellcaster"
    ],
    "red": [
      "+1 free Enchantment Action",
      "+1 free Magic Action",
      "+1 free Melee Action"
    ]
  },
  {
    "category": "Warlords of the Rising Sun",
    "name": "Akechi Mitsuhide",
    "characterArt": "AkechiMitsuhide.png",
    "type": [
      "Ranged"
    ],
    "body": "War Bow",
    "blue": [
      "+1 die: Ranged",
      "Guards: +1 max Range"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Combat Action",
      "Damage 2: Ranged"
    ],
    "red": [
      "+1 free Ranged Action",
      "Escalation: Ranged",
      "Point-blank"
    ]
  },
  {
    "category": "Warlords of the Rising Sun",
    "name": "Hattori Hanzo",
    "characterArt": "HattoriHanzo.png",
    "type": [
      "Melee"
    ],
    "body": "Dagger",
    "blue": [
      "Reaper: Melee",
      "Guards: Damage 2: Melee"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Escalation: Melee",
      "Hit & run"
    ],
    "red": [
      "+1 free Combat Action",
      "Jump",
      "Roll 6: +1 Damage: Melee"
    ]
  },
  {
    "category": "Warlords of the Rising Sun",
    "name": "Ishida Mitsunari",
    "characterArt": "IshidaMitsunari.png",
    "type": [
      "Magic",
      "Support"
    ],
    "body": "Repulse",
    "blue": [
      "Can search more than once",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Magic Action",
      "Spellbook"
    ],
    "red": [
      "+1 free Melee Action",
      "+1 free Move Action",
      "Freeze: Magic"
    ]
  },
  {
    "category": "Warlords of the Rising Sun",
    "name": "Oda Nobunaga",
    "characterArt": "OdaNobunaga.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "Katana",
    "blue": [
      "Born leader",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 die: Combat",
      "Brother in arms: +1 free Combat Action"
    ],
    "red": [
      "+1 free Move Action",
      "+1 to dice roll: Melee",
      "Brother in arms: Escalation: Combat"
    ]
  },
  {
    "category": "Warlords of the Rising Sun",
    "name": "Takeda Shingen",
    "characterArt": "TakedaShingen.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic"
    ],
    "body": "Katana",
    "blue": [
      "+1 die: Combat",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Escalation: Combat"
    ],
    "red": [
      "+1 free Combat Action",
      "Hit & run",
      "Ironclad: Walker"
    ]
  },
  {
    "category": "Warlords of the Rising Sun",
    "name": "Tokugawa Ieyasu",
    "characterArt": "TokugawaIeyasu.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "Power Blast",
    "blue": [
      "Lucky",
      "Guards: Push"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Bloodlust: Combat",
      "Spellcaster"
    ],
    "red": [
      "+1 free Combat Action",
      "Roll 6: +1 Damage: Combat",
      "Slippery"
    ]
  },
  {
    "category": "Warlords of the Rising Sun",
    "name": "Toyotomi Hideyoshi",
    "characterArt": "ToyotomiHideyoshi.png",
    "type": [
      "Support"
    ],
    "body": "Great Sword",
    "blue": [
      "Born leader",
      "+1 free Guard Action"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "+1 free Move Action",
      "Shove"
    ],
    "red": [
      "+1 free Combat Action",
      "Bloodlust: Melee",
      "Taunt"
    ]
  },
  {
    "category": "Warlords of the Rising Sun",
    "name": "Uesugi Kenshin",
    "characterArt": "UesugiKenshin.png",
    "type": [
      "Melee",
      "Ranged",
      "Magic",
      "Support"
    ],
    "body": "Katana",
    "blue": [
      "Once per Turn: Roll 1 = 6",
      "Guards: Roll 1 = 6"
    ],
    "yellow": [
      "+1 Action"
    ],
    "orange": [
      "Lucky",
      "Roll 6: +1 die: Combat"
    ],
    "red": [
      "+1 free Combat Action",
      "Roll 6: +1 Damage: Combat",
      "Spellcaster"
    ]
  }
];

const koreanNameMap = {
      "Dragomir": "드라고미르",
      "Jenia": "제니아",
      "Lorna": "로나",
      "Ogon": "오곤",
      "Sarnaï": "사르나이",
      "Yasuke": "야스케",
      "Chang' E": "항아",
      "Hou Yi": "후예",
      "April O'Neil": "에이프릴 오닐",
      "Casey Jones": "케이시 존스",
      "Donatello": "도나텔로",
      "Leonardo": "레오나르도",
      "Michelangelo": "미켈란젤로",
      "Raphael": "라파엘",
      "Splinter": "스플린터",
      "Jennika": "제니카",
      "Alghara Steel-Sworn": "알가라 스틸스원",
      "Andrea": "안드레아",
      "Artema": "아르테마",
      "Badang": "바당",
      "Byakko-Maru": "백호마루",
      "Caishen Ye": "재신야",
      "Cao Ren": "조인",
      "Cirina Black-Mantle": "시리나 블랙맨틀",
      "Cristina": "크리스티나",
      "Da Qiao": "대교",
      "Date Masamune": "다테 마사무네",
      "DD": "디디",
      "Dian Wei": "전위",
      "Diao Chan": "초선",
      "Gan Ning": "감녕",
      "Genghis Khan": "칭기즈 칸",
      "Haya": "하야",
      "Honda Takadatsu": "혼다 다카다츠",
      "Hong Var": "홍 바르",
      "Hua Mulan": "뮬란",
      "Huang Gai": "황개",
      "Huang Zhong": "황충",
      "Ichiro": "이치로",
      "Inugami": "이누가미",
      "Jade Empress": "옥황후",
      "Jie Ke": "제커",
      "Jiraiya": "지라이야",
      "Kido-Maru": "키도마루",
      "Kodai-In": "고다이인",
      "Komatsuhime": "고마쓰히메",
      "Kotahi": "코타히",
      "Kurokage-Maru": "쿠로카게마루",
      "Lakshmana": "락슈마나",
      "Lapu Lapu": "라푸라푸",
      "Lu Bu": "여포",
      "Ma Chao": "마초",
      "Maeda Matsu": "마에다 마쓰",
      "Maki": "마키",
      "Marquis of Mao": "마오 후작",
      "Meili": "메이리",
      "Midoriko": "미도리코",
      "Miyamoto Musashi": "미야모토 무사시",
      "Mu Guiying": "목계영",
      "Nezha": "나타",
      "Ohori Tsuruhime": "오호리 쓰루히메",
      "Okuni": "오쿠니",
      "Rajaraja Chola": "라자라자 촐라",
      "Rama": "라마",
      "Rebecca": "레베카",
      "Renart": "르나르",
      "Richard": "리처드",
      "Saika Magoichi": "사이카 마고이치",
      "Sanada Yukimura": "사나다 유키무라",
      "Sarana Far-Sight": "사라나 파사이트",
      "Sha Wujing": "사오정",
      "She Saihua": "사새화",
      "Sun Quan": "손권",
      "Sun Tzu": "손자",
      "Sun Wukong": "손오공",
      "Suzuka Gozen": "스즈카 고젠",
      "Tang Sanzang": "삼장법사",
      "The Young Phoenix": "어린 불사조",
      "Tomoe Gozen": "도모에 고젠",
      "Uesugi Aya": "우에스기 아야",
      "Wei Yan": "위연",
      "Xiahou Yuan": "하후연",
      "Xu Chu": "허저",
      "Yi Sun-Sin": "이순신",
      "Zhao Yun": "조운",
      "Zuo Ci": "좌자",
      "Miyamoto Usagi": "미야모토 우사기",
      "Alrakis": "알라키스",
      "Avenging Princess Stellar": "복수의 공주 스텔라",
      "Eridan": "에리단",
      "Markan": "마르칸",
      "Mirak": "미라크",
      "Sadir": "사디르",
      "Homare": "호마레",
      "Isamu": "이사무",
      "Jin": "진",
      "Makoto": "마코토",
      "Rei": "레이",
      "Tadashi": "다다시",
      "Yoshitada": "요시타다",
      "Cao Cao": "조조",
      "Guan Yu": "관우",
      "Liu Bei": "유비",
      "Sima Yi": "사마의",
      "Sun Jian": "손견",
      "Zhang Fei": "장비",
      "Zhou Yu": "주유",
      "Zhuge Liang": "제갈량",
      "Akechi Mitsuhide": "아케치 미쓰히데",
      "Hattori Hanzo": "핫토리 한조",
      "Ishida Mitsunari": "이시다 미쓰나리",
      "Oda Nobunaga": "오다 노부나가",
      "Takeda Shingen": "다케다 신겐",
      "Tokugawa Ieyasu": "도쿠가와 이에야스",
      "Toyotomi Hideyoshi": "도요토미 히데요시",
      "Uesugi Kenshin": "우에스기 겐신"
};
