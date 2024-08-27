const recettesData = {
    "categories": [
        // Nos Pains category
        {
            "id": 1,
            "titre": "Nos Pains",
            "description": "Découvrez notre sélection de pains faits maison, préparés avec des ingrédients de qualité et une touche d'amour.",
            "recettes": [
                // Nos Pains recipes
                {
                    "id": 1,
                    "titre": "Pain Complet",
                    "image": "images/pain-complet.jpg",
                    "description": "Un pain complet délicieux et facile à faire chez soi.",
                    "url": "recette.html?recette=1&recetteCategory=1",
                    "ingredients": [
                        "500g de farine complète",
                        "300ml d'eau tiède",
                        "1 sachet de levure boulangère",
                        "1 cuillère à café de sel",
                        "1 cuillère à soupe d'huile d'olive"
                    ],
                    "instructions": [
                        "Mélangez la farine, la levure et le sel dans un grand bol.",
                        "Ajoutez l'eau tiède et l'huile d'olive, puis mélangez jusqu'à obtenir une pâte homogène.",
                        "Pétrissez la pâte pendant 10 minutes, puis laissez reposer pendant 1 heure.",
                        "Préchauffez votre four à 220°C.",
                        "Formez un pain avec la pâte et enfournez pendant 30 minutes."
                    ]
                },
                {
                    "id": 2,
                    "titre": "Brioche Maison",
                    "image": "images/brioche.jpg",
                    "description": "Une brioche moelleuse et dorée, parfaite pour le petit-déjeuner.",
                    "url": "recette.html?recette=2&recetteCategory=1",
                    "ingredients": [
                        "250g de farine",
                        "3 œufs",
                        "125g de beurre",
                        "50g de sucre",
                        "10g de levure boulangère",
                        "5g de sel"
                    ],
                    "instructions": [
                        "Délayez la levure dans un peu de lait tiède.",
                        "Mélangez la farine, le sucre et le sel dans un grand bol.",
                        "Ajoutez les œufs et la levure délayée, puis pétrissez jusqu'à obtenir une pâte lisse.",
                        "Incorporez le beurre ramolli et pétrissez à nouveau.",
                        "Laissez lever la pâte pendant 2 heures.",
                        "Façonnez la brioche et laissez-la lever à nouveau pendant 1 heure.",
                        "Préchauffez votre four à 180°C et enfournez pendant 25 minutes."
                    ]
                },
                {
                    "id": 3,
                    "titre": "Pain aux Céréales",
                    "image": "images/pain-cereales.jpg",
                    "description": "Un pain savoureux et nutritif, enrichi en graines pour un apport en fibres et en nutriments.",
                    "url": "recette.html?recette=3&recetteCategory=1",
                    "ingredients": [
                        "450g de farine complète",
                        "50g de mélange de graines (tournesol, lin, pavot)",
                        "300ml d'eau tiède",
                        "1 sachet de levure boulangère",
                        "1 cuillère à café de sel",
                        "1 cuillère à soupe de miel"
                    ],
                    "instructions": [
                        "Mélangez la farine, les graines, la levure et le sel dans un grand bol.",
                        "Ajoutez l'eau tiède et le miel, puis mélangez jusqu'à obtenir une pâte homogène.",
                        "Pétrissez la pâte pendant 10 minutes, puis laissez reposer pendant 1 heure.",
                        "Préchauffez votre four à 220°C.",
                        "Formez un pain avec la pâte et enfournez pendant 30 minutes."
                    ]
                },
            ]
        },
        // Nos Pâtisseries category
        {
            "id": 2,
            "titre": "Nos Pâtisseries",
            "description": "Découvrez notre sélection de pâtisseries faites maison, préparées avec des ingrédients de qualité et une touche d'amour.",
            "recettes": [
                // Nos Pâtisseries recipes
                {
                    "id": 4,
                    "titre": "Tarte aux Pommes",
                    "image": "images/tarte-pommes.jpg",
                    "description": "Une tarte classique à base de pommes fondantes sur un lit de pâte croustillante, un délice intemporel.",
                    "url": "recette.html?recette=4&recetteCategory=2",
                    "ingredients": [
                        "1 pâte brisée",
                        "5 pommes",
                        "50g de sucre",
                        "50g de beurre",
                        "1 sachet de sucre vanillé",
                        "1 cuillère à café de cannelle"
                    ],
                    "instructions": [
                        "Préchauffez votre four à 180°C.",
                        "Étalez la pâte brisée dans un moule à tarte.",
                        "Épluchez et tranchez les pommes, puis disposez-les en rosace sur la pâte.",
                        "Saupoudrez de sucre, de sucre vanillé, et de cannelle. Ajoutez des noisettes de beurre sur le dessus.",
                        "Enfournez pendant 35 minutes jusqu'à ce que les pommes soient dorées."
                    ]
                },
                {
                    "id": 5,
                    "titre": "Éclairs au Café",
                    "image": "images/eclairs-cafe.jpg",
                    "description": "Des éclairs gourmands garnis d'une crème pâtissière au café, pour un plaisir raffiné.",
                    "url": "recette.html?recette=5&recetteCategory=2",
                    "ingredients": [
                        "Pâte à choux :",
                        "100g de beurre",
                        "150g de farine",
                        "4 œufs",
                        "250ml d'eau",
                        "1 pincée de sel",
                        "Crème au café :",
                        "500ml de lait",
                        "4 jaunes d'œufs",
                        "100g de sucre",
                        "50g de farine",
                        "2 cuillères à soupe de café soluble"
                    ],
                    "instructions": [
                        "Préparation de la pâte à choux :",
                        "Préchauffez le four à 200°C",
                        "Faites chauffer l'eau, le beurre, et le sel.",
                        "Ajoutez la farine d'un coup, mélangez jusqu'à ce que la pâte se détache des parois.",
                        "Hors du feu, incorporez les œufs un à un.",
                        "Formez des éclairs sur une plaque de cuisson et enfournez 25 minutes.",
                        "Préparation de la crème au café :",
                        "Faites chauffer le lait avec le café.",
                        "Dans un bol, fouettez les jaunes d'œufs avec le sucre, puis ajoutez la farine. ",
                        "Versez le lait chaud en mélangeant, remettez sur feu doux jusqu'à épaississement.",
                        "Garnissez les éclairs refroidis de crème au café et glacez-les."
                    ]
                }
            ]
        },
        // Nos snacks category
        {
            "id": 3,
            "titre": "Nos Snacks",
            "description": "Découvrez notre sélection de snacks faits maison, préparés avec des ingrédients de qualité et une touche d'amour.",
            "recettes": [
                // Nos snacks recipes
                {
                    "id": 6,
                    "titre": "Mini-Quiches Lorraines",
                    "image": "images/mini-quiches-lorraines.jpg",
                    "description": "De petites quiches individuelles à base de lardons et de crème, parfaites pour un buffet ou un apéritif dînatoire.",
                    "url": "recette.html?recette=6&recetteCategory=3",
                    "ingredients": [
                        "1 pâte brisée",
                        "150g de lardons fumés",
                        "100g de gruyère râpé",
                        "200ml de crème fraîche",
                        "2 œufs",
                        "Sel, poivre, muscade"
                    ],
                    "instructions": [
                        "Préchauffez votre four à 180°C.",
                        "Étalez la pâte brisée et découpez des cercles pour foncer des moules à mini-quiches.",
                        "Faites revenir les lardons à la poêle jusqu'à ce qu'ils soient dorés, puis égouttez-les sur du papier absorbant.",
                        "Dans un bol, battez les œufs avec la crème, assaisonnez de sel, poivre, et muscade.",
                        "Répartissez les lardons et le gruyère dans les fonds de pâte, puis versez le mélange crème-œufs.",
                        "Enfournez pendant 20 minutes jusqu'à ce que les quiches soient dorées."
                    ]
                },
                {
                    "id": 7,
                    "titre": "Feuilletés au Jambon et au Fromage",
                    "image": "images/feuilletes-jambon-fromage.jpg",
                    "description": "Des feuilletés croustillants garnis de jambon et de fromage fondu, parfaits pour un apéritif ou un en-cas rapide.",
                    "url": "recette.html?recette=7&recetteCategory=3",
                    "ingredients": [
                        "1 pâte feuilletée",
                        "4 tranches de jambon",
                        "100g de gruyère râpé",
                        "1 jaune d'œuf (pour la dorure)",
                        "1 cuillère à soupe de graines de sésame (facultatif)"
                    ],
                    "instructions": [
                        "Préchauffez votre four à 200°C.",
                        "Étalez la pâte feuilletée et découpez-la en rectangles.",
                        "Sur chaque rectangle, déposez une tranche de jambon et saupoudrez de gruyère râpé.",
                        "Repliez la pâte pour former des feuilletés, soudez bien les bords.",
                        "Badigeonnez de jaune d'œuf et saupoudrez de graines de sésame.",
                        "Enfournez pendant 15 minutes jusqu'à ce que les feuilletés soient dorés."
                    ]
                },
                {
                    "id": 8,
                    "titre": "Sablés au Parmesan et aux Herbes",
                    "image": "images/sables-parmesan-herbes.jpg",
                    "description": "Des sablés salés au parmesan et aux herbes de Provence, parfaits pour accompagner un apéritif.",
                    "url": "recette.html?recette=8&recetteCategory=3",
                    "ingredients": [
                        "150g de farine",
                        "100g de beurre froid",
                        "80g de parmesan râpé",
                        "1 jaune d'œuf",
                        "1 cuillère à soupe d'herbes de Provence",
                        "Sel, poivre"
                    ],
                    "instructions": [
                        "Préchauffez votre four à 180°C.",
                        "Mélangez la farine, le parmesan, et les herbes de Provence dans un bol.",
                        "Ajoutez le beurre coupé en petits morceaux et sablez la pâte du bout des doigts.",
                        "Incorporez le jaune d'œuf et formez une boule de pâte. Si nécessaire, ajoutez un peu d'eau.",
                        "Étalez la pâte sur un plan fariné et découpez des formes à l'emporte-pièce.",
                        "Disposez les sablés sur une plaque de cuisson et enfournez pendant 15 minutes jusqu'à ce qu'ils soient dorés."
                    ]
                }
            ]
        }
    ]
};